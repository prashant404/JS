console.log("Hello World"); //to print

//variables
//let const var

// var number = 56.78;
// var number2 = "1";

//var is global scoped

var greet = 12;

function Program1()  //function syntax --> function functionName(){ }
{
    console.log(greet);

    var name = "PEACH"
    console.log(name);
}
Program1(); //function call

var greet = 23;
console.log(greet);


let boom = 1;
console.log("Initially value was : " + boom)
boom = 2;
console.log("After update value is: " +boom)

//const is also block-scoped and it cannot be reinitalized and cannot be updated.
const pie = 3.14;

//var declarations are globally scoped or function scoped while let and const are block scoped.
//var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.