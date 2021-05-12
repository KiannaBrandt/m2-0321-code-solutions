var express = require('express');
var app = express();

const data = require('./data.json');
const fs = require('fs');

app.get('/api/notes', function (req, res) {
  var notesArray = [];
  for (const property in data.notes) {
    notesArray.push(data.notes[property]);
  };
  res.status(200);
  res.json(notesArray);
});

app.use(express.json());

app.get('/api/notes/:id', function (req, res) {
  var notesId = req.params.id;
  if ((Math.sign(notesId) === 1) && (Number.isInteger(parseInt(notesId)) === true)) {
    if (data.notes[notesId] !== undefined) {
      res.status(200);
      res.json(data.notes[notesId]);
    } else {
      res.status(404);
      res.json({ "error": `cannot find note with id ${notesId}` })
    };
  } else {
    res.status(400);
    res.json({ "error": "id must be a positive integer"})
  };
});

app.post('/api/notes', function (req,res) {
  var noteContent = req.body;
  if (noteContent.content !== undefined) {
    if (data.nextId !== undefined) {
      data.notes[data.nextId] = noteContent;
      data.notes[data.nextId].id = data.nextId;
      data.nextId++;
      fs.readFile('data.json', data, operation);
      function operation() {
        fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
          if (err) {
            res.status(500);
            res.json({ "error": "An unexpected error occurred." });
          } else {
            res.status(201);
            res.json(data.notes[data.nextId]);
          };
        });
      };
    };
  } else {
    res.status(400);
    res.json({ "error": "content is a required field"});
  };
});

app.delete('/api/notes/:id', function (req, res) {
  var notesId = req.params.id;
  if ((Math.sign(notesId) === 1) && (Number.isInteger(parseInt(notesId)) === true)) {
    if (data.notes[notesId] !== undefined) {
      delete data.notes[notesId];
      fs.readFile('data.json', data, operation);
      function operation() {
        fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
          if (err) {
            res.status(500);
            res.json({ "error": "An unexpected error occurred." });
          } else {
            res.sendStatus(204);
          };
        });
      };
    } else {
      res.status(404);
      res.json({ "error": `cannot find note with id ${notesId}` });
    };
  } else {
    res.status(400);
    res.json({ "error": "id must be a positive integer" });
  };
});

app.put('/api/notes/:id', function (req, res) {
  var notesId = req.params.id;
  var noteContent = req.body;
  if ((Math.sign(notesId) === 1) && (Number.isInteger(parseInt(notesId)) === true)) {
    if (noteContent.content !== undefined) {
      if (data.notes[notesId] !== undefined) {
        data.notes[notesId].content = noteContent.content;
          fs.readFile('data.json', data, operation);
          function operation() {
            fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
              if (err) {
                res.status(500);
                res.json({ "error": "An unexpected error occurred." });
              } else {
                res.status(200);
                res.json(data.notes[notesId]);
              };
            });
          };
      } else {
        res.status(404);
        res.json({ "error": `cannot find note with id ${notesId}` });
      };
    } else {
      res.status(400);
      res.json({ "error": "content is a required field" });
    };
  } else {
    res.status(400);
    res.json({ "error": "id must be a positive integer" });
  };
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
