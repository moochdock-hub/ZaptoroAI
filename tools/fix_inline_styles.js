const fs = require('fs');
const path = require('path');
let p = path.join(__dirname, '..', 'ZAPTOROAI.html');
let s = fs.readFileSync(p,'utf8');
// 1) Convert style="animation-delay: Xs;" or without semicolon to utility classes
const map = {'0.1s':'delay-01','0.2s':'delay-02','0.3s':'delay-03','0.4s':'delay-04','0.5s':'delay-05','0.6s':'delay-06','0.7s':'delay-07','0.9s':'delay-09','1s':'delay-1','1.5s':'delay-15','2s':'delay-2'};
// Replace style attributes containing only animation-delay
s = s.replace(/\sstyle=\"\s*animation-delay:\s*([0-9.]+s)\s*;?\s*\"/g, function(_, d){ return ' class="' + (map[d]||('delay-'+d.replace('.','_')) + '"'); });
// Replace when style attribute contains multiple properties: remove animation-delay property and add class
s = s.replace(/(<[a-zA-Z0-9\-\_\:\.]+)([^>]*?)\sstyle=\"([^\"]*?)\"([^>]*>)/g, function(full, tagStart, before, styleContent, after){
  if(!/animation-delay\s*:/i.test(styleContent)) return full;
  // extract delay
  const m = styleContent.match(/animation-delay\s*:\s*([0-9.]+s)\s*;?/i);
  if(!m) return full;
  const d = m[1];
  const cls = map[d] || ('delay-'+d.replace('.','_'));
  // remove the animation-delay property
  let newStyle = styleContent.replace(/\s*animation-delay\s*:\s*[0-9.]+s\s*;?/ig, '').trim();
  // build new attributes: merge with existing class attr if present
  let newBefore = before;
  const classMatch = before.match(/class=\"([^\"]*)\"/i);
  if(classMatch){
    const existing = classMatch[1];
    newBefore = before.replace(/class=\"([^\"]*)\"/i, 'class="' + existing + ' ' + cls + '"');
  } else {
    newBefore = before + ' class="' + cls + '"';
  }
  let styleAttr = newStyle ? (' style="' + newStyle + '"') : '';
  return tagStart + newBefore + styleAttr + after;
});

// 2) Convert SVG <stop ... style="stop-color:#...;stop-opacity:..." /> to attributes
s = s.replace(/<stop([^>]*)style=\"([^\"]*)\"([^>]*)\/?>/gi, function(full, a, style, b){
  let sc = style.match(/stop-color\s*:\s*([^;\s]+)/i);
  let so = style.match(/stop-opacity\s*:\s*([^;\s]+)/i);
  let attrs = '';
  if(sc) attrs += ' stop-color="' + sc[1].trim() + '"';
  if(so) attrs += ' stop-opacity="' + so[1].trim() + '"';
  // preserve other attrs in a and b
  return '<stop' + a + attrs + b + '/>';
});

// 3) Ensure standard background-clip is present when -webkit-background-clip exists
s = s.replace(/(-webkit-background-clip:\s*text;\s*)/gi, function(full){
  return full + 'background-clip: text; ';
});

fs.writeFileSync(p, s, 'utf8');
console.log('Fixes applied');
