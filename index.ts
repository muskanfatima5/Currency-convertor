#! /usr/bin/env node
import inquirer from "inquirer";
let exchange_rate: any ={
    "USD" : 1,      //Base Currency
    "EURO" : 0.9,   //European Currency
    "JYP" : 113,    //Japenese Currency
    "CAD" : 1.3,    //Canadian Dollar
    "AUD" : 1.65,   //Australian Dollar
    "PKR" :277.7,     //Pakistani Rupees
}
let user_answer = await inquirer.prompt([
    {
        name :"from_currency",
        message : "Select the currency to convert from",
        type :"list",
        choices : ["USD","EURO","JYP","CAD","AUD","PKR"]
    },
    {
        name : "to_currency",
        message : "Select the currency to convert into",
        type : "list",
        choices : ["USD","EURO","JYP","CAD","AUD","PKR"]
    },
    {
        name : "amount",
        message : "Enter the amount to convert",
        type : "input"
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(converted_amount.toFixed(2));