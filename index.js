#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter your first number:",
        type: "number",
        name: "num1",
    },
    {
        message: "Enter your Second number:",
        type: "number",
        name: "num2",
    },
    {
        message: "which operatopn you want to perform",
        type: "list",
        name: "operator",
        choices: ["Add", "Substract", "multiply", "Divide"],
    },
]);
if (answer.operator === "Add") {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === "Substract") {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === "multiply") {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator === "Divide") {
    console.log(answer.num1 / answer.num2);
}
else
    console.log("please select the valid operators");
