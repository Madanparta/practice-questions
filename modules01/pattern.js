'use strict';

// 1. Square Star Pattern in Javascript
// *****
// *****
// *****
// *****
// *****

/*
//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=n;j++){
        str+="*"
    }
    console.log(str);
}

*/

//...................................................................


// 2. Hollow Square Pattern
// *****
// *   *
// *   *
// *   *
// *****

/*
//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=n;j++){
        if(i==1|| j==1||i==n||j==n){
            str+="*";
        }else{
            str+=" ";
        }
    }
    console.log(str);
}

*/

//......................................................................

/*
// 3. Right Triangle Pattern in Javascript
//     *
//    **
//   ***
//  ****
// *****

//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=n-i;j++){
        str+=" ";
    }
    for(let k=1;k<=i;k++){
        str+="*"
    }
    console.log(str);
}

*/

//......................................................................

/*
// 4. Left Triangle Pattern in Javascript
// *
// **
// ***
// ****
// *****

//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=i;j++){
        str+="*";
    }
    console.log(str);
}

*/

//......................................................................

/*
// 5. Downward Triangle Star Pattern
// *****
// ****
// ***
// **
// *

//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=n;j>=i;j--){
        str+="*";
    }
    console.log(str);
}
*/

//......................................................................

// 6. Hollow Triangle Star Pattern
// *
// **
// * *
// *  *
// *   *
// ******

/*
//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=i;j++){
        if(j==1||i==n||j==i){
            str+="*";
        }else{
            str+=" ";
        }
    }
    console.log(str);
}

*/
//......................................................................

// 7. Javascript Pyramid Pattern
//     *
//    ***
//   *****
//  *******
// *********

/*
//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=n-i;j++){
        str+=" ";
    }
    for(let k=1;k<=i;k++){
        str+="*";
    }
    for(let l=2;l<=i;l++){
        str+="*";
    }
    console.log(str);
}
*/

//......................................................................

// 8. Reversed Pyramid Star Pattern
// *********
//  *******
//   *****
//    ***
//     *

/*
//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=i;j++){
        str+=" "
    }
    for(let k=n;k>=i;k--){
        str+="*";
    }
    for(let l=1;l<=n-i;l++){
        str+="*";
    }
    console.log(str);
}

*/
//......................................................................

// 9. Hollow Pyramid Star Pattern
//     *
//    * *
//   *   *
//  *     *
// *********

/*
//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=n-i;j++){
        str+=" ";
    }
    for(let k=1;k<=i;k++){
        if(i==n||k==1){
            str+="*";
        }else{
            str+=" ";
        }
    }
    for(let l=2;l<=i;l++){
        if(i==n||l==i){
            str+="*";
        }else{
            str+=" ";
        }
    }
    console.log(str);
}
*/

//......................................................................

// 10. Diamond Pattern in Javascript
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

/*
//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;


for(let i=1;i<n;i++){
    str="";
    for(let j=1;j<=n-i;j++){
        str+=" ";
    }
    for(let k=1;k<=i;k++){
        str+="*";
    }
    for(let l=2;l<=i;l++){
        str+="*";
    }
    console.log(str);
}
for(let i=1;i<=n;i++){
    str="";
    for(let j=i;j>1;j--){
        str+=" ";
    }
    for(let k=n;k>=i;k--){
        str+="*";
    }
    for(let l=1;l<=n-i;l++){
        str+="*";
    }
    console.log(str);
}

*/

//......................................................................

// 11. Hollow Diamond Pattern
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

/*
//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;


for(let i=1;i<n;i++){
    str="";
    for(let j=1;j<=n-i;j++){
        str+=" ";
    }
    for(let k=1;k<=i;k++){
       if(k==1){
        str+="*";
       }else{
        str+=" ";
       }
    }
    for(let l=2;l<=i;l++){
        if(l==i){
            str+="*";
        }else{
            str+=" ";
        }
    }
    console.log(str);
}
for(let i=1;i<=n;i++){
    str="";
    for(let j=i;j>1;j--){
        str+=" ";
    }
    for(let k=n;k>=i;k--){
        if(k==n){
            str+="*";
        }else{
            str+=" ";
        }
    }
    for(let l=1;l<=n-i;l++){
        if(l==n-i){
            str+="*";
        }else{
            str+=" ";
        }
    }
    console.log(str);
}

*/

//......................................................................

// 12. Hourglass Star Pattern
// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

/*
//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=i;j++){
        str+=" "
    }
    for(let k=i;k<=n;k++){
        str+="*";
    }
    for(let l=1;l<=n-i;l++){
        str+="*";
    }
    console.log(str);
}
for(let i=1;i<=n;i++){
    str="";
    for(let j=i;j<=n;j++){
        str+=" "
    }
    for(let k=1;k<=i;k++){
        str+="*";
    }
    for(let l=2;l<=i;l++){
        str+="*";
    }
    console.log(str);
}

*/

//......................................................................

// 13. Right Pascal Star Pattern
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

/*
//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=i;j++){
        str+="*"
    }
    
    console.log(str);
}
for(let i=1;i<=n;i++){
    str="";
    for(let j=n;j>i;j--){
        str+="*"
    }
    
    console.log(str);
}

*/

//......................................................................

// 14. Left Pascal Star Pattern
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

/*
//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=n-i;j++){
        str+=" "
    }
    for(let k=1;k<=i;k++){
        str+="*";
    }
    console.log(str);
}
for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=i;j++){
        str+=" "
    }
    for(let k=1;k<=n-i;k++){
        str+="*";
    }
    
    console.log(str);
}

*/


//......................................................................

// 15. Heart Star Pattern In JavaScript
//  ***   ***
// ***** *****
// ***********
//  *********
//   *******
//    *****
//     ***
//      *


//read file..
let fs = require('fs');
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data=data.split('\n');

function readLine(){
    idx++;
    return data[idx-1].trim();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let n=parseInt(readLine());
let str;

for(let i=2;i<=n;i++){
    str="";
    for(let j=1;j<=n-i;j++){
        str+=" ";
    }
    for(let k=1;k<=i;k++){
        str+="* ";
    }
    for(let j=1;j<=n-i;j++){
        str+="  ";
    }
    for(let k=1;k<=i;k++){
        str+=" *";
    }
    console.log(str);
}
for(let i=1;i<=n;i++){
    str="";
    for(let j=1;j<=i;j++){
        str+="  "
    }
    for(let k=i;k<=n;k++){
        str+="* ";
    }
    for(let l=1;l<=n-i;l++){
        str+="* ";
    }
    console.log(str);
}