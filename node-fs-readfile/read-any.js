const fs = require('fs');

let file = process.argv[2]

fs.readFile(`${file}`, 'utf8', readAny);

function readAny(err, data) {
  if (err) throw err;
  console.log(data);
};
