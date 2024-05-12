import inquirer from "inquirer";
async function main() {
    let guestNum = await inquirer.prompt([{
            name: "guess",
            type: "number",
            massage: "guess the number"
        }]);
    console.log(guestNum.guess);
}
main();
// task 1
// let personName: string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);
// task 2
let uppercase = "ubaid ahmed";
let showUpperCase = uppercase.toUpperCase();
console.log(showUpperCase);
let lowerCase = "ubaId aHmEd";
let showLowerCase = uppercase.toLowerCase();
console.log(showLowerCase);
let titleCase = "ubaid ahmed ";
let showTitleCase = titleCase.replace(/\bw/g, c => c.toUpperCase());
console.log(showTitleCase);
// task 4
let famousName = "Albert Einstein";
// console.log(`${famousName} once said,“A person who never made a mistake never tried anything new.”`)
// task 5
let famousPerson = "Albert Einstein";
let quote = `${famousPerson} once said,`;
let quotation = '“A person who never made a mistake never tried anything new.”';
// console.log(quote + quotation)
// task 6
let stripName = "ubaid ";
// console.log(`${stripName} Ahmed`)
// task 7
for (let i = 1; i < 4; i++) {
    console.log(8);
}
// task 8
let num1 = 1;
let num2 = 4;
for (let i = num1; i <= num2; i++) {
    // console.log(8)
}
// task 9
let storeName = 'Ubaid Ahmed';
let showDate = new Date();
// console.log(stripName + showDate)
// task 10 
let names = [
    "Sameer", "Faiq", "Zain", "Farzan"
];
// console.log(names);
// task 11
let sentSMS = [
    "Sameer", "Faiq", "Zain", "Farzan"
];
let textShow = "";
// console.log(names);
// console.log(num1 + num2)
// console.log("hello world")
// function welcome(){
//     let name = prompt("Enter your name")
//     alert(`Hello ${name}, would you like to learn some Python today?`)
//     // var namePrint = document.getElementById('namePrint') ;  
//     // if (name) {
//     //     // Update the content of the element with the entered name
//     //     namePrint.innerText = `Welcome, ${name}!`;
//     // } else {
//     //     // Handle case where the user canceled the prompt or entered an empty name
//     //     namePrint.innerText = "Welcome!";
//     // }
// }
// // Task 3
// function textCases(){
//     var capital = document.getElementById('capital') ;  
//     var small = document.getElementById('small') ;  
//     var title = document.getElementById('title') ;  
//  let name  = prompt("Enter your name");
//  let upperCase = name?.toUpperCase();
//  let lowerCase = name?.toLowerCase();
// //  let titleCase = name?.toTitleCase();
// // capital.innerText =`this is UpperCase : ${upperCase}` 
// // small.innerText =`this is LowerCase: ${lowerCase}`
// // title.innerText =`this is TitleCase: ${titleCase}`
// }
// // task 4
// // function Quote(){
// //     let Quotes =document.getElementById("quote")
// //     let quotation:string = prompt("enter your quotation")
// //     if(quotation === ":"){
// //         var author = quotation.innerText =quotation
// //         console.log(author)
//     // }
//     // if else (quotation.indexOf(`${""||''}`))
//     // Quote.innerText = 
// // }
// // task 5
// function AddQuotes(){
//     let authorName = prompt("ENter your author name") 
//     console.log(authorName)
//     let massege = prompt("ENter your  Massege") 
//     console.log(massege)
//     var textShow = document.getElementById("quote") 
//     // textShow.innerText = `
//     // ${authorName} : ${massege} 
//     // `:console.log("first")
// }
// //  task 6
// function nameWithSpace(){
//     // let name = prompt("enter your full name")
//     let name = "ubaid/n/tahmed/tkhan"
//     console.log(name)
//     console.log("ubaid")
// }
// // task 9
// function favNummber(){ 
//     let showNumber = document.getElementById("showNumber")
//     let number = prompt("Enter Your Favourate Number ")
//     console.log(number)
//     // showNumber.innerText= `
//     // ${number}
//     // `
// }
// class work 
let check = 1234;
// console.log(check)
function student(...id) {
    let num = 10;
    console.log(num);
}
student(102);
