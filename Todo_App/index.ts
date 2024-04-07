import inquirer from "inquirer";

let todo: any = [];
while (true) {
  let userTodo = await inquirer.prompt([
    {
      name: "todoList",
      message: "Enter your todo  or (type 'exit' to stop!)",
      type: "string",
    },
  ]);

  let saveTodo = userTodo.todoList.trim();

  if (saveTodo === "") {
    console.log("please add your todo");
  }
  if (saveTodo.toLowerCase() === "exit") {
    break;
  } else {
    todo.push(saveTodo);
    // console.log(saveTodo)
    console.log("your todo is ",todo);

    
  }
}
console.log("your final todo is ",todo);
