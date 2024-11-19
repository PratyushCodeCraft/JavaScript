
// // block scope
// {
//     let a = 7;
//     console.log('inside block ', a);
// }

// functional scope or Global scope
let a = 70;
function printNo(){
    console.log(a);
    {
        console.log(a)
        let b = 10;
        console.log(b)
    }
}

printNo()
console.log("outside function", a)

