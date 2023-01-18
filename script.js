// DAY - 05 - TASK

//  anonymous function & IIFE

// a) Print odd numbers in an array

//Global declarations

let a = [1,2,3,4,5,6,7,8,9,10];  //for odd numbers array
let b = "hi guvi we love learning more from you";
let a1 = [1,2,3,4,5,6,7,55,66,77,88,99,11,13];   // for prime numbers array
let word = "civic body is capac of doing ceec inni worow";  // to check for palindrome in array
let arr = [1,2,3,4,5,4,3,2,1,"abc","bb","abc","bh","abc","bb","abc"]; // to remove duplicate characters from array



(function (x) {  
 
 let t =" ";
 for(let i of x)
 if(i&1){
 t = t + i + " ";}
 
console.log("1 a) odd numbers in the array",a,"is : ",t.trim());
 })(a);  
 
 // b) Convert all the strings to title caps in a string array


let b1 = b.split(" ");

(function (x)  {
   
for(let i = 0; i<x.length; i++){
    x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1);
      }
console.log("1 b) To convert all titles to caps in given sentence is :",...x);  
})(b1);

// c) Sum of all numbers in an array


(function (x) {  
 
let sum =0;
 for(let i of x)
 sum +=i;
 
console.log("1 c) Sum of all numbers in an array:",a,"is",sum);
 })(a);
 
 //d) Return all the prime numbers in an array
 
 
 
 (function (x)  {  
 
let primearray=[];
 for(let i of x)
 {
     let check =1;
 for(let j=2;j<i;j++)
 {
 if((i%j == 0 && i!=2))
 { check =9;
 break;
     
 }}
    if(check == 1 && i!=1) {
    primearray.push(i);
}}
 
 console.log("1 d) Prime numbers in the array",a1,"is: ",...primearray);

 })(a1);
 
// e) Return all the palindromes in an array


let w1 = word.split(" ");
(function (x) {  
let palindromearray = [];  
for(let i of x)
{
    if(i.split("").join("") == i.split("").reverse().join(""))
    {
        palindromearray.push(i);
    }
}

console.log("1 e) The palindromes in the array",w1," are :",...palindromearray);

 })(w1);



// f ) Return median of two sorted arrays of the same size

let arr1 =[3,2,1];
let arr2 =[4,5,6];

const median = (function (a,b){
    let c = [...a, ...b].sort((a, b) => a - b);
   
    const mid = Math.floor(c.length / 2 );
   
 
    if (c.length % 2) return c[mid];
   
   
    return (c[mid] + c[mid - 1]) / 2;
   
})(arr1,arr2);


console.log("1 f) The Median is: ",median);


// g) Remove duplicates from an array



let final = (function (a)
{
 console.log("1 g) Removed duplicates from array :",arr,"is :", [...new Set(a)]);  
})(arr);


// h) Rotate an array by k times

let k = 5;

(function (arr,k) {
   
for(let i=0;i<k;i++)
{
    let temp = arr[0];
    arr.shift();
    arr.push(temp);
}
console.log(`1 h) ${k} Times Rotated Array is :`,arr);
})(a,k);


// programs in arrow functions

// a)  Print odd numbers in an array

let arr1a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


let oddnum = arr1a.filter((n) => n % 2 == 1);

console.log("3 a)odd numbers in an array ",oddnum);



//b)  Convert all the strings to title caps in a string array

//let b = "let me convert all titles to caps in given sentence";
//let b1 = b.split(" ");

let z = (x) =>  {
   
for(let i = 0; i<x.length; i++){
    x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1);
      }
return x;  
};

console.log("3 b) convert all titles to caps in given sentence",...z(b1));

// c) Sum of all numbers in an array

let sum = 0;

a.forEach(x => sum += x);

console.log("3 c) Sum of all numbers in an array:",sum);


//d) Return all the prime numbers in an array
 
 
let prime = (x) =>  {  
 
let primearray=[];
 for(let i of x)
 {
     let check =1;
 for(let j=2;j<i;j++)
 {
 if((i%j == 0 && i!=2))
 { check =9;
 break;
     
 }}
    if(check == 1 && i!=1) {
    primearray.push(i);
}}
 
return (primearray);
};  

console.log("3 d) Prime numbers in the array:", ...prime(a1));


// e) Return all the palindromes in an array

//let word = "civic body is capac of doing ceec inni worow";
//let w1 = word.split(" ");

let pali = (x) => {  
let palindromearray = [];  
for(let i of x)
{
    if(i.split("").join("") == i.split("").reverse().join(""))
    {
        palindromearray.push(i);
    }
}
return palindromearray;

 };
 
 console.log("3 e) The palindromes in the array are:",...pali(w1));



