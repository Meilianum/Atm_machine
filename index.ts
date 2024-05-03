#!/usr/bin/evn node,

import inquirer from "inquirer";

let myBalance =  10000 ;//Dollar
let  myPin    =  1233
console.log("wellcome to BANK ISLAMI")

let pinAnswer = await inquirer.prompt([ 
{
name:      "pin" ,
message:  "Enter your myPin",
type:      "number",
}
])
if (pinAnswer.pin === myPin){
console.log("correct pin code!!!")
}else {
   console.log("incorrect pin code try again")
}


let opertionAns = await inquirer .prompt([
{
   name:      "opertion" ,
   message:     "please select an option",
   type:        "list",
   choices:    ['checkbalance', 'withdraw',"fastcash", "insufficantionbalance"]
}
])
console.log();
if(opertionAns.opertion === "withdraw"){
let amountAns =await inquirer.prompt(
[
 {
  name:       "amount" ,
  message:    "Enter  your amount" ,
  type:        "number"
  
 }   
]
);
myBalance -= amountAns.amount ;
console.log('your remaining balance is:' + myBalance)
console.log("insuffication balance");

}else if(opertionAns.opertion === "checkbalance"){
    console.log("your balance is:" + myBalance )}

 let fastCash = await inquirer.prompt([
    {
        name:   "fastCash",
        message:  "Enter your amount",
        type:      "list",
        choices:  ["1000",'2000','3000', '4000','5000' ,'10000','12000']    
    }
 ])
if(fastCash.fastCash > myBalance){
   console.log("insufficantion Balance")
} else {
myBalance -=fastCash.fastCash
console .log(`${fastCash.fastCash} withdraw successfully`)
console.log(`your remanining balance is:${myBalance}`)
};
 


 






