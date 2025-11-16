const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let followStatus = false;
const TARGET_ID = "4895695023";

app.get('/check', (req, res) => {
    const id = req.query.id;
    res.send((id === TARGET_ID && followStatus) ? 'true' : 'false');
});

app.get('/setFollow', (req, res) => {
    const value = req.query.value;
    if (value === 'true') {
        followStatus = true;
        res.send('AÇILDI');
    } else if (value === 'false') {
        followStatus = false;
        res.send('KAPANDI');
    } else {
        res.send('?value=true/false');
    }
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Roblox Follow API</h1>
        <p>ID: <b>${TARGET_ID}</b></p>
        <p>Durum: <b>${followStatus ? 'TAKİP EDİLİYOR' : 'TAKİP EDİLMİYOR'}</b></p>
        <hr>
        <a href="/setFollow?value=true">AÇ</a> | 
        <a href="/setFollow?value=false">KAPAT</a>
        <hr>
        <p>Check: <code>/check?id=${TARGET_ID}</code></p>
    `);
});

app.listen(PORT, () => console.log('API çalışıyor!'));
