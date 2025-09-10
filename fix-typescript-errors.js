const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

// Función para corregir errores comunes de TypeScript
function fixTypeScriptErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Corregir elementos JSX auto-cerrados
  const originalContent = content;
  content = content.replace(/<(\w+)([^>]*)><\/(\1)>/g, '<$1$2 />');
  
  if (content !== originalContent) {
    modified = true;
  }
  
  // Corregir comillas dobles por simples en imports
  const originalImports = content;
  content = content.replace(/import\s+([^'"]+)\s+from\s+"([^"]+)"/g, "import $1 from '$2'");
  
  if (content !== originalImports && !modified) {
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Ejecutar el script
const tsxFiles = findTsxFiles('./components')
  .concat(findTsxFiles('./screens'))
  .concat(findTsxFiles('./app'));

console.log(`Found ${tsxFiles.length} .tsx files`);

tsxFiles.forEach(file => {
  try {
    fixTypeScriptErrors(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('TypeScript error fixing completed!');