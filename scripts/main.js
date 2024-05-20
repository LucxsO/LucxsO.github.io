console.log("First 10 square numbers:");
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

console.log("\n");

console.log("Countdown from 5 to 1 then say 'Blastoff!':");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Blastoff!");

console.log("\n");

console.log("Even numbers from 1 to 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("\n");

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:");
console.log(sum);

console.log("\n");

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("First 10 factorials:");
for (let i = 1; i <= 10; i++) {
    console.log(factorial(i));
}