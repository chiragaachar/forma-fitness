import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname,resolve} from 'node:path';
const root=resolve('dist'),types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml'};
http.createServer(async(req,res)=>{try{const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=resolve(root,'.'+(path==='/'?'/index.html':path));if(!file.startsWith(root+'/'))throw Error();res.setHeader('Content-Type',types[extname(file)]||'text/plain');res.end(await readFile(file));}catch{res.writeHead(404);res.end('Not found');}}).listen(3000,()=>console.log('Open http://localhost:3000'));
