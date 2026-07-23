const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(dirPath);
  });
}

let modifiedFiles = 0;

walkDir('./src', (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.css')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Regex to match oklch(0.xxx ...)
  // We want to capture the decimal part
  // e.g. oklch(0.62 0.24 27) -> match group 1 is '0.62'
  content = content.replace(/oklch\(\s*0\.(\d+)/g, (match, p1) => {
    // p1 is the digits after the decimal point
    let val = parseFloat('0.' + p1) * 100;
    // Format to avoid 62.00000000000001
    val = Math.round(val * 10) / 10;
    return `oklch(${val}%`;
  });
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedFiles++;
    console.log(`Updated ${filePath}`);
  }
});

console.log(`Done! Modified ${modifiedFiles} files.`);
