const fs = require('fs');
const path = require('path');

const GOOGLE_MAPS_LINKS = {
    'Bomas of Kenya': '<a href="https://maps.app.goo.gl/uX3L3Y7WqY2q6W4a8" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}>Bomas of Kenya</a>',
    'Hemingways Nairobi': '<a href="https://maps.app.goo.gl/3A5T7j9Z2QYw2JqK9" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}>Hemingways Nairobi</a>',
    'Hemingways Ballroom': '<a href="https://maps.app.goo.gl/3A5T7j9Z2QYw2JqK9" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}>Hemingways Ballroom</a>',
    'Nairobi National Park': '<a href="https://maps.app.goo.gl/P2D7N4x4M9w2KqM2A" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}>Nairobi National Park</a>',
    'Nairobi Animal Orphanage': '<a href="https://maps.app.goo.gl/W5Q5R7P3K8x2NqL3A" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}>Nairobi Animal Orphanage</a>',
    'Nairobi Safari Walk': '<a href="https://maps.app.goo.gl/J6R6S8Q4L9y3PqM4B" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}>Nairobi Safari Walk</a>',
};

function fixMaps(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixMaps(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;

            Object.keys(GOOGLE_MAPS_LINKS).forEach(key => {
                const propRegex = new RegExp("(location)=\\\"(.*?)" + key + "(.*?)\\\"", "g");
                if (propRegex.test(content)) {
                    content = content.replace(propRegex, "$1={<>$2" + GOOGLE_MAPS_LINKS[key] + "$3</>}");
                    changed = true;
                }

                const textRegex = new RegExp("([^a-zA-Z0-9\\\"'/])" + key + "([^a-zA-Z0-9\\\"'])", "g");
                if (textRegex.test(content)) {
                    content = content.replace(textRegex, "$1" + GOOGLE_MAPS_LINKS[key] + "$2");
                    changed = true;
                }
            });

            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Fixed Maps in', fullPath);
            }
        }
    }
}
fixMaps('src');
console.log('Done script 2');
