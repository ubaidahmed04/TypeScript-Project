// #! /usr/bin/env node
import inquirer from 'inquirer'
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const currency :any={
 USD : 1,
 PKR : 100,
 Euro : 150,
 Ind : 20,
}
let firstInput = await inquirer.prompt(
    [
        {
            name:"from",
            message:"Select your currency ",
            type:"list",
            choices:['USD','Ind','PKR','Euro']

        }
    ]
);
let secondInput = await inquirer.prompt(
    [
        {
            name:"to",
            message:"Select currency do you want to change this",
            type:"list",
            choices:['USD','Ind','PKR','Euro']

        }
    ]
);

let rupees :any = prompt("enter your ammount");
let fromCurrency= currency[firstInput.from]
let toCurrency = currency[secondInput.to]
// console.log(fromCurrency)
let baseAmmount = rupees/fromCurrency;
console.log(baseAmmount)
let convertedAmount = baseAmmount * toCurrency;
console.log(convertedAmount)

// console.log(currency[firstInput.from]* rupees);
// console.log(currency[secondInput.to]);
