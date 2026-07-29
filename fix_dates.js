const fs = require('fs');
const path = require('path');

const REPLACEMENTS = [
    { search: /7[–-]8 April 2027/g, replace: '14–15 April 2027' },
    { search: /6 April 2027 \(Pre-Summit\)/g, replace: '13 April 2027 (Pre-Summit)' },
    { search: /7 April 2027 \(Day 1\)/g, replace: '14 April 2027 (Day 1)' },
    { search: /8 April 2027 \(Day 2\)/g, replace: '15 April 2027 (Day 2)' },
    { search: /6, 7 & 8 April 2027/g, replace: '13, 14 & 15 April 2027' },
    { search: /Pre-summit regional consultations occur on 6 April 2027/g, replace: 'Pre-summit regional consultations occur on 13 April 2027' }
];

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (/\.(tsx|ts|html)$/.test(fullPath)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;

            for (const { search, replace } of REPLACEMENTS) {
                if (search.test(content)) {
                    content = content.replace(search, replace);
                    changed = true;
                }
            }

            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Fixed dates in', fullPath);
            }
        }
    }
}

processDir('src');
processDir('public');
console.log('Done script 3');
