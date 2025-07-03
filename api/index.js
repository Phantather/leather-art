import { readFileSync } from 'fs';
import { resolve } from 'path';

export default function handler(req, res) {
    const htmlPath = resolve(process.cwd(), 'index.html');
    const htmlContent = readFileSync(htmlPath, 'utf8');

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Accept-Ranges', 'none');
    res.status(200).send(htmlContent);
}
