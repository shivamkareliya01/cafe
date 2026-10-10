const fs = require('fs');
let html = fs.readFileSync('code.html', 'utf8');
let start = html.indexOf('<!-- THE LAYERS SECTION (ANATOMY OF PERFECTION) -->');
let end = html.indexOf('</footer>') + 9;
let section = html.substring(start, end);
section = section.replace(/`/g, '\\`').replace(/\$/g, '\\$');
let jsx = 'export default function RemainingSections() {\n  return (\n    <div dangerouslySetInnerHTML={{ __html: `' + section + '` }} />\n  );\n}';
fs.writeFileSync('src/RemainingSections.tsx', jsx);
