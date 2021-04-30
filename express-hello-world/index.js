var express = require('express');
var app = express();

app.use(function (req, res) {
  console.log(req.method);
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
