// Lecture: let and const

// ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); //Uncaught TypeError: Assignment to constant variable.
*/

//Constants are immutable in ES6

//Variables declared with var in ES5 are function scoped.
//But Variables declare with let and const in ES6 are block scoped.
  //A block scope is any code wrapped in between curly braces({ }).

// ES5
/*
function driversLicense5(passedTest) {
  if (passedTest) {
    //console.log(firstName) //undefined
    var firstName = 'John';
    var yearOfBirth = 1990;
    //console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense5(true);
*/
//ES6
/*
function driversLicense6(passedTest) {

  //console.log(firstName); //Uncaught ReferenceError: firstName is not defined(...)
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
    const yearOfBirth = 1990;
  //console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense6(true);
*/
// var versus let
//the value of 23 will be overwritten
/*
var i = 23;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
//Will print
//0
//1
//2
//3
//4
//5
*/

//both 'i' are seperate variables, because let is block scoped
/*
let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
//Will print:
//0
//1
//2
//3
//4
//23
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Blocks and IIFEs
/*
// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}
*/
//console.log(a + b); //Uncaught ReferenceError: a is not defined
//console.log(c); //prints 3 - var declerations are not block scoped, they are function scoped.

// ES5
/*
(function() {
  var c = 3;
})();
*/
//console.log(c); //Uncaught ReferenceError: c is not defined

////////////////////////////////////////////////////////////////////////////////
// Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calculateAge(year) {
  return 2017 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calculateAge(yearOfBirth) + ' years old.');

// ES6
//Template literal
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calculateAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //true
console.log(n.endsWith('th')); //true
console.log(n.includes(' ')); //true
console.log(firstName.repeat(5)); //JohnJohnJohnJohnJohn
console.log(`${firstName} `.repeat(5)); //John John John John John
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Arrow Functions

const years = [1990, 1965, 1982, 1927];

// ES5
var ages5 = years.map(function(el) {
  return 2017 - el;
})
console.log(ages5); // [26, 51, 34, 89]

// ES6
let ages6 = years.map(el => 2017 - el);
console.log(ages6); // [26, 51, 34, 89]

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}.`)
console.log(ages6); // ["Age element 1: 26.", "Age element 2: 51.", "Age element 3: 34.", "Age element 4: 89."]

ages6 = years.map((el,  index) =>{
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
})
console.log(ages6);
