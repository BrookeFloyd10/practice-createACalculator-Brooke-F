// ● Absolute Value:
// function getAbsoluteValue(num) {
// return Math.abs(num);
// }
//console.log(getAbsoluteValue(45));

// ● Power:
// function raiseToPowerOf(x, y) {
//     return Math.pow(x ,y);
// }
// console.log(raiseToPowerOf(2, 3));

// ● Square Root Finder:
// function squareRootOf(a) {
//     return Math.sqrt(a);
// }
// console.log(squareRootOf(4));

// ● Maximum and Minimum Finder:
// let numberArr = [2, 45, 104];
// function findMaxAndMin(nums) {
//     return { 
//         max : Math.max(...nums),
//         min : Math.min(...nums)
//     }
// }
// console.log(findMaxAndMin(numberArr));

// ● Random Number Generator: 
// function generateRandomNumber(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
// console.log(generateRandomNumber(2, 5));

// ● Custom Rounding:
// function roundingToDecimal(num) {
//     return Math.round(num * 100) / 100 // rounds to 2 decimal places
// }
// console.log(`Rounded two decimal places: ` + roundingToDecimal(4.675844656));


const readline = require("readline-sync");

class Calculator {

getAbsoluteValue(num) {
    return Math.abs(num);
}

raiseToPowerOf(x, y) {
    return Math.pow(x ,y);
}

squareRootOf(a) {
    return Math.sqrt(a);
}

findMaxAndMin(nums) {
    return { 
        max : Math.max(...nums),
        min : Math.min(...nums)
    };
}
// original incorrect function: 
// generateRandomNumber(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }

// New function edited post solution code evaluation // commented for refrence purposes:
generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Original incorrect function:
// roundingToDecimal(num) {
//     return Math.round(num * 100) / 100 // rounds to 2 decimal places
// }

// New functon edited post solution code evaluation // commented for refrence purposes:
roundingToDecimal(num, decimals) {
    return Number(num.toFixed(decimals));
 }
}
// helper functions

function getNumber(prompt) {
    return readline.questionFloat(prompt);
}

function getTwoNumbers() {

    let firstNum = getNumber(
        "Enter first number: "
    );

    let secondNum = getNumber(
        "Enter second number: "
    );

    return [firstNum, secondNum];
}

function getNumberArray() {

    let input = readline.question(
        "Enter numbers separated by commas: "
    );

    let stringArray = input.split(",");
    let numberArray = [];

    for (let item of stringArray) {
        numberArray.push(Number(item));
    }

    return numberArray;
}

const calc = new Calculator();

console.log(`
MENU:

1. Absolute Value
2. Power
3. Square Root
4. Maximum and Minimum
5. Random Number
6. Round Decimal
`);

let choice = readline.question(
    "Choose an option: "
);


//   IF / ELSE LOGIC

if (choice === "1") {

    let num = getNumber(
        "Enter a number: "
    );

    console.log(
        "Result:",
        calc.getAbsoluteValue(num)
    );

} else if (choice === "2") {

    let numbers = getTwoNumbers();

    console.log(
        "Result:",
        calc.raiseToPowerOf(
            numbers[0],
            numbers[1]
        )
    );

} else if (choice === "3") {

    let num = getNumber(
        "Enter a number: "
    );

    console.log(
        "Result:",
        calc.squareRootOf(num)
    );

} else if (choice === "4") {

    let numbers = getNumberArray();

    console.log(
        "Result:",
        calc.findMaxAndMin(numbers)
    );

} else if (choice === "5") {

    let min = getNumber(
        "Enter minimum number: "
    );

    let max = getNumber(
        "Enter maximum number: "
    );

    console.log(
        "Result:",
        calc.generateRandomNumber(min, max)
    );

} else if (choice === "6") {

    let num = getNumber("Enter a number: ");
    let decimals = getNumber("Enter number of decimal places: ");

    console.log(
        "Result:",
        calc.roundingToDecimal(num, decimals)
    );

} else {

    console.log("Invalid option.");
}

// Test Cases//
// ● Find the absolute value of -45.67.
console.log("The absolute value of -45.67 is: " + calc.getAbsoluteValue(-45.67));

// ● Raise 5 to the power of 3.
console.log("Five to the power of Three equals: " + calc.raiseToPowerOf(5, 3));

// ● Calculate the square root of 144.
console.log("The square root of 144 is: " + calc.squareRootOf(144));

// ● Determine the largest and smallest values from [3, 78, -12,
// 0.5, 27].
const numsArray = [3, 78, -12, 0.5, 27];
console.log("The max and min of [3, 78, -12, 0.5, 27] is:" );
console.log(calc.findMaxAndMin(numsArray));

// ● Generate a random number between 1 and 50.
console.log("A random number between 1 and 50 is: " + calc.generateRandomNumber(1, 50));

// ● Round 23.67891 to 2 decimal places.
console.log("23.67891 rounded to 2 decimal places is: " + calc.roundingToDecimal(23.67891, 2));