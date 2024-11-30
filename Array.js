
//Arrays are a fundamental data structure in JavaScript, used to store multiple values in a single variable



//Array Method


// let arr = [1, 2, 3, 4]
// console.log(arr[1]);
// console.log(arr.length)

// console.log(arr)
// arr.push(10);
// console.log(arr)
// arr.push(20)
// console.log(arr)
// arr.push("happy")
// console.log(arr)


//Array using for loop -->

let newArr = [3, 6, 8, 9, "hello", "good"];
for (let i = 0; i < newArr.length; i++) {
    console.log(i, ':', newArr[i])
}

//

let arr2 = [4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr2.length; i++) {
    console.log(i, ":", arr2[i])
}

//

let sum = [3, 7, 8, 4, "this", "is", "array", 40, 4.8];
for (i = 0; i < sum.length; i++) {
    console.log(i, ":", sum[i])
}


// Array using While loop -->

let arr3 = [30, 50, 70, 70, 20];
let i = 0;
while (i < arr3.length) {
    console.log(arr3[i]);
    i++;
}


// Array using while and for loop -->

let arr = [80, 90, 40, 50];
let b = 1; //using while loop
while (b < arr.length) {
    console.log(arr[b]);
    b++;
}
for (b = 0; b < arr.length; b++) {  // using for loop
    console.log(b, ":", arr[b])
}   



