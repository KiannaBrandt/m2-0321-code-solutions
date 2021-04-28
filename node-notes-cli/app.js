const data = require('./data.json');
const fs = require('fs');

let operations = process.argv[2];
let id = process.argv[3];
let note = process.argv[4];

fs.readFile('data.json', 'utf8', operation);

function operation() {
  if (operations === 'read') {
    for (const property in data.notes) {
      console.log(`${property}: ${data.notes[property]}`);
    };
  };
  if (operations === 'create') {
    data.notes[data.nextId] = id;
    data.nextId++
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
    });
  };
  if (operations === 'update') {
    data.notes[id] = note;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
    });
  };
  if (operations === 'delete') {
    delete data.notes[id]
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
    });
  };
};
