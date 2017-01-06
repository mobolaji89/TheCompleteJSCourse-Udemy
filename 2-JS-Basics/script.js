//Lecture: variables
/*
var name = 'John';
console.log(name);

//variable names in JS can be camelCase
var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = false;
console.log(fullAge);
*/

//Primitive JS Data Types
  //Number: Floating point numbers, for decimals and integers.
  //String: Sequence of characters, used for text.
  //Boolean: Logical data type that can only be true or false.
  //Undefined: Data type of a variable, which does not have a value yet.
  //Null: Also means 'non-existent'.

//Lecture: variables 2
/*
var name = 'John';
var age = 26;

console.log(name + age);
//prints John26
//Type Coercion - when the operands of an operator are different types, one of them will be converted to an "equivalent" value of the other operand's type.

console.log(age + age);
//prints 52

var job, isMarried

console.log(job)

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty-six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?')
console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
*/

//Lecture: operators
var now = 2017;
var birthYear = 2017 - 26;
birthYear = now - 26 * 2;
//2017 - 52
//1965

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

//Parentheses have higher operator precedence than arithmetic operators
//Multiplication, division, and remainder (modulo) have higher operator precendence than addition and subtraction.
ageJohn = (3 + 5) * 4 - 6;
//multiple equal signs (assignment) have operator precedence from right-to-left
//ageJohn = ageMark = 26;

//same as ageJohn = ageJohn + 1;
ageJohn++
console.log(ageJohn);

//same as ageMark = ageMark * 2;
ageMark *= 2;
console.log(ageMark);
