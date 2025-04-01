console.log("Hey! Welcome to our Cafe!!");
console.log("We have Coffee, tea and cookies to serve");
console.log("The prices of them are as follows : ");
console.log("Coffee  -> 10$");
console.log("Tea     -> 10$");
console.log("Cookies -> 5$");
var q1 = prompt("Would you like to have a coffee or a tea");
var tax;
if (q1 == "coffee" || q1 == "Coffee") {
    var q2 = parseInt(prompt("How many cups of coffee do you want ?"));
    var q3 = prompt("Would you like to have some Cookies along with your Coffee? (yes/no)");
    if (q3 == "yes") {
        var q4 = parseInt(prompt("How many Cookies would you like to have ?"));
        var cost1 = 10 * q2;
        var cost2 = 5 * q4;
        tax = (cost1 + cost2) * 0.1;
        console.log("You have ordered " + q2 + " cups of Coffee, which costs " + cost1 + "$ and you have ordered " + q4 + " Cookies, which costs " + cost2 + "$");
        console.log("The total bill is " + (cost1 + cost2 + tax) + "$ with 10% tax added");
    }
    else {
        var cost1 = 10 * q2;
        tax = cost1 * 0.1;
        console.log("You have ordered " + q2 + " cups of Coffee, which costs " + cost1 + "$");
        console.log("The total bill is " + (cost1 + tax) + "$ with 10% tax added");
    }
}
else if (q1 == "tea" || q1 == "Tea") {
    var q2 = parseInt(prompt("How many cups of tea do you want ?"));
    var q3 = prompt("Would you like to have some Cookies along with your tea? (yes/no)");
    if (q3 == "yes") {
        var q4 = parseInt(prompt("How many Cookies would you like to have ?"));
        var cost1 = 10 * q2;
        var cost2 = 5 * q4;
        tax = (cost1 + cost2) * 0.1;
        console.log("You have ordered " + q2 + " cups of tea, which costs " + cost1 + "$ and you have ordered " + q4 + " Cookies, which costs " + cost2 + "$");
        console.log("The total bill is " + (cost1 + cost2 + tax) + "$ with 10% tax added");
    }
    else {
        var cost1 = 10 * q2;
        tax = cost1 * 0.1;
        console.log("You have ordered " + q2 + " cups of tea, which costs " + cost1 + "$");
        console.log("The total bill is " + (cost1 + tax) + "$ with 10% tax added");
    }
}
else {
    console.log("Have a nice day!!");
}
