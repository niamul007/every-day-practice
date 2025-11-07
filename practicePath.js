import path from 'node:path';

// Assume this is inside your server.mjs file
const currentDirectory = import.meta.dirname; 

function getAllFilePaths(baseDir) {
    
    // 1. Path to an HTML file
    const htmlPath = path.join(baseDir, 'public', 'index.html');
    
    
    // 2. Path to a JavaScript file inside a 'scripts' folder
    const jsPath = path.join(baseDir, 'public', 'scripts', 'app.js'); 
    
    // 3. Path to a configuration file in the root
    const configPath = path.join(baseDir, 'config.json');

    return { html: htmlPath, script: jsPath, config: configPath };
}

// Example usage:
const paths = getAllFilePaths(currentDirectory);
console.log('JS File Path:', paths.script);
console.log('Config File Path:', paths.config);
console.log('html File Path:', paths.html);
// Output will be similar to: /e:/temporary/every-day-practice/public/scripts/app.js