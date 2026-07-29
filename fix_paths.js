const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;

            // Fix escaped template literals
            const wrongSrcRegex = /src=\{`\\\$\{process\.env\.NEXT_PUBLIC_BASE_PATH \|\| ''\}(\/[^`]+)`\}/g;
            if (wrongSrcRegex.test(content)) {
                content = content.replace(wrongSrcRegex, "src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}$1`}");
                changed = true;
            }

            const wrongHrefRegex = /href=\{`\\\$\{process\.env\.NEXT_PUBLIC_BASE_PATH \|\| ''\}(\/[^`]+)`\}/g;
            if (wrongHrefRegex.test(content)) {
                content = content.replace(wrongHrefRegex, "href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}$1`}");
                changed = true;
            }

            if (fullPath.endsWith('.tsx')) {
                const wrongBgRegex = /backgroundImage: `url\(\\\$\{process\.env\.NEXT_PUBLIC_BASE_PATH \|\| ''\}(\/[^`]+)\)`/g;
                if (wrongBgRegex.test(content)) {
                    content = content.replace(wrongBgRegex, "backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}$1)`");
                    changed = true;
                }
            }

            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Fixed', fullPath);
            }
        }
    }
}

processDir('src');
console.log('Done');
