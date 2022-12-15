'use strict';

/*
//1.

let arr01 = [1,2,3,4,5,6,3,22,64,74,2,34,75,78,97];
let arr02 = [56,2,35,4,75,6,33,22,4,74,2,35,35,5];


let len = arr01.length;
let len1 = arr02.length;
console.log(len,len1);
let sum01=0;
let sum02=0;

*/

/*

for(let i=0;i<len;i++){
  sumO1+=arr01[i];
};
for(let i=0;i<len1;i++){
  sum02+=arr02[i];
}

let totalSum = sumO1+sum02;
console.log(totalSum);

*/
/*

//finding anoter way  
if(len == len1){
  for(let i=0;i<len;i++){
    sum01+=arr01[i];
    sum02+=arr02[i];
  };
  console.log(sum02+sum01);
}else{
  for(let i=0;i<len;i++){
    sum01+=arr01[i];
  };
  for(let i=0;i<len1;i++){
    sum02+=arr02[i];
  }
  console.log(sum02+sum01);
}

*/

//..................................................................

//2.Using a for loop print all even numbers up to and including n. Don’t include 0.

/*

let nums = 22; // don't include 0;

let store=[];
for(let i=1;i<=nums;i++){
  if(i%2==0){
    store.push(i)
  }
}
console.log(store);

*/

//..................................................................

//3.

/*

let arr = [49,'what',9,true,"cann't",false,'be',3,true];
let len = arr.length; //finding length;

let store = []
for(let i=len-1;i>=0;i--){
  store.push(arr[i])
}
console.log(store);

//onther way finding 
let store = arr.reverse();
console.log(store);

*/

//..................................................................

//4.
// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

/*
let a = [4,6,7];
let b = [8,1,9];

let len = a.length;
let store=[]

for(let i=0;i<len;i++){
  store.push(a[i]+b[i])
}
console.log(store);

*/

//..................................................................

//5.
//Given a string change the every second letter to an uppercase ‘Z’. Assume
//there are no space.

/*

let str = 'javascript';

str.split('')//spliting every character by character..
let len = str.length;

let store = []
for(let i=0; i<len;i++){
  if(i%2!==0){  //index number start by 0 so i start with 1, 1 is second ..
    let uper = str[i].toUpperCase()
    store.push(uper)
    ;
  }else{
    store.push(str[i])
  }
}
console.log(store);

*/

//..................................................................

//6

//Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
//(if either big letter or small letter)
/*

let str = "don't know Why? YY y";

let st = str.split('')
let checking;

for(let i=0; i<st.length;i++){
  if(st[i].toLowerCase() == 'y'){
    checking = 'Yes'
  }
}
console.log(checking);

*/

//..................................................................

//7

//Given a number n Calculate the factorial of the number
//factorial means 5=5*4*3*2*1; like

/*

let nums = 4;

let fact = 1;

for(let i=1; i<=nums;i++){ //factorial numbers always start with 1;
  fact*=i;
}
console.log(fact);

*/

//..................................................................

//8
//Write a program that will allow someone to guess a four digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.

/*
//creating read file.
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readFile(){
  idx++;
  return data[idx-1].trim();
}
//..................................
let pin = 5675;

let attempt = 6;

for(let i=1;i<=attempt;i++){
  let guess = parseInt(readFile());
  console.log("please make your guess,");
  if(i==4){
    console.log("The coorect pin is");
    console.log(pin);
    break;
  }else if(pin !== guess){
      console.log(guess);
      console.log("Sorry that was wrong.!");
  }else{
    console.log("That was correct..");
    break;
  }
}
// for(let i=1;i<=attempt;i++){
//   let guess = parseInt(readFile());
//   console.log(guess);
// }

*/

//..................................................................

//9
// Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
// Palindrome: a word, phrase, or sequence that reads the same backward as

/*

//creating read file.
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readFile(){
  idx++;
  return data[idx-1].trim();
}
//..................................
let input=parseInt(readFile());
let sum = 0;
for(let i=1;i<=input;i++){
  sum+=i
}
console.log(sum);
*/

//..................................................................

//10.

// Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
// Palindrome: a word, phrase, or sequence that reads the same backward as
// forward, e.g., madam or nurses run.

//creating read file.
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readFile(){
  idx++;
  return data[idx-1].trim();
}
//..................................

/*

let input = readFile();
let len = input.length;
let palindrome = true;
let i=0;
for(;i<len/2;){
  if(input[i] !== input[len-1-i]){
    palindrome=false;
  }
  i++;
}

if(palindrome){
  console.log("palindrome");
}else{
  console.log("is not palindrome");
}

*/

let input = readFile();
let duplicat = input.split('');
let reverseed = duplicat.reverse();
let joined = reverseed.join('');

if(input == joined){
  console.log('palindrom');
}else{
  console.log('Not a palindrom');
}