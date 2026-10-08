import {mkdir,copyFile,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist');
for(const file of ['index.html','styles.css','app.js','engine.js','favicon.svg']) await copyFile(file,`dist/${file}`);
console.log('Forma built → dist. No dependencies or API keys required.');
