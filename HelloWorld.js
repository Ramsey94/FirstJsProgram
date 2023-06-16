// Basics first, let´s say hi
// console.log("Hello, bitches!");

// Now, lets work with VARIABLES
//let message = "Hello, JavaScript!";
//console.log(message);
// DEFINITION:  "let" keyword used for declaring variables and name them
// * Block scope: When you use "let", the variable you create is only 
//   accessible within the block of code where it's defined. A block 
//   is a section of code surrounded by curly braces {}. Variables 
//   created with let are limited to that block and can't be accessed 
//   from outside the block.
// * Using let in loops: let is often used in loops, like for or while 
//   loops. It allows you to create a new variable for each iteration of 
//   the loop, preventing issues that can happen with shared variables.



// Data Types and operations:
// JavaScript supports various data types, including numbers, strings, 
// booleans, arrays, and objects.

// let num1 = 5;
// let num2 = 10;
// let sum = num1 + num2;
// console.log("The sum of ", num1, " and ", num2, " is:", sum);

// let name = "Ramsey";
// let age = "29";
// console.log("My name is", name, "and I am", age, "years old.");

// Conditional statements:
let number = 7;
if (number % 2 ==0){
    console.log(number, "is even.");
} else {
    console.log(number, "is odd");
}
