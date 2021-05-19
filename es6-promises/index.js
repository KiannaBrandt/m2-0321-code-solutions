const takeAChance = require('./take-a-chance');
var promiseObject = takeAChance('Kianna');
promiseObject.then((value) => {
  console.log(value);
});
promiseObject.catch((error) => {
  console.log(error);
});
