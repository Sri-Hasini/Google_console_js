// we need to run this entire code only in the google chrome console only, this is dynamic reading of values
console.log("Hey! Welcome to our Cafe!!");
console.log("We have Coffee, Cookies, Samosas and Cool drinks to serve!");
console.log("These are the prices of the items");
console.log("Coffee        ->   4$");
console.log("Cookies       ->   1$");
console.log("Samosas       ->   2$");
console.log("Cool drinks   ->   3$");
var item1 = prompt("How many Coffee cups would you like to have?");
var item2 = prompt("How many Cookies would you like to have?");
var item3 = prompt("How many Samosas would you like to have?");
var item4 = prompt("How many Cool drinks would you like to have?");
var item5 = prompt("How much would you like to leave as a tip?");
item1 = parseInt(item1);
item2 = parseInt(item2);
item3 = parseInt(item3);
item4 = parseInt(item4);
item5 = parseInt(item5);
var c1 = item1 * 4;
var c2 = item2 * 1;
var c3 = item3 * 2
var c4 = item4 * 3;
var taxes = (c1 + c2 + c3 + c4) * 0.2;
var bill = c1 + c2 + c3 + c4 + item5 + taxes;
console.log("You have ordered " + item1 + " Coffee's for a total of " + c1 + "$");
console.log("You have ordered " + item2 + " Cookies for a total of " + c2 + "$");
console.log("You have ordered " + item3 + " Samosas for a total of " + c3 + "$");
console.log("You have ordered " + item4 + " Cool drinks for a total of " + c4 + "$");
console.log("You have left " + item5 + "$ as a tip. The total of your bill is " + bill + "$ with 20% tax");
