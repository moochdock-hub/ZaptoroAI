const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'ZAPTOROAI.html'),'utf8');
const re = /animation-delay:\s*([\d.]+s)/gi;
const set = new Set();
let m;
while ((m = re.exec(html)) !== null) set.add(m[1]);
console.log(Array.from(set).sort().join('\n'));
