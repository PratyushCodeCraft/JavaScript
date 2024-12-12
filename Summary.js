const accountId = 12345;
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
    console.log(newString); // prat

    let newStringOne = "    pratyush     ";
    console.log(newStringOne);//     pratyush     
    console.log(newStringOne.trim()); // .trim use to remove the blank space => // pratyush

    const url ="https://pratyush.com/pratyush%20kumar"
    console.log(url.replace('%20', '_'));// 1st we add which part was remove & 2nd we add that element what we can see
                                         // output => https://pratyush.com/pratyush_kumar

     console.log(url.includes('pratyush')); // .includes find that part which was present or not in this URL                                   
                                            // output => true
     console.log(url.includes('happy')); // 'happy' word was not present in that URL
                                         // output => false


    // PART 12 <-- Number and Maths in Javascript --->  
    
    
  const score = 400;
  console.log(score);// 400

  const balance = new Number(100);
  console.log(balance);// Number : 100

  console.log(balance.toString()); // 100 converted to string
  console.log(balance.toFixed(2)); // 100.00

  const hundreds = 1000000;
  console.log(hundreds.toLocaleString()); // 10,00,000
  console.log(hundreds.toLocaleString('en-IN')) // 10,00,000

//  ++++++++++++ Maths +++++++++++++

console.log(Math.abs(-4)); // absolute value => negative(-) value turns into positive
console.log(Math.round(4.4)); // 4 => roundUp value
console.log(Math.round(4.6)); // 5 => roundUp value
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4,3,6,8)); // 3
console.log(Math.max(4,3,6,8)); // 8

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);



// PART 13 <-- Date and time in depth in javascript -->

//Dates

let myDate = new Date();
console.log(myDate.toString()); // Mon Dec 09 2024 18:11:44 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Mon Dec 09 2024
console.log(myDate.toISOString()); // 2024-12-09T12:40:57.207Z
console.log(myDate.toJSON()); // 2024-12-09T12:42:35.798Z
console.log(myDate.toLocaleString()); // 9/12/2024, 6:13:28 pm

 console.log(typeof myDate); // object 

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString()); // 23/1/2023, 5:03:00 am

let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString()); // 14/1/2023, 12:00:00 am

let myTimeStamp = Date.now(); 
console.log(myTimeStamp); // 1733749181494 => milli sec time
