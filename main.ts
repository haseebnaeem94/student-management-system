#! /usr/bin/env node

import inquirer from "inquirer";
const randomNumber: number = Math.floor(35001 + Math.random() * 50000)
let myBalance: number = 0;
let answer = await inquirer.prompt([
    {
        name: "Student",
        type: "input",
        message: "Please enter student name:",
        validate: function (value) {
            if(value.trim() !== "") {
                return true
            }
            return "Please enter a Student name"
        }

    },
    {
        name: "Courses",
        type: "list",
        message: "Please select a course you want to enroll",
        choices: ["Web Development", "Graphics Designing", "Digital Marketing", "Artificial Intelligence and Machine Learning", "Video editing and Animation"],
    }
]);
const courseFees:{[key:string]: number} = {
    "Web Development" : 3500,
    "Graphics Designing" : 2500,
    "Digital Marketing" : 3000,
    "Artificial Intelligence and Machine Learning" : 6000,
    "Video editing and Animation" : 4500,
};

console.log(`\nyour selected course fees: ${courseFees[answer.Courses]}\n`)
console.log(`\nyour current balance: ${myBalance}\n`);

let paymentMethod = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Please select payment method from which you want to pay",
        choices: ["Bank transfer", "Easypaisa", "Jazzcash", "RaastID" , "Payoneer" , "Dedit/Credit card"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if(value.trim() !== "") {
                return true
            }
            return "Please enter valid course fee"
        }
    }
])
console.log(`\nyour selected payment method is: ${paymentMethod.payment}\n`);

const courseFee = courseFees[answer.Courses]
const paymentAmount = parseFloat(paymentMethod.amount);

if(paymentAmount === courseFee) {
    console.log(`Congradulations you have successfully enrolled in ${answer.Courses}`)
    console.log(`\n your current balance is: ${myBalance += paymentAmount}\n`)
    
    let answers = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What you want to do next? please select",
            choices: ["View status" , "Exit from Student Management System"]
        }
    ])
    if(answers.select === "View status") {
        console.log("\n-------------------- Student Status --------------------------------\n")
        console.log(`Student Name: ${answer.Student}`)
        console.log(`Student ID: ${randomNumber}`)
        console.log(`Enrolled in courses: ${answer.Courses}`)
        console.log(`Fee Paid: ${paymentAmount}`)
        console.log(`Current Balance: ${paymentAmount}`)
    }else{
        console.log("Exit from Student Management System")
    }




}else{
    console.log("Please enter a valid course fee")
};
