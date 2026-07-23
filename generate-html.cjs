const fs = require('fs');
const path = require('path');


const INCLUDE_DIRS = ['src'];
const INCLUDE_FILES = ['package.json', 'vite.config.ts', 'tsconfig.json'];
const IGNORE_EXTS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.glb', '.gltf', '.mp3', '.mp4', '.woff', '.woff2', '.ttf', '.eot', '.pdf'];

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

function generateFrontendHtml(rootDir, outputFile) {
    let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Frontend Codebase</title>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        h2 { margin-top: 40px; background: #f0f0f0; padding: 10px; }
        pre { background: #2d2d2d; color: #ccc; padding: 15px; overflow-x: auto; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>Frontend Codebase</h1>
`;

    function walkDir(currentDir) {
        const items = fs.readdirSync(currentDir);
        for (const item of items) {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                walkDir(fullPath);
            } else {
                const ext = path.extname(item).toLowerCase();
                if (IGNORE_EXTS.includes(ext)) continue;
                if (stat.size > 1024 * 1024) continue; // Skip files > 1MB

                try {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    const relativePath = path.relative(rootDir, fullPath).replace(/\\/g, '/');
                    htmlContent += `    <h2>File: ${relativePath}</h2>\n`;
                    htmlContent += `    <pre><code>${escapeHtml(content)}</code></pre>\n`;
                } catch (err) {
                    console.error(`Error reading ${fullPath}:`, err.message);
                }
            }
        }
    }

    // Process specific directories
    INCLUDE_DIRS.forEach(dir => {
        const fullDir = path.join(rootDir, dir);
        if (fs.existsSync(fullDir)) walkDir(fullDir);
    });

    // Process specific root files
    INCLUDE_FILES.forEach(file => {
        const fullPath = path.join(rootDir, file);
        if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath, 'utf8');
            htmlContent += `    <h2>File: ${file}</h2>\n`;
            htmlContent += `    <pre><code>${escapeHtml(content)}</code></pre>\n`;
        }
    });

    htmlContent += `</body>\n</html>`;

    fs.writeFileSync(outputFile, htmlContent, 'utf8');
    console.log(`Successfully generated ${outputFile}`);
}

generateFrontendHtml(process.cwd(), 'codebase.html');
