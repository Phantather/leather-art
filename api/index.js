const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const htmlPath = path.resolve(__dirname, '../html/index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    // ❌ Игнорируем Range-запросы (Meta их может использовать)
    if (req.headers.range) {
        console.log('Range header detected — ignoring for Meta compatibility');
        res.removeHeader?.('Content-Range'); // precaution
        res.setHeader('Accept-Ranges', 'none');
        res.status(200);
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Accept-Ranges', 'none');
    res.setHeader('Vary', 'User-Agent'); // помогает Meta "забыть кеш"
    res.send(html);
};
