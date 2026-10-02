const express = require('express'); // CommonJS module
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  console.log(req.headers);
  console.log(req.path);
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
