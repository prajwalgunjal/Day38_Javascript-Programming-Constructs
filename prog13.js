// Write a program that takes a command-line argument n and prints the nth harmonic
// number. Harmonic Number is of the form
let hv=40;
let hn=0.0;
if(hv!=0) {
    for (var i = 1; i <= hv; i++) {
        hn += 1 / i;
        console.log(hn);
    }
}