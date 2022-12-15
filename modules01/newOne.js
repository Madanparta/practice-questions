'use strict';


const { count } = require('console');
/*

let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let a=parseInt(readLine());
let b=parseInt(readLine());

let sum=a+b;
let difference = a-b;
let product = a*b;

console.log(sum);
console.log(difference);
console.log(product);

*/



//...............................................

let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let comp=parseInt(readLine());
let len=parseInt(readLine());
let input;
let counts=0;

for(let i=1;i<=len;i++){
    input=parseInt(readLine());
    if(input==comp){
        counts++;
    }
}
console.log(counts);