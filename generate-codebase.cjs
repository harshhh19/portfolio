const fs = require('fs');
const path = require('path');

const IGNORE_DIRS = ['.git', 'node_modules', '.output', '.tanstack', '.vscode', 'public', 'glb_files', 'dist', 'build'];
const IGNORE_FILES = ['package-lock.json', '.DS_Store', 'codebase.md'];
const IGNORE_EXTS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.glb', '.gltf', '.mp3', '.mp4', '.woff', '.woff2', '.ttf', '.eot', '.pdf'];

function generateCodebaseMd(rootDir, outputFile) {
    let mdContent = '# Codebase\n\n';

    function walkDir(currentDir) {
        const items = fs.readdirSync(currentDir);
        for (const item of items) {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                if (!IGNORE_DIRS.includes(item)) {
                    walkDir(fullPath);
                }
            } else {
                if (IGNORE_FILES.includes(item)) continue;
                const ext = path.extname(item).toLowerCase();
                if (IGNORE_EXTS.includes(ext)) continue;
                
                // Exclude large lockfiles or weird binaries if missed
                if (stat.size > 1024 * 1024) continue; // Skip files > 1MB

                try {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    const relativePath = path.relative(rootDir, fullPath).replace(/\\/g, '/');
                    mdContent += `## File: ${relativePath}\n\n`;
                    
                    const mdLang = ext.slice(1) || 'text';
                    mdContent += `\`\`\`${mdLang}\n${content}\n\`\`\`\n\n`;
                } catch (err) {
                    console.error(`Error reading ${fullPath}:`, err.message);
                }
            }
        }
    }

    walkDir(rootDir);
    fs.writeFileSync(outputFile, mdContent, 'utf8');
    console.log(`Successfully generated ${outputFile}`);
}

generateCodebaseMd(process.cwd(), 'codebase.md');
