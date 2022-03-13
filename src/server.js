const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  return res.send('Ok');
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
