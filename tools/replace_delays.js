const fs = require('fs');
const path = require('path');
let htmlPath = path.join(__dirname, '..', 'ZAPTOROAI.html');
let html = fs.readFileSync(htmlPath, 'utf8');
const map = {
  '0.1s':'delay-01','0.2s':'delay-02','0.3s':'delay-03','0.4s':'delay-04','0.5s':'delay-05',
  '0.6s':'delay-06','0.7s':'delay-07','0.9s':'delay-09','1s':'delay-1','1.5s':'delay-15','2s':'delay-2'
};
html = html.replace(/\s*style\s*=\s*"animation-delay:\s*([0-9.]+s)"/g, function(_, d){
  const cls = map[d]||('delay-'+d.replace('.','_'));
  return ' class="'+cls+'"';
});
// But avoid overwriting existing class attributes; do a safer replace: find elements with class and style
html = html.replace(/class=\"([^"]*)\"\s+class=\"([^"]*)\"/g,'class="$1 $2"');

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Rewrote delays and merged classes');
