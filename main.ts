

// as function ask question 

import inquirer from "inquirer";
import { EndOfLineState } from "typescript";

 let answers = await inquirer.prompt( [
    {message: "enter your first Number", type: "number", name: "firstNumber"},
    {message: " enter your second number", type: "number", name: "secondNumber"},
    {
       message: "select one operator to perform operation ",
       type: "list",
       name: "operator",
       choices:["addition", "subtraction", "multiplication", "division"],

    },
 ]);
    

 if (answers.operator ==="addition"){
   console.log(answers.firstNumber +  answers.secondNumber)

 }
else if (answers.operator === "subtraction") {
   console.log(answers.firstNumber - answers.secondNumber)

}   
else if (answers.operator === "multiplication") {
   console.log(answers.firstNumber * answers. secondNumber)

}
else if (answers.operator === "division") {
   console.log(answers.firstNumber / answers. secondNumber)
}
else{
console.log("invalid input")
}
 

      


