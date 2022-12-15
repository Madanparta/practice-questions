'use strict';


//1. Vowel or a Consonant?
// Take a character as an input and print whether it is an vowel or a consonant. 
// Sample input and output are shown as below:


/*
//read file
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let letter=readLine();

if(letter.toUpperCase() == 'A' || letter.toUpperCase() == 'E' || letter.toUpperCase() == 'I' || letter.toUpperCase() == 'O' || letter.toUpperCase() == 'U'){
    console.log("vowel");
}else{
    console.log("consonant");
}

*/

//.......................................................................

//2. Word representation for a number
// Take a number between 0 to 9 as input and print the word representation for that number.

/*
//read file
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());

let letter = ['One','Two','Three','Foure','Five','Six','Seven','Eigth','Nine','Ten'];

if(n==1){
    console.log(letter[0]);
}else if(n==2){
    console.log(letter[1]);
}else if(n==3){
    console.log(letter[2]);
}else if(n==4){
    console.log(letter[3]);
}else if(n==5){
    console.log(letter[4]);
}else if(n==6){
    console.log(letter[5]);
}else if(n==7){
    console.log(letter[6]);
}else if(n==8){
    console.log(letter[7]);
}else if(n==9){
    console.log(letter[8]);
}else if(n==10){
    console.log(letter[9]);
}else{
    console.log("please enter 1 to 10 numbers only..");
}

*/

//.......................................................................

//3 Take two numbers as input from the user and print the largest number out of those two numbers.

/*
//read file
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let first = parseInt(readLine());
let sec = parseInt(readLine());

if(first > sec){
    console.log(first+" Greatest Number");
}else{
    console.log(sec+" Greatest Number");
}

*/

//.......................................................................


//4. Find largest number from given 3 numbers
// Take three numbers as input from the user and print the largest number out of those three numbers

/*
//read file
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let first = parseInt(readLine());
let sec = parseInt(readLine());
let third = parseInt(readLine());

if(first>sec && first>third){
    console.log(first+" Greatest Number");
}else if(sec>first && sec>third){
    console.log(sec+" Greatest Number");
}else{
    console.log(third+" Greatest Number");
}
*/

//.......................................................................

//5. Leap year or not ?
// Take a year as input and tell whether or not it's a leap year.
// Print yes If it's a leap year and print no if it's not a leap year.

/*
//read file
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let year = parseInt(readLine());

if(year%4==0){
    if(year%100!==0){
        console.log(year+" it's a leap year ");
    }else{
        if(year%400==0){
            console.log(year+" it's a leap year ");
        }else{
            console.log("it's not a leap year.");
        }
    }
}else{
    console.log("it's not a leap year.");
}

*/

//or

// if(year%4==0 && year%100!==0 || year%400==0){
//     console.log(year+" it's a leap year ");
// }else{
//     console.log("it's not a leap year.");
// }


//.......................................................................

//Take a number as input and tell its positive or negative

/*
//read file
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let num=parseInt(readLine());

if(num>0){
    console.log("Positive Number");
}else{
    console.log("Negitive Number");
}

*/

//.......................................................................

//Take a number as an input and print the factorial of that number.

/*

//read file
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let sum=1;
for(let i=1;i<=n;i++){
    sum*=i
}
console.log(sum);

*/

//.......................................................................

//Take a number as input and print the square root of that number.

/*

//read file
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let num = parseInt(readLine());

console.log(num/4);

*/

//.......................................................................

// Take a number as inout and print whether or not it's a prime.
// Note: Print yes if it's a prime and print no if not a prime.

/*
//read file
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let num=parseInt(readLine());

// for(var i=2;i<=num;i++){
//     for(var j=2;j<i;j++){
//         if(i%j==0){
//             break;
//         }
//     }
//     if(i==j){
//         console.log(i);
//     }
// }
let prime=true;

if(num<2){
    console.log("not a prime number");
}else{
    for(var i=2;i<num;i++){
        if(num%i==0){
           prime=false;
        }
    }
    // console.log(i+" prime number");
    if(prime){
        console.log("yes");
    }else{
        console.log("no");
    }
}

*/

//.......................................................................

//Take a number (N) as input and print the first N fibonacci numbers separated by , (comma and a space)

/*

//read file
let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let nums=parseInt(readLine());
let a=0;
let b=1;
let next;

for(let i=1;i<=nums;i++){
    console.log(a);
    next=a+b;
    a=b;
    b=next;
}

*/

//.......................................................................


