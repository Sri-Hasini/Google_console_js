// Logging part
console.log("Hello! Welcome to the food app!");
console.log("Let's create an account here");
var username = prompt("Create a username : ");
var password = prompt("Create a password : ");
var user_confirm = prompt("Enter your username again for confirmation : ");
while (user_confirm != username) {
    user_confirm = prompt("Incorrect username! Please enter the valid username");
}
var pass_confirm = prompt("Enter your password for confirmation : ");
while (pass_confirm != password) {
    pass_confirm = prompt("Incorrect password! Please enter the valid password");
}
console.log("Hurray! You have successfully logged in!!");

// Adding balance
console.log("Lets add some balance if you wish to do so.");
var cur_bal = 500;
console.log("Your current balance is " + cur_bal + "$");
var q1 = prompt("Would you like to add money to your account?");
if (q1 == "yes" || q1 == "Yes") {
    var q2 = Number(prompt("How much money would you like to add ?"));
    cur_bal += q2;
    console.log("Your current balance is " + cur_bal + "$");
}
else {
    console.log("Great!");
}

// Ordering burger
console.log("Lets go into the burger section");
var q3 = prompt("Would you like to have a burger?");
if (q3 == "yes" || "Yes") {
    console.log("Which type of burger would you like to have from the below options : ");
    var burgertype = ["Cheesy chicken burger", "Cheese-less chicken burger", "Veg tikka burger", "panner cheese burger", "Fish burger"];
    var prices = [50, 45, 35, 40, 50];
    for (var i = 0; i < burgertype.length; i++) {
        console.log((i + 1) + ". " + burgertype[i] + "                  - " + prices[i] + "$");
    }
    console.log("Please enter your order by entering the position of the burger and number of burgers you want in that type and finally enter ok, if you are done");
    var total_cost = 0;
    while (1) {
        var choice = prompt("Enter the burger's position in the given menu : ");
        if (choice == "ok") break;
        else if (Number(choice) >= burgertype.length) continue;
        var quantity = Number(prompt("Enter the number of burgers you want in this type : "));
        var calc = prices[Number(choice) - 1] * quantity;
        if (cur_bal - calc < 0) { 
            console.log("Sorry! You can't order further as you don't have enough balance");
            console.log("You have ordered " + quantity + " " + burgertype[Number(choice) - 1] + "(s) which costs " + calc + "$");
            console.log("Your current balance after ordering this item is " + cur_bal - total_cost + "$");
            break;
        }
        total_cost += calc;
        console.log("You have ordered " + quantity + " " + burgertype[Number(choice) - 1] + "(s) which costs " + calc + "$");
        console.log("Your current balance after ordering this item is " + cur_bal - total_cost + "$");
    }
    console.log("Thankyou! you can collect your order in few minutes at the counter!!");
}
else {
    console.log("Have a great day!");
}
