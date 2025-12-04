var counter = function (arr) {
  return `This array contains ${arr.length} elements.`;
}


var adder = function (a, b) {
  return `The sum of the two numbers is ${a + b}`;
}

var pi = 3.142;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};