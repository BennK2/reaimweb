const fs = require('fs');
const path = require('path');

function processFile(filePath, replacer) {
    let content = fs.readFileSync(filePath, 'utf8');
    const newContent = replacer(content);
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Updated ' + filePath);
    }
}

// 1. Icon instead of emoji in Header
processFile('src/components/layout/Header.tsx', content => {
    let c = content.replace('<span>📱 Event App</span>', '<Smartphone size={16} /> <span>Event App</span>');
    if (c.includes('<Smartphone size={16} />') && !c.includes('Smartphone')) {
        c = c.replace('import { Menu, Globe }', 'import { Menu, Globe, Smartphone }');
    }
    return c;
});

// 2. Fix images in news.ts
processFile('src/data/news.ts', content => {
    return content.replace(/image:\s*['"](\/news-[^'"]+\.webp)['"]/g, "image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}$1`");
});

// 4. Cabinet Secretary for Defence
function replaceMinister(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceMinister(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            processFile(fullPath, content => content.replace(/Minister of Defence/g, 'Cabinet Secretary for Defence'));
        }
    }
}
replaceMinister('src');

// 3. African Kenyan print on page headers
function addPrintToHeaders(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            addPrintToHeaders(fullPath);
        } else if (fullPath.endsWith('page.tsx')) {
            processFile(fullPath, content => {
                if (content.includes('className={styles.pageHeader}')) {
                    return content.replace(
                        /<header className=\{styles\.pageHeader\}>/g,
                        `<header className={styles.pageHeader} style={{ backgroundImage: \`linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.95)), url(\\$\\{process.env.NEXT_PUBLIC_BASE_PATH || ''\\}/african-print.webp)\`, backgroundSize: 'cover', backgroundPosition: 'center' }}>`
                    );
                }
                return content;
            });
        }
    }
}
addPrintToHeaders('src/app');

console.log('Done script 1');
