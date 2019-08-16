const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathClass {
     constructor() {
          console.log('Object is Created!');
     }
}
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathClass = SomeMathClass;
module.exports = {
     sum: sum,
     SomeMathClass: SomeMathClass,
     PI: PI
}
