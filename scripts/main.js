console.log("Task1 First 10 square numbers:");
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

console.log("\n");

console.log("Task2 Countdown from 5 to 1 then say 'Blastoff!':");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Blastoff!");

console.log("\n");

console.log("Task3 Even numbers from 1 to 50:");
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
console.log("Task4 Sum of numbers from 1 to 100:");
console.log(sum);

console.log("\n");

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Task5 First 10 factorials:");
for (let i = 1; i <= 10; i++) {
    console.log(factorial(i));
}   

console.log("Task6");
let arr = [3, 1, 4, 1, 5];
for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

console.log("Task7");
for (let i = 0; i < arr.length; i++) {
    console.log(arr.at(-(i+1)));
}

console.log("Task8");
let arr2 = [];
for (let i = 1; i <= 10; i++) {
    arr2.push(i * i * i);
}

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

console.log("Task9");

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

let arr3 = [];
for (let i = 1; i <= 10; i++) {
    arr3.push(fibonacci(i));
}

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

console.log("Task10");
let arr4 = [];
for (let i = 0; i < arr.length; i++) {
    arr4.push(arr.at(-(i+1)));
}

for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}