var express = require('express');
var app = express();

var nextId = 1;

var grades = {};

app.get('/api/grades', function (req, res) {
  var gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  };
  res.json(gradesArray);
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.use(express.json())

app.post('/api/grades', function (req, res) {
  var newGrades = req.body;
  newGrades.id = nextId;
  grades[nextId] = newGrades;
  nextId++;
  res.status(201).json(newGrades);
});
