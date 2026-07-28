const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Reverse the prepended /reaimweb/
    content = content.replace(/src="\/reaimweb\//g, 'src="/');
    content = content.replace(/src='\/reaimweb\//g, "src='/");
    content = content.replace(/url\('\/reaimweb\//g, "url('/");
    content = content.replace(/url\("\/reaimweb\//g, 'url("/');
    content = content.replace(/image:\s*['"]\/reaimweb\//g, "image: '/");

    if (original !== content) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Reverted', file);
    }
});
