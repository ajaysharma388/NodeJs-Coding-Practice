// const tutorial = require('./tutorial');
// // console.log(tutorial);
// var a = 7, b = 8;
// var s = tutorial.sum(a, b);
// console.log('Sum of ' + a + ' and ' + b + ' is ' + s);
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathClass());

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
     console.log('Tutorial Event Has Occured.');
     console.log('Sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2) + '.');
});

// eventEmitter.emit('tutorial', 3, 7);

class Person extends EventEmitter {
     constructor(name) {
          super();
          this._name = name;
     }
     get name() {
          return this._name;
     }
}

let Ajay = new Person('Ajay Sharma');
let shreya = new Person('Shreya Sharma');
Ajay.on('name', () => {
     console.log('My Name is ' + Ajay.name + '.');
});
shreya.on('name', () => {
     console.log('My Name is ' + shreya.name + '.');
});
Ajay.emit('name');
shreya.emit('name');
Ajay.emit('name');