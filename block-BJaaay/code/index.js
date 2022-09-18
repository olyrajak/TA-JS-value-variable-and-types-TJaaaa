//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Using `console.log` log all the evan values from 1 to 10.
for (let j = 1; j <= 10; j++) {
    if (j % 2 == 0) {
        console.log(j);
    }

}
// Using `console.log` log all the odd values from 1 to 10.
for (let k = 1; k <= 10; k++) {
    if (k % 2 != 0) {
        console.log(k);
    }

}
// Calculate the sum of all numbers from 1 to 10.
let sum = 0;
for (let a = 0; a <= 10; a++) {
    sum += a;

}
console.log(sum);
// Log all the values from 1 to 10 using while loop
while (i >= 10) {
    console.log(i);
    i++;
}