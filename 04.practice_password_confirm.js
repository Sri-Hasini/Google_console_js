console.log("Hello! Welcome to our application!!");
var username = prompt("Enter username");
var password = prompt("Enter password");
console.log("You have entered password successfully!");
var confirm = prompt("Enter password again for confirmation");
while (password != confirm) {
    confirm = prompt("Sorry! Wrong password, please try again!!");
}
console.log("Hurray! You are successfully logged in!!");
