// closures
// A closure can be defined as a JavaScript feature in which the inner function has access to the outer function variable.
// In JavaScript, every time a closure is created with the creation of a function.
// . Access to its own scope.
// . Access to the variables of the outer function.
// . Access to the global variables.

function someFunction() {
  let a = 10;
  function anotherFunction() {
    return a;
  }
  return anotherFunction;
}

var data = someFunction();
var number = data();
console.log(number);

//example 2
console.log(
  "_________________________________________________|-_- | ______________________________________________________"
);

function fun(a) {
  function innerFunction(b) {
    return a * b;
  }
  return innerFunction;
}

var fData = fun(10);
var innData = fData(12);
console.log(innData);

//example 3
function A() {
  function closure(val) {
    return function () {
      return val;
    };
  }

  var a = [];
  var i;
  for (i = 0; i < 5; i++) {
    a[i] = closure(i); //inside array we are putting that function(i) **
  }
  return a; //we will return array in side which there are return functions present
}

var output = A();
console.log(output[0]());
