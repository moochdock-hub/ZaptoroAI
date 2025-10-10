const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'ZAPTOROAI.html'),'utf8');
const re = /<script[^>]*>([\s\S]*?)<\/script>/gi;
let m, i=0;
while ((m = re.exec(html)) !== null) {
  i++;
  const content = m[1];
  const out = path.join(__dirname, '..', `tmp_script_${i}.js`);
  fs.writeFileSync(out, content, 'utf8');
  console.log('Wrote', out);
}
if(i===0) console.log('No inline scripts found');
