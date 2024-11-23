// Access variable & function even before initialize it.

example 1: variable hoisting
console.log(x); // output: undefined

var x = 10; // here x is hoisted

example 2: function hoisting
hoistedFunction(); // Output: "This function is hoisted"

function hoistedFunction() {
    console.log("This function is hoisted");
}


// console.log(a);
// var a;
// console.log(a)
// a = 10;
// console.log(a)


// console.log(add());
// function add(){
//     return 4+5;
// }





































var a=10;
// console.log(a);
// a=10;
// console.log(a);