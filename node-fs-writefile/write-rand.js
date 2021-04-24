const fs = require('fs');

let number = Math.random()

fs.writeFile('random.txt', `${number}`, (err) => {
  if (err) throw err;
});
