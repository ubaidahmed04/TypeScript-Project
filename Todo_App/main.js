// #! /usr/bin/env node
// import inquirer from "inquirer";
// import PromptSync from "prompt-sync";
// const prompt = PromptSync();
// let mylist: any = [];
// console.log(
//   "\n===============================Welcome To My Todo_App======================================\n\n"
// );
// while (true) {
//   let Task = await inquirer.prompt([
//     {
//       name: "querry",
//       message:
//         "Select what action you'd like to take with this task. (use arrow key) ",
//       type: "list",
//       choices: ["Read", "Add Todo", "Update", "Delete Todo", "Quit"],
//     },
//   ]);
//   let saveTask = Task.querry;
//   if (saveTask === "Read") {
//     if (mylist[0] === undefined) {
//       console.log(
//         "\n<<<<<<<<<<<<<<<<<<<<-----No List Found------>>>>>>>>>>>>>>>>>>>\n"
//       );
//     } else {
//       console.log(
//         "\n================================View Our Todo_List======================================\n"
//       );
//       for (let item of mylist) {
//         console.log(mylist.indexOf(item) + ":" + item);
//       }
//       console.log(
//         "\n\n========================================================================================\n"
//       );
//     }
//   } else if (saveTask === "Add Todo") {
//     let input = prompt("Enter your todo do you want to add :");
//     if (input === "") {
//       console.log("   please add valid todo  \n");
//     } else {
//       mylist.push(input);
//       console.log("\n\t\tSuccessfully add todo \n");
//     }
//   } else if (saveTask === "Delete Todo") {
//     if (mylist[0] === undefined) {
//       console.log(
//         "\n<<<<<<<<<<<<<<<<<<<<-----No List Found------>>>>>>>>>>>>>>>>>>>\n"
//       );
//     } else {
//       console.log("\n \t Here is the list.\n");
//       console.log(mylist);
//       let delInput = prompt(
//         "\nType the index of the todo you want to delete :"
//       );
//       console.log("\n --------------Remove todo---------------\n");
//       mylist.splice(delInput, 1);
//     }
//   } else if (saveTask === "Update") {
//     if (mylist[0] === undefined) {
//       console.log(
//         "\n<<<<<<<<<<<<<<<<<<<<-----No List Found------>>>>>>>>>>>>>>>>>>>\n"
//       );
//     } else {
//       console.log(
//         "==========================here is the list==========================="
//       );
//       let updateInput = prompt("Tpye index of list do you to update it: ");
//       mylist.splice(updateInput, 1);
//       let updateTodo = prompt("Enter your update todo ");
//       mylist.push(updateTodo);
//       console.log("\t\t Update Successfully\t\t");
//       console.log("\n\nHere is the Updated List\n");
//       console.log(mylist);
//     }
//   } else if (saveTask === "Quit") {
//     console.log(
//       "\n<<<<<<<<<<<<<<<<<<<<<-----------Thank's for using my todo_App---------->>>>>>>>>>>>>>>>>>>>>>"
//     );
//     break;
//   }
// }
import PromptSync from "prompt-sync";
const prompt = PromptSync();
// let input =prompt("enter your todo");
// let myArr[] = ["ahmed","ubaid",]
// console.log(myArr)
// ... means  arbitry rest parameter
// let user;
function myName(first = "ubaid") {
    return console.log(first);
    // console.log(arg)
}
myName("ahmed");
// console.log()
let student = [1, 2, 3, 4];
let student2 = student;
student2.push(5);
console.log(...student);
console.log(student2);
