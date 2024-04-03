import inquirer from "inquirer";

let myBalance = 1000;
let pinCode = 1234;
let checkPinCode =await inquirer.prompt(
    [
        {
            name:"pinCode",
            message:"Enter your pin code ",
            type:"number"

        }
    ]
    );
    if(pinCode===checkPinCode.pinCode){
        let dropDown = await inquirer.prompt(
            [
                {
                    name:"pinCode",
                    message:"What do you want too ?",
                    type:"list",   
                    choices:["withDraw","check balance"]
                }
            ]
        )
         if(dropDown.pinCode==="withDraw"){
            let amountWithDraw = await inquirer.prompt(
                [
                    {
                        name:"amount",
                        message:"how many ammount do you want to with draw ?",
                        type:"number",   
                    }
                ]
            )
              if (myBalance<amountWithDraw.amount){
                console.log("insufficient balance");
             }
            myBalance -= amountWithDraw.amount;
            
            if(myBalance>=amountWithDraw.amount){
                 console.log("congrats to successfully withDraw");
                 console.log(`your update balance is ${myBalance}`)
               
            }
         }
         else if(dropDown.pinCode ==="check balance"){
            console.log(`Your Current Balance is : ${myBalance}`)
         }
    }
    else{
        console.log("incorrect pin code");
    }
