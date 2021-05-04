var express = require('express');
var app = express();

var grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', function (req, res) {
  var gradesArray = []
  for (const property in grades) {
    gradesArray.push(grades[property]);
  };
  res.json(gradesArray)
})

app.delete('/api/grades/:id', function (req, res) {
  var gradesId = req.params.id
  delete grades[gradesId];
  res.sendStatus(204);
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
