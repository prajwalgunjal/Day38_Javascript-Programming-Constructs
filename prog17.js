let number = 10;
let upperLimit = Math.pow(2, number);
let value = 1;
let power = 1;
while((power <= upperLimit) && (value <= upperLimit) && (value < 256)) {
    value *= 2;
    console.log("2 ^ " + power + " = " + value);
    power++;
}
