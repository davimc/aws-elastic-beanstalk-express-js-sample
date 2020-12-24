const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Meu primeiro código com integração contínua'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
