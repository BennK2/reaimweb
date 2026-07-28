const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 1. Set next.config.ts for GitHub Pages deployment
const nextConfigPath = 'next.config.ts';
let nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
const originalNextConfig = nextConfigContent;

if (!nextConfigContent.includes("basePath: '/reaimweb'")) {
    nextConfigContent = nextConfigContent.replace(
        'const nextConfig: NextConfig = {',
        "const nextConfig: NextConfig = {\n  basePath: '/reaimweb',"
    );
    fs.writeFileSync(nextConfigPath, nextConfigContent, 'utf8');
    console.log('Added basePath to next.config.ts');
}

try {
    // 2. Build the project
    console.log('Running npm run build...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // 3. Clear production directory and copy
    const prodDir = 'C:/Users/Kihagi/Documents/REAIM-Prod';
    console.log('Copying to production folder...');
    execSync(`powershell -Command "Remove-Item '${prodDir}\\*' -Recurse -Force -Exclude .git, deploy.bat"`);
    execSync(`powershell -Command "Copy-Item 'out\\*' -Destination '${prodDir}' -Recurse"`);
    
    // 4. Fix CSS URLs (fix2.js logic)
    function fixCssPaths(dir) {
        fs.readdirSync(dir).forEach(file => {
            const full = path.join(dir, file);
            if (fs.statSync(full).isDirectory()) fixCssPaths(full);
            else if (file.endsWith('.css')) {
                let c = fs.readFileSync(full, 'utf8');
                let o = c;
                c = c.replace(/url\(\/(?!\/)(.*?)\)/g, 'url(/reaimweb/$1)');
                if (c !== o) {
                    fs.writeFileSync(full, c, 'utf8');
                }
            }
        });
    }
    console.log('Fixing CSS URLs...');
    fixCssPaths(prodDir);
    
    // 5. Fix HTML/TXT/JS raw URLs (fix3.js logic)
    function fixHtmlPaths(dir) {
        fs.readdirSync(dir).forEach(file => {
            const full = path.join(dir, file);
            if (fs.statSync(full).isDirectory()) fixHtmlPaths(full);
            else if (file.endsWith('.html') || file.endsWith('.txt') || file.endsWith('.js')) {
                let c = fs.readFileSync(full, 'utf8');
                let o = c;
                
                // Only do HTML-like attribute replacement in HTML files
                if (file.endsWith('.html')) {
                    c = c.replace(/(src|href|srcset)=(['"])\/((?!reaimweb)[^'"]+?)(['"])/g, '$1=$2/reaimweb/$3$4');
                }
                
                // Replace raw JSON/JS strings for images
                c = c.replace(/\"\/((?!reaimweb)[^"]+?\.(webp|jpg|png))\"/g, '"/reaimweb/$1"');
                
                if (c !== o) {
                    fs.writeFileSync(full, c, 'utf8');
                }
            }
        });
    }
    console.log('Fixing HTML/TXT/JS URLs...');
    fixHtmlPaths(prodDir);
    
    // 6. Fix Next.js static export __PAGE__.txt payload bug (Powershell logic)
    console.log('Fixing Next.js client-side router payload files...');
    execSync(`powershell -Command "Get-ChildItem -Path '${prodDir}' -Recurse -Filter '__PAGE__.txt' | ForEach-Object { if ($_.Directory.Name -eq '$d$slug') { $parent = $_.Directory.Parent.Name; $grandparent = $_.Directory.Parent.Parent.FullName; $newName = $parent + '.$d$slug.__PAGE__.txt'; Copy-Item $_.FullName -Destination (Join-Path $grandparent $newName) } elseif ($_.Directory.Name.StartsWith('__next.')) { $parent = $_.Directory.Name; $grandparent = $_.Directory.Parent.FullName; $newName = $parent + '.__PAGE__.txt'; Copy-Item $_.FullName -Destination (Join-Path $grandparent $newName) } }"`);
    
    console.log('Production build processed successfully!');
} finally {
    // 7. Revert next.config.ts
    fs.writeFileSync(nextConfigPath, originalNextConfig, 'utf8');
    console.log('Reverted next.config.ts to local dev mode');
}
