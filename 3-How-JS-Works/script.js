////////////////////////////////////////////////////////////////////////////////
// Lecture: Hoisting

//Hoisting allows us to use function declarations before we actually declare them in our code
/*
//functions
calculateAge(1960);

function calculateAge(year) {
  console.log(2016 - year);
}

// retirement(1965);

var retirement = function(year) {
  console.log(65 - (2016 - year));
}

//variables

//prints undefined
console.log(age);

var age = 23;

function foo() {
  //prints undefined
  console.log(age);
  var age = 65;
  //prints 65
  console.log(age);
}
foo();
//prints 23
console.log(age);
*/
///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}
//can't access var b or c because of scope
function third() {
    var d = 'John';
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword
