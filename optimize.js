const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processImages() {
    const publicDir = path.join(__dirname, 'public');
    const files = fs.readdirSync(publicDir);
    
    for (const file of files) {
        if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
            const ext = path.extname(file);
            const basename = path.basename(file, ext);
            const inputPath = path.join(publicDir, file);
            const outputPath = path.join(publicDir, `${basename}.webp`);
            
            console.log(`Processing: ${file} -> ${basename}.webp`);
            
            try {
                // Get image metadata to check width
                const metadata = await sharp(inputPath).metadata();
                
                let transform = sharp(inputPath);
                
                // Resize if wider than 1920px
                if (metadata.width > 1920) {
                    transform = transform.resize({ width: 1920, withoutEnlargement: true });
                }
                
                // Convert to webp and save
                await transform.webp({ quality: 80 }).toFile(outputPath);
                
                // Delete original
                fs.unlinkSync(inputPath);
                
                // Now, update references in src/
                updateCodebaseReferences(`/${file}`, `/${basename}.webp`);
                
            } catch (err) {
                console.error(`Failed to process ${file}:`, err);
            }
        }
    }
}

function updateCodebaseReferences(oldStr, newStr) {
    function walk(dir) {
        fs.readdirSync(dir).forEach(f => {
            const fullPath = path.join(dir, f);
            if (fs.statSync(fullPath).isDirectory()) {
                walk(fullPath);
            } else if (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css')) {
                let content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes(oldStr)) {
                    // Only replace the literal old path
                    content = content.split(oldStr).join(newStr);
                    fs.writeFileSync(fullPath, content, 'utf8');
                    console.log(`Updated reference in ${fullPath.replace(__dirname, '')}`);
                }
            }
        });
    }
    
    const srcDir = path.join(__dirname, 'src');
    if (fs.existsSync(srcDir)) walk(srcDir);
}

processImages().then(() => console.log('Done!'));
