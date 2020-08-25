const express = require('express');
const app = express();
const port = 8080;

const message = 'Eu sou Full Cycle';

app.get('/', (req, res) => {
    res.send(message);
});

app.listen(port, () => {
    console.log(
        `Hello World with Docker listening at http://localhost:${port}`
    );
});
