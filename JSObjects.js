
//JavaScript objects are collections of key-value pairs where each key is a string (or symbol) and each value can be any data type, including another object.
//The Object type is one of JavaScript's data types.// {key: value}

// const student = {
//     name: "Happy",
//     343: "djakh",
//     city: "Hazaribag",
//     country: "India",
//     age: 25,
//     gender: "Male",
//     phoneNo: 1234567890,
//     email: "abc@gmail.com",
//     study: "Bachelor",
//     system: "HP",
//     os: "Windows"
// }

// // console.log(student["name"]);

// // for(let key in student){
// //     console.log(key ,": ", student[key]);
// // }

// for(let val of student){
//     console.log(val);
// }

// // for loop
// // for(start; condition; increment/decrement)

// // while loop
// // start
// // while(condition)
// //increment/decrement

// // do while loop
// // start
// // do{
// // loo body 
// // increment/decrement
// //} while(condition)

// // for in
// // for of




let arr = [1, 2, 3];

// for(let key in arr){
//   console.log(key , " = ", arr[key]);
// }

// for(let val of arr){
//     console.log(val)
// }

// .forEach((i) -> {
// console.log(i)
//})

// for(let i = 0; i < arr.length; i++){
//     if(i == 3){
//         break;
//     }
//     console.log(arr[i])
// }

// const arrVal = arr.forEach((el) => {
//     console.log(el)
// })

// console.log('returned value: ',arrVal);

const returnedValue2 = arr.map((el) => {
    return el * 5;
})

console.log(returnedValue2);
console.log(arr)

rough 





