import { writeFile } from 'node:fs/promises';
await writeFile('studio-dist/_redirects', '/* /index.html 200\n');
await writeFile('studio-dist/_headers', '/index.html\n  Cache-Control: no-cache\n/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n');
