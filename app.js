const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Mini Project 4 is running on Docker!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
