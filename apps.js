//Anon Function
// const doctorize = function (firstName) {
//   return `Dr. {firstName}`;
// };

//Function expression :: Variable Stored function.
// const doctorize = function (firstName) {
//   doesntExist();
//   return `Dr. ${firstName}`;
// };

//Hoisting
// console.log(doctorize3("Samuelsons"));

// const doctorize = function (firstName) {
//   doesntExist();
//   return `Dr. ${firstName}`;
// };
// const doctorize = function (firstName) {
//   doesntExist();
//   return `Dr. ${firstName}`;
// };

// function doctorize3(firstName) {
//   return `Dr. ${firstName}`;
// }

//Function declaration
// function inchtoCM(inches) {
//   return (cm = inches * 2.54);
// }

//anonymous function :: function without a function name.
// const inchtoCM = function (inches) {
//   return (cm = inches * 2.54);
// };

// Arrow function
// Remove function & return keywords and also remove curly braces.

// const inchtoCM = (inches) => (cm = inches * 2.54);

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }
// const add = (a, b = 3) => a + b;

// returning an object

function makeAbaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
}

// IIFE
// Immediately Invoked Function Express

(function () {
  console.log("Running the anon function.");
  return `Your are cool and your age is ${age}`;
})(25);
