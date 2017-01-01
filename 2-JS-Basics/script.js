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
