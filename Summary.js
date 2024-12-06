/*const accountId = 12345;
let accountEmail = "rajpratyush111@gmail.com";
var accountPassword ="hazaribag";
let accountStatus;

//var accountPassword ="gurgaon"; <-- var can be reassign new value -->
//let accountEmail = "pratyush111@gmail.com";
//const accountId = 123456;

console.log(accountId,accountEmail,accountPassword,accountStatus);

// PART 5 <-- DataType and ECMAscript standards -->
 
 
let name ="pratyush"
let age = 24
let isLoggedInn = false
let state;

// Number =>
// string => ""
// boolean => true/false
// null => standaLone value
//undefined => value not assign only variable can declared
// symbol => unique
console.log(typeof age);
console.log(typeof null);


// PART 6 <-- Datatype Conversion -->
 
let score = 33
let score2 ="33abc"    //"33"

console.log(typeof(score));
console.log(typeof(score2))

// convert string into number =>
    let newValue=Number(score2);
    console.log(typeof(newValue));
    console.log(newValue)
    
   // "33" => 33
   // "33abc" => NaN
   // true => 1 ; false => 0

    let isLoggedIn = 1 

    let booleanIsLoggedIn = Boolean(isLoggedIn)
    console.log(booleanIsLoggedIn)
    console.log(typeof booleanIsLoggedIn)

    // 1 => true; 0 => false 
    // "" => false
    // "hitesh" => true

    let someNumber =33

    let stringNumber = String(someNumber);
    console.log(stringNumber);
    console.log(typeof (stringNumber));
    


// PART 7 

// *******************Operation*****************

let value =3;
let negValue = -value;
console.log(negValue); // -3

console.log(true); // true
console.log(+true); // 1
console.log(+"");  // 0


// PART 8 <-- Comparison of DataType -->

//   console.log(2 > 1);
//   console.log(2 >= 1);
//   console.log(2 < 1);
//   console.log(2 == 1);
//   console.log(2 != 1);

   console.log(null > 0); // false
   console.log(null == 0); // false
   console.log(null >= 0); // true

   console.log(undefined == 0); // false
   console.log(undefined > 0); // false
   console.log(undefined < 0); // false
   
   // (===) strict check <-- means also check data type -->

   console.log("2" == 2); // true
   console.log("2" === 2); // false => because of strict check operator
   

  // PART 9 <-- Data types of Javascript summary -->

    // (a) primitive

    // 7 types : String, Number, Boolean, Undefined, Symbol, BigInt

    // (b) Non primitive (Reference)

    // Array, Object, Functions

   
    // PART 10  <-- String in JS -->

    const name = "Pratyush";
    const age = 25;

    // console.log( name + age ); => this formate is old type
    console.log(`My name is ${name} and my age is ${age}`);

   const gameName = new String(`pratyush`)

    console.log(name[0]);// access zero index 
    console.log(name.__proto__);

    console.log(name.length);
    console.log(name.toUpperCase());
    console.log(name.charAt(2));
    console.log(name.indexOf('y'));

    let newString = name.substring(0,4);
    console.log(newString);
*/
   // rough practice

   let name = "123Happy";
   let newName = Number(name);
   console.log(newName);
   console.log(typeof newName);

   ////////

//    Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

// Define a function named reverse_a_number that takes a parameter n
function reverse_a_number(n)
{
    // Convert the input number to a string
    n = n + "";

    // Split the string into an array of characters, reverse the array, and then join the characters back into a string
    return n.split("").reverse().join("");
}

// Convert the reversed string back to a number and log it to the console
console.log(Number(reverse_a_number(32243)));









