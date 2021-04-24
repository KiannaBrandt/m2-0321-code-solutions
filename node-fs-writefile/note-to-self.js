const fs = require('fs');

let text = process.argv[2]

fs.writeFile('note.txt', `${text}`, (err) => {
  if (err) throw err;
});
