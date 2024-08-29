#! usr/bin/env node

import inquirer from "inquirer"

console.log("\n\tWelcome to Hamza Guessing Game\nc");

const randomnumber:number = Math.floor(Math.random() * 5 + 1)

while(true){
const Answer = await inquirer.prompt([
    {
        name:"UserGuessNumber",
        type:"number",
        message:"Enter you guess no between 1 to 5",
    }
])

if(Answer.UserGuessNumber === randomnumber){
console.log("Congratulation you guess is Correct")
}else{
    console.log("Sorry You guess is Wrong");
    
}
}