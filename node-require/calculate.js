const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
let x = process.argv[2];
let operation = process.argv[3];
let y = process.argv[4];
if (operation === 'plus') {
  console.log(`result: ${add(x, y)}`);
};
if (operation === 'minus') {
  console.log(`result: ${subtract(x, y)}`);
};
if (operation === 'times') {
  console.log(`result: ${multiply(x, y)}`);
};
if (operation === 'over') {
  console.log(`result: ${divide(x, y)}`);
};
