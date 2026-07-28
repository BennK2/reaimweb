const fs = require('fs');

function extractText(html) {
  let text = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  
  text = text.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n### H1: $1\n');
  text = text.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## H2: $1\n');
  text = text.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n# H3: $1\n');
  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n');
  text = text.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
  text = text.replace(/<[^>]+>/g, ' ');
  
  text = text
    .replace(/&amp;/g, 'and')
    .replace(/&ndash;/g, '-')
    .replace(/&mdash;/g, '-')
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&lsquo;/g, "'")
    .replace(/&eacute;/g, 'e')
    .replace(/&nbsp;/g, ' ')
    .replace(/&hellip;/g, '...')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/&#[\d]+;/g, ' ');
  
  text = text.replace(/\s{3,}/g, '\n\n').trim();
  return text;
}

const pages = ['home','summit','programme','speakers','attend','nairobi','media','resources'];
let report = '';

for (const p of pages) {
  try {
    const html = fs.readFileSync('C:/Users/Kihagi/Documents/REAIM/Web/afs_' + p + '.html', 'utf8');
    const text = extractText(html);
    report += '========== PAGE: ' + p.toUpperCase() + ' ==========\n\n';
    report += text.substring(0, 10000) + '\n\n';
  } catch(e) {
    report += '========== PAGE: ' + p.toUpperCase() + ' - ERROR: ' + e.message + ' ==========\n\n';
  }
}

fs.writeFileSync('C:/Users/Kihagi/Documents/REAIM/Web/afs_text.txt', report);
console.log('Done, total chars:', report.length);
