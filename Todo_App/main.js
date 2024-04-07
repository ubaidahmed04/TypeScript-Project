import inquirer from "inquirer";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let mylist = ["ubaid", "khan"];
console.log("\n===============================Welcome To My Todo_App======================================\n\n");
while (true) {
    let Task = await inquirer.prompt([
        {
            name: "querry",
            message: "Choose What you do with this task (use arrow key) ",
            type: "list",
            choices: ["read", "add_Todo", "Delete_todo", "Quit"]
        }
    ]);
    let saveTask = Task.querry;
    if (saveTask === "read") {
        console.log("================================View Our Todo_List======================================");
        //  console.log(...mylist)
        for (let item of mylist) {
            console.log(mylist.indexOf(item) + ":" + item);
        }
        console.log("========================================================================================");
    }
    else if (saveTask === "add_Todo") {
        let input = prompt("Enter your todo do you want to add :");
        if (input === "") {
            console.log("   please add valid todo  \n");
        }
        else {
            mylist.push(input);
            console.log("\n\t\tSuccessfully add todo \n");
            // console.log("   \n            here is the list   \n     ")
            // console.log(mylist)
        }
    }
    else if (saveTask === "Delete_todo") {
        console.log("\n \t Here is the list.\n");
        console.log(mylist);
        let delInput = prompt("\nType the index of the todo you want to delete :");
        console.log("\n --------------Remove todo---------------\n");
        mylist.splice(delInput, 1);
    }
    else if (saveTask === "Quit") {
        console.log("<<<<<<<<<<<<<<<<<<<<<-----------Thank's for using my todo_App---------->>>>>>>>>>>>>>>>>>>>>>");
        break;
    }
}
