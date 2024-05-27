
// let name:string = "ubaid ahmed";
// //console.log(`hello ${name} do you want to learn some typescript`)

// let myName:string = "ubaid ahmed";
// let capital = name.toLocaleLowerCase();
// let smaller = name.toLocaleUpperCase();
// let titleName =name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// // console.log(titleName);

// let person_name :string = "Quaid-e-Azam";
// let quatation = "said Pakistan is Islamic country";
// //console.log(person_name + quatation);
// let spaceName = "\t\n Ubaid ahmed\t\n";
// // console.log(spaceName);
// // console.log(spaceName.trim());

// let num1  :number= 2;
// let num2 :number = 6;
// let num3 :number = 10;
// let num4 :number = 2;
// let num5 :number = 2;
// let num6 :number = 4;
// let num7 :number = 16;
// let num8 :number = 2;
// // console.log(num1 + num2);
// // console.log(num3 - num4);
// // console.log(num5 * num6);
// // console.log(num7 / num8);
// let favNum:number = 4;
// // console.log(`this is my favourate ${favNum}  `);

// // let arrayName = ["ubaid","Faiq","sameer"];
// // console.log(arrayName)
// let  myArr :string[] =  ["ubaid","Faiq","sameer"];
// for(let i = 0 ;i < myArr.length;i++){
//     //console.log(`hello ${myArr[i]} how are you`);
// }

// let myModel:string[] = [
//     "car",
//     "bike",
//     "biCycle",
// ];
// myModel.forEach(model=>{
//    // console.log(`I would like to own a ${model}.`);
// })


// let invitation :string[] = ["obaid","rafey","haris","naqeeb"];
// invitation.forEach(invite=>{
//     //console.log(`i would like to inform ${invite} please join me for dinner`);
// })

// let unablToAtend = "rafey";
// //console.log(`${unablToAtend}can't make it to dinner`);
// let new_guest = "Hanzala";
// invitation[invitation.indexOf(unablToAtend)] = new_guest;
// invitation.forEach(invite=>{
//     // console.log(`i would like to inform ${invite} please join me for dinner`);

// })

// let invite :string[] = ["alam",'arham',"salman"];
// // console.log("great new! I found a bigger table");
// invitation.unshift("newton");
// invitation.splice(invitation.length /2,0,"sufyan");
// invitation.push("naseem");

// invitation.forEach(invite=>{
//    // console.log(`dear ${invite} i would like to inform you to join me for dinner`)
// })


// let a :number = 5;
// let b:number = 2;
// let c:number ;
// c= ++a + a++ + --b + b-- + a + b++ + b ;
// //  6 +  6   +   1 + 1   + 7 +  0  + 1

//  // console.log(c); // output is 22

// //import inquirer from 'inquirer';
// //marksheet 


// import inquirer from "inquirer";

// let num  = await inquirer.prompt({
// name:"marksheet",
// message:"enter your number",
// type:"number"
// })
// let userNum = num.marksheet;
// // console.log(num.marksheet)
// // let userNum = 70;    

// if( userNum >= 80 && userNum <= 100){
//     console.log("A+");
// } 
// else if( userNum >=70 && userNum<=79){
//     console.log("B"); 
// }
// else if( userNum >= 50 && userNum <=69 ){
//     console.log("C");
// }
// else{
//     console.log("Failed")
// }


// again play 1 to 20

let obj ={
    name:"ubaid",
    id:123,
    
}
// console.log(obj)

// tuple && tuple is also a pass by value

let tuple : [number,string,boolean,]

tuple =[5,"ubaid",true]
// console.log(tuple)
 
// object with type decleare

let myObj : {name:string,id:number,student:true} = {
    name:"ubaid",
    id:12345,
    student:true
}
// console.log(myObj)

// genric type

let myArr:Array<string> = ["ubaid","faiq"] 
let newArr = myArr  // past by refence
newArr.push("sameer")
// console.log(newArr)

let studentArr:[string,number] = ["ubaid",2] // multiple type defined 

// pass  by value means myNum me value ki 2 rahe gi value same nh rhe gi
let myNum = 2
let anotherNum = myNum; //assign again myNum value but another memory address
anotherNum = 6 // pass by value number string undefined boolean null BigInt symbol or pass by refrence ki data type object
// console.log(anotherNum) 

// console.log(myNum) 

let student :string[]=["ubaid","faiq"]
let anotherStudent :string[] = student;
anotherStudent[0]="changeName";
// console.log(anotherStudent) // same value in both console because array primative datatype nh he its means is pass by refrence howa he 
// console.log(student) // same value 


let Students :number[] = [1,2,4,5]
let anotherStudents :number[] =[...Students];// yaha humne spreadOperator use kya he pass by refrence ko pass by value krne ke lye 
// new features javascript ES6 rest or spread operator
anotherStudents[0] = 3
console.log(Students)
console.log(anotherStudents)


// key value pair me object hota he 
