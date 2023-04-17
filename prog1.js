// Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let x = Math.floor(Math.random()*999);
let y = Math.floor(Math.random()*999);
let z = Math.floor(Math.random()*999);
console.log("You entered: " + x + ", " + y + ", " + z);
if(x>y && x>z){
    console.log("largest number is x :- " +x);
}
else if (y>z){
    console.log("Lagrgest number is y :- " +y)
}
else{
    console.log("Largest number is z :- " +z)
}