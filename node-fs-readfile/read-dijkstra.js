const fs = require('fs');

fs.readFile('dijkstra.txt', 'utf8', dijkstra);

function dijkstra (err, data) {
  if (err) throw err;
  console.log(data);
};
