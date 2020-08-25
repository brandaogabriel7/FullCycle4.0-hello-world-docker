const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const MESSAGE = 'Eu sou Full Cycle';

const app = express();

app.get('/', (req, res) => {
    res.send(MESSAGE);
});

app.listen(PORT, HOST, () => {
    console.log(`Hello World with Docker listening at http://${HOST}:${PORT}`);
});
