'use strict';

const { count } = require('console');
//1
//1. Write a JavaScript program that accept two integers and display the larger.

/*
//read file;
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data = data.split('\n');
function readFile(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let intigers=parseInt(readFile());
let inputs;
let count=0;

while(count < intigers){
    inputs=readFile().split(' ');
    let x = parseInt(inputs[0]);
    let y = parseInt(inputs[1]);

    if(x>y){
        console.log(x);
    }else{
        console.log(y);
    }
    count++;
};

*/
//...........................................................

//2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. 
// Sample numbers : 3, -7, 2
// Output : The sign is -

/*
//read file;
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data = data.split('\n');
function readFile(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let input=readFile().split(' ');
let i=0;

let store = [];

while(i<input.length){
    // console.log(input[i]);
    if(input[i]>0){
        // console.log(input[i]);
        store.push(input[i]);
    }else{
        let fing = input[i].split('');

        for(let i=0;i<fing.length;i++){
            if(fing[i]>0){
                // console.log(fing[i]);
                store.push(fing[i]);

            }else{
                console.log(fing[i]); //finding extra 
            }
        }
        
    }
    i++;
}
console.log(store);

*/

//...........................................................

//3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

/*
//read file;
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data = data.split('\n');
function readFile(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let input = readFile().split(' ');
let store = [];
let temp;

for(let i=0;i<input.length;i++){
    for(let j=i+1;j<input.length;j++){
        if(parseInt(input[i])>parseInt(input[j])){
            temp = input[i];
            input[i]=input[j];
            input[j]=temp;
        }
    }
    store.push(input[i])
}
console.log(store);

*/

//...........................................................

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

/*
//read file;
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data = data.split('\n');
function readFile(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let input = readFile().split(' ');
let len=input.length;
let big=0;
let count=0;

while(len!==count){
    if(parseInt(input[count])>big){
        big = input[count];
    }
    count++;
}
console.log(count,big);//big number

*/

//...........................................................

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------

/*
//read file;
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data = data.split('\n');
function readFile(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let input=parseInt(readFile());
let count=0;

while(count<=input){
    if(count%2 !== 0){
        console.log(count+" odd Number");
    }else{
        console.log(count+" even number");
    }
    count++;
}

*/

//...........................................................

// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :

// Range	Grade
// <60	     F
// <70	     D
// <80	     C
// <90	     B
// <100    	 A

/*

//read file;
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data = data.split('\n');
function readFile(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let totalStudent = parseInt(readFile());
// console.log(totalStudent);
let studentMarks;
let avrg;
let sum = 0;
let count1=0;

while(count1<totalStudent){
    studentMarks=parseInt(readFile());
    sum+=studentMarks;
    avrg=parseInt(sum/totalStudent);

    count1++;
}
if(avrg<60){
    console.log("F");

}else if(avrg<70){
    console.log("D");

}else if(avrg<80){
    console.log("C");

}else if(avrg<90){
    console.log("B");

}else if(avrg<100){
    console.log("A");
};

*/

//...........................................................

// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". 

/*
//read file;
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data = data.split('\n');
function readFile(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let totalItarating = parseInt(readFile());
let count2=1;

while(count2<=totalItarating){
    if(count2%3==0 && count2%5==0){
        console.log(count2);
        console.log("FizzBuzz");
    }else if(count2%5==0){
        console.log(count2);
        console.log("Buzz");
    }else if(count2%3==0){
        console.log(count2);
        console.log("Fizz");
    }
    count2++;
}

*/

//...........................................................

// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

//read file;
// let fs = require('fs');
// let data = fs.readFileSync(0,'utf-8');
// let idx = 0;
// data = data.split('\n');
// function readFile(){
//     idx++;
//     return data[idx-1].trim();
// }
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>












// 10.
// Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

// *  
// * *  
// * * *  
// * * * *  
// * * * * * 

/*
//read file;
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data = data.split('\n');
function readFile(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readFile());

for(let i=0;i<n;i++){
    let str = "";
    for(let j=0;j<i+1;j++){
        str+="*";
    }
    console.log(str);
}

*/

//>>>>>>>>>>>>>>>>>>>>.........................................................

// 11. 
//Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

//read file;
let fs = require('fs');
const { parse } = require('path');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data = data.split('\n');
function readFile(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let a=parseInt(readFile());
let b=parseInt(readFile());
let c;

while(a!==b){
    if(a>b){
        a=a-b;
    }else{
        b=b-a;
    }
}
c=a;
console.log(c);
