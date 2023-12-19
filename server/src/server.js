const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}/`);
});