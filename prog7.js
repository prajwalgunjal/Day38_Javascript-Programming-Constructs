// Enter 3 Numbers do following arithmetic operation and find the one that
// is maximum and minimum 1. a + b * c 3. c + a / b 2. a % b + c 4. a * b + c
let a=20;
let b=10;
let c=5;
function one(){
    return a+b*c
}

function two(){
    return a % b + c
}
function three(){
    return c + a / b
}

function four(){
    return a * b + c   
}
console.log(one())
console.log(three())
console.log(two())
console.log(four())