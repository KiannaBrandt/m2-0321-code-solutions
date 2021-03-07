function ExampleConstructor () {

};

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype)
console.log('typeof ExampleConstructor.prototype', typeof ExampleConstructor.prototype)

var newVariable = new ExampleConstructor();
console.log('newVariable:', newVariable);

var instanceVariable = newVariable instanceof ExampleConstructor;
console.log('instanceVariable:', instanceVariable);
