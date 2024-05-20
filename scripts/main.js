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

console.log("\n");

let arr = [3, 1, 4, 1, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("\n");

for (let i = 0; i < arr.length; i++) {
    console.log(arr.at(-(i + 1)));
}

console.log("\n");

let cubes = [];
for (let i = 1; i <= 10; i++) {
    cubes.push(i ** 3);
}
console.log(cubes);

console.log("\n");

let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
console.log(fibonacci);

console.log("\n");

let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}
console.log(reversedArr);
