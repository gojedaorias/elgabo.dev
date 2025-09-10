const fs = require('fs');
const path = require('path');

// Función para encontrar todos los archivos .tsx
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.includes('node_modules') && !file.startsWith('.')) {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Función para corregir propiedades SVG
function fixSvgProperties(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  const originalContent = content;
  
  // Corregir propiedades SVG
  content = content.replace(/stroke-width=/g, 'strokeWidth=');
  content = content.replace(/stroke-linecap=/g, 'strokeLinecap=');
  content = content.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  content = content.replace(/fill-rule=/g, 'fillRule=');
  content = content.replace(/clip-rule=/g, 'clipRule=');
  
  if (content !== originalContent) {
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed SVG properties in: ${filePath}`);
  }
}

// Ejecutar el script
const tsxFiles = findTsxFiles('./components')
  .concat(findTsxFiles('./screens'))
  .concat(findTsxFiles('./app'));

console.log(`Processing ${tsxFiles.length} .tsx files for SVG property fixes`);

tsxFiles.forEach(file => {
  try {
    fixSvgProperties(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('SVG property fixing completed!');