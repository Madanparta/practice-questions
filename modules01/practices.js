'use strict';

const { count } = require('console');
/*
//Optional problem1 :  Write a program to calculate HCF of Two given number.

//read finle
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
let x=parseInt(readLine());
let y=parseInt(readLine());

while(Math.max(x,y)%Math.min(x,y)!==0){
    if(x>y){
        x%=y;
    }else{
        y%=x;
    }
}
console.log(Math.min(x,y));
  
*/

//.......................................................

// Optional problem 2 : Write a while loop that asks the user to enter two numbers. The numbers should be added and the sum displayed. 
//The loop should ask the user whether he or she wishes to perform the operation again. If so, the loop should repeat; otherwise it should terminate.

/*
//read finle
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
let num1=parseInt(readLine());
let num2=parseInt(readLine());

let dision=readLine().toUpperCase();

let condition=true;
console.log('adding two values.\n');
while(condition || dision !== 'STOP'){

    let sum=num1+num2;
    console.log(num1,num2);
    console.log('total sum '+sum);

    console.log("Enter Dision 'CONT' OR 'STOP'.");
    

    if(dision=='CONT'){

        console.log("enter any two numbers");
        
        let sum=num1+num2;
        console.log('total sum '+sum);
        
        dision='STOP'

    }else if(dision=='STOP'){
        condition=false;
    }
}

*/

//.......................................................

//Optional problem 3 :  Write a program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros entered.

/*

//read finle
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
let users=readLine().split(' ');
let len=users.length;
let zerose=0;
let positive=0;
let nagitive=0;

for(let i=0;i<len;i++){
    if(users[i]==0){
        zerose++;
    }else if(users[i]>0){
        positive++;
    }else if(users[i]<0){
        nagitive++;
    }
}
console.log("Total zeros "+zerose);
console.log("Total positive "+positive);
console.log("Total nagitive "+nagitive);

*/

//.......................................................

//Optional problem 4 : Write a program that prompts the user to input a positive integer. 
//It should then output a message indicating whether the number is a prime number.


/*

//read finle
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..

let num=parseInt(readLine());
let prime=true;

if(num==1){
    console.log(num+" Prime number");
}else if(num<1){
    console.log(num+" please enter positive number");
}else{
    for(let i=2;i<num;i++){
        if(num%i==0){
            prime=false;
        }
    }
    if(prime){
        console.log("yes");
    }else{
        console.log("no");
    }
}
*/

//.......................................................

// Optional problem 5 : Write a program that generates a random number and asks the user to guess what the number is.
//  If the user's guess is higher than the random number, the program should display "Too high, try again." If the user's guess is lower than the random number, 
//  the program should display "Too low, try again." The program should use a loop that repeats until the user correctly guesses the random number.
// Hint : you could use Math.random()

/*
//read finle
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');
function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
let users=parseInt(readLine());
let random;
let checking=true;

while(checking){
    random = parseInt(Math.random()*20)+1;

    console.log(random);

    if(users==random){
        console.log('WON the game');
        checking=false;

    }else if(users>random){
        console.log("Please enter low number");
        continue;

    }else if(users<random){
        console.log("Please enter higher number");
        continue;
    }
}
*/

//.......................................................

//Take a 3 digit integer, print "YES" if the reversed integer is equal to the input. Print "NO" otherwise.

/*

//read finle
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');
function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
let num=parseInt(readLine()); // 252
let str=String(num);

let con="";
for(let i=str.length-1;i>=0;i--){
    con+=str[i];
}
let convert=Number(con); //252 convewrt

if(num == convert){
    console.log("yes");
}else{
    console.log("no")
}

*/

//.......................................................

// Enter number of electricity units consumed and calculate amount to pay, based on the rules below
// For first 50 units, Rs: 1/unit
// For next 100 units, Rs.2/unit
// For next 100 units, Rs. 3/ units
// For units above 250, Rs.4/units
// For all bills above 150 rupees additional surcharge of 20% of total bill amount is added.

/*

//read finle
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');
function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
let units = parseInt(readLine());
let bills;

if(units<=50){
    bills=units*1    
}else if(units<=100){
    bills=((units-50)*2)+50;
}else if(units<=250){
    bills=((units-100)*3)+(50*2)+50*1;
}else if(units>250){
    bills=((units-250)*4)+(150*3)+(50*2)+(50*1);
}

if(bills>150){
    bills=bills+(bills*0.20);
}else{
    bills
}

console.log(bills);

*/

//.......................................................


// Take 3 distinct integers as input and return the second smallest among the input.

// Constraints:
// -1000 <= a,b,c <= 1000

// Input:
// Three integers each in a seperate line
// Output:
// A single integer with the second smallest value among the input


/*

//read finle
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');
function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
//let user=readLine().split(" ");
let user=[23,4,56,7,1,0,-3,6,9];//finding 2nd small number
// console.log(user);

let arr=[];
let temp;

for(let i=0;i<user.length;i++){
    for(let j=i+1;j<user.length;j++){
        if(user[i]>user[j]){
            temp=user[i];
            user[i]=user[j];
            user[j]=temp;
        }
    }
    arr.push(user[i]);
}
console.log(arr);
// console.log(arr[1]);
*/

//.......................................................

//Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4

// Input:
// Two lines of input each containing a single integer.
// Output:
// A single integer which is the product of all such numbers which follow the above mentioned conditions.

// Example:

// Case 1:
// Input:
// 10
// 20
// Output:
// 0

// Case 2:
// 30
// 40
// Output:
// 40


/*
//read finle
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');
function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..

let nums;

for(let i=0;i<2;i++){
    nums=parseInt(readLine());
    if(nums%2==0 && (nums/10 == 4) || (nums%10 == 4) ){
        console.log(nums);
    }
}
*/