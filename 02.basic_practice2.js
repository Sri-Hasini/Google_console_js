console.log("Let's create a sentence");
var q1 = prompt("Enter your name");
var q2 = prompt("Enter your favourite color");
function sentence(name, colour) {
    console.log("Hi! My name is " + name + ". I love " + colour + " colour.");
}
sentence(q1, q2);

// 2nd one
console.log("Let's create an operation");
var num1 = parseInt(prompt("Enter a value"));
var num2 = parseInt(prompt("Enter another value"));
function operation(num1, num2) {
    console.log("Addition of " + num1 + " + " + num2 + " = " + (num1 + num2));
    console.log("Subtraction of " + num1 + " - " + num2 + " = " + (num1 - num2));
    console.log("Multiplication of " + num1 + " * " + num2 + " = " + (num1 * num2));
    console.log("Division of " + num1 + " / " + num2 + " = " + (num1 / num2));
}
operation(num1, num2);

// 3rd one
console.log("Let's create another sentence");
var name = prompt("Enter your name");
var col = prompt("Enter your wished colour");
var val1 = parseInt(prompt("Enter some value1"));
var val2 = parseInt(prompt("Enter some value2"));
function sentence2(name, col, val1, val2) {
    console.log("Your name is " + name);
    console.log("Your wished colour is " + col);
    console.log("Your value1 is " + val1);
    console.log("Your value2 is " + val2);
}
sentence2(name, col, val1, val2);
