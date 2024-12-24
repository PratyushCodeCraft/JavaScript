
// setTimeout(hello,10000); // here hello is callback function bcoz hello pass as an argument 

// function hello(){
//     console.log("hello happy")
// }

// doubt


/////////////////////////////////////////////////////
// function fun1(){
//     return 2;
// }
// function fun2(){
//     return 4;
// }
// let a = (fun1(),fun2());
// console.log(a)
/////////////////////////////////////////////////////
// includes()
//////////////////////////////////////////////////////
// const arr =["one","two","three"];
// const str ='hello';

// const res=arr.includes('on');// false
// const anotherVar =arr.includes('onetwo');//false
// const newVariable=str.includes('h');//true

// console.log(newVariable);
//////////////////////////////////////////////////////
// console.log(true =='');//false 
// console.log('1'==1);//true
// console.log('1'===1);//false
///////////////////////////////////////////////////////
// let a=10;
// let b = new Number(10);
// let c =10;

// console.log(a === b); //false
//////////////////////////////////////////////////////
// What i shallow copy and deep copy ?
//////////////////////////////////////////////////////
///////////////////////////////////////////////////////



function callback(){
    console.log('happy is calling callback function')
}

const add = function(a, b, callback){
    var result = a+b;
    console.log(result);
    callback();
}
//add(3,4,callback);
add( 5 , 5 , () => console.log('add completed')); 


