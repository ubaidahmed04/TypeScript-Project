import inquirer from "inquirer";

let myBalance:number = 10000;
const pinCode:number = 1234;
let checkPinCode =await inquirer.prompt(
    [
        {
            name:"pinCode",
            message:"Enter your pin code ",
            type:"number"

        }
    ]
    );
    if(pinCode == checkPinCode.pinCode){
        let checkAccount = await inquirer.prompt([
            {
                name:"currAccount",
                message:"Select An Account type (using arrow key)",
                type:"list",
                choices:["Current Account","Saving Account"]
            }
        ])
    
    if(checkAccount.currAccount==="Current Account"||"Saving Account"){
        let tranMethod = await inquirer.prompt(
            [
                {
                    name:"withDrawMethod",
                    message:"What do you want too ?",
                    type:"list",   
                    choices:["Cash Withdrawal","Fast Cash"]
                }
            ]
        );
        if(tranMethod.withDrawMethod==="Cash Withdrawal"){
            let cashWithdraw = await inquirer.prompt([
                {
                    name:"withDrawAmmount",
                    message:"How many ammount do you want too Withdrawal ?",
                    type:"number",   
                }
            ]);
            myBalance -= cashWithdraw.withDrawAmmount;
            if(cashWithdraw.withDrawAmmount>myBalance){
                console.log('Insufficient Balance')
            }
            else if(myBalance>= cashWithdraw.withDrawAmmount){
            console.log("Congrats to successfully withdrawal")
            console.log(`Your Current Balance is : ${myBalance}`)

            }
            else if(isNaN(cashWithdraw)){
                console.log("Please Enter your Ammount do you want to withdrawal")
            }
            // else{
            // // console.log(`Your Current Balance is : ${myBalance}`)

            // }
        }
        
        if(tranMethod.withDrawMethod==="Fast Cash"){
            let fastingWithdraw =await inquirer.prompt([
                {
                    name:"rapidCash",
                    message:"what ammount do you want to withdrawal (using arrow key)",
                    type:"list",
                    choices:["1000","2000","3000","4000","5000"]
                }
            ])
            console.log(fastingWithdraw.rapidCash)
            if(myBalance>= fastingWithdraw.rapidCash){
                myBalance-= fastingWithdraw.rapidCash;

                console.log("Congrats to successfully withdrawal")
                console.log("your update balance is :",myBalance);

            }
            
        }
    }




    
}   
   
    else{
        console.log("incorrect pin code \n please try again");
    }
