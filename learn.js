const prompt = require("prompt-sync")();

// for (let i = 0; i < 5; i++) {
//     let pattern = "*"
//     for (let j = 1; j <= i; j++) {
//         pattern = pattern + " *"
//     }
//     console.log(pattern);
// }


// function sum (a){
// if(a%2==0){
//     console.log(a,"this is even number");
// }
// else{
//     console.log(a,"this is odd number");
// }
// }
// sum(24);


// let c=0
// function prime(a){
//     for(let i=1; i<=a; i++){
//         if(a%i == 0){
//             c=c+1
//         }
//     }
//     if(c==2){
//         console.log(a,"it is prime number");
//     }
//     else{
//         console.log(a,"it is not a prime number");
//     }
// }
// let a= Number(prompt("enter the number:- "))
// prime(a);




// function pallindrome(a) {
//     let p=a
//     let k = 0
//     let r=0
//     while (a > 0) {
//         k = a % 10
//         r=r*10 +k
//         a=Math.floor(a/10)
//     }
//     if(r==p){
//         console.log("its is a pallindrome ");
//     }
//     else {
//         console.log("its is not a pallindrome ");
//     }
// }
// let a =Number(prompt("Enter the number "))
// pallindrome(a)


// let first ="kaustubh"
// let last ="kumar"

// let full =`${first} ${last}`
// console.log(full);


// let num =Number(prompt("Enter the number :- "))
// for(let i=1; i<=10; i++){
// console.log(`num * ${i} = ${i*num}`);
// }

// for(let i=1; i<=10; i++){
//     console.log(num*i);
// }

// let k=null
// console.log(typeof(k));

// let  calculator = (a, b, task)=> {
//     if (task == "+") {
//         console.log(a + b);
//     }
//     else if (task == "-") {
//         console.log(a - b);
//     }
//     else if (task == "*") {
//         console.log(a * b);
//     }
//     else if (task == "/") {
//         console.log(a / b);
//     }
// }
// let a = Number(prompt("Enter the number :- "))
// let b = Number(prompt("Enter the number :- "))
// let task = prompt("Enter the task:- ")
// calculator(a, b, task);


// function reversestr(name) {
//     for (let i = name.length - 1; i >= 0; i--) {
//         console.log(name[i]);
//     }
// }
// let name = prompt("Enter the number :- ")
// reversestr(name)


// let num =[23,46,78,97,64]
// for (const item of num) {
//     if(item%2==0){
//         console.log("item is even");
//     }
//     else{
//         console.log("odd");
//     }
// }

// let final
// let num =[86,89,76,79,5,59]
// for(i=0; i<num.length; i++){
// final= num[i]*2
// console.log(final);
// }

// let num=[34,23,56,23,22,67,87]
// num.forEach((i) => {
//     console.log(i*2);let name ="kasutubh"

// })

// console.log(~10+1);
// let arr=[32,42,34,23]
// console.log(arr.includes(89));


// let fruits = [3,34,54,23,29,4]
// console.log(fruits.slice(2,5));


// let str ="kaustubh"
// console.log(str.length);

// function introduction(username,profesion,age){
//     console.log("Hi");
//     console.log(`my name is ${username}`);
//     console.log(`${username} is a ${profesion}`);
//     console.log(`${username} age is ${age}`);
// }
// introduction("kaustubh","Web Developer",18)
// introduction("amit","software engineer ", 62)

// function sumoftwo(){
//     console.log(5+6);
//     return 5+6;
//     }
//     console.log(sumoftwo());

// let a = Number(prompt("Enter the first number:"));
// let b = Number(prompt("Enter the second number:"));
// let c = Number(prompt("Enter the third number:"));

// if (a >= b && a >= c) {
//     if (b >= c) {
//         console.log(a, b, c);
//     } else {
//         console.log(a, c, b);
//     }
// } else if (b >= a && b >= c) {
//     if (a >= c) {
//         console.log(b, a, c);
//     } else {
//         console.log(b, c, a);
//     }
// } else {
//     if (a >= b) {
//         console.log(c, a, b);
//     } else {
//         console.log(c, b, a);
//     }
// }

// function myname(){
//     return "my name is kaustubh"
// }
// let nameinfo = myname()
// console.log(nameinfo.toUpperCase());

// function messege (course){
//     return `i am ${course}`
// }
// console.log(messege("webdeveloper"));

// function sum (a,b){
//     return a+b
// }
// console.log(sum(10,25));


// function sumofall(){
//     let sum=0
//     for(i=0; i<arguments.length ; i++){
//         sum=sum+arguments[i]
//     }
//     return sum
// }
// console.log(sumofall(2,3,4,5,2,4,5,7));



// arrow function

// let squre = (x) => x*x;
// console.log(squre(10));



// anonyous function

// let squre = function(x){
//     return x*x;
// }
// console.log(squre(20));



// function expresion

// let sum =function (x,y){
//     return x+y
// }
// let total = sum
// console.log(total(7,5));


// const car = {
//     company:"Honda",
//     model:2023,
//     manufacturer: ["L&T","NHPC ", "NBCC"]
// }
// console.log(car.manufacturer[2]);


// let number =2;
// switch (number) {
//     case 1: console.log("hello");
//         break;

//     default:console.log("namste");
//         break;
// }


// let age = Number(prompt("Enter the age"))
// switch (true) {
//     case (age >= 18): console.log("adult");
//         break;
//     default: console.log("mineer");
//         break;
// }


// function sum (num1,num2){
//     return num1 + num2;
// }
// console.log(sum(12,23));

// debugger
// function sum (num1,num2){num1=12,num2=23
//     return  num1 +num2
// }
// console.log(sum());

// let n=Number(prompt("Enter the number")) 
// for (i=3; i<=n; i=i+2){
// console.log(i);
// }

// sayhi()

// var sayhi = function(){
// console.log("hello");
// }

// sayhi()

// let n= Number(prompt("Enter the number"))
// let i=1;
// do{
//     if(i%2==0){
//         console.log(i,"it is even number");
//     }i++
// }while(i<n)

// let Math = {
//     substract: function(a,b){
//         return a-b;
//     }
// }
// console.log(Math.substract(56,21));

// let hello = {
//     sqr: function (a){
//         return a*a
//     },
//     substract: function (a,b){
//         return a-b;
//     }

// }
// console.log(hello.sqr(6));
// console.log(hello.substract(45,16)
// );



// function expresion


// let num = function(a){
//     return a*a
// }
// console.log(num(8));


// function arrow

// let num = (a) => {
//     return a*a
// }
// console.log(num);


// let random = () => {
//     Math.floor(Math.random(Math.random*10)*10)
// }
// console.log(random());


// for(let i=1; i<10; i++){
//     let k = Math.floor(Math.random()*100)
//     console.log(k)
//     }

// let arr = [9, 2, 3, 4, 5, 6, 7, 8, 9]
// let count =0
// for (i = 0; i < arr.length; i++) {
//     let sum = 0;
    // for (j = i + 1; j < arr.length; j++) {
//         sum = arr[i] + arr[j]
//         if (sum === 11) {
//             console.log(arr[i], arr[j]);
//             count++
//             break;
//         }
        
//     }
//     if(count!==0){
//         break;
//     }

// }



// let c=0;
// let arr = [45,45,3,2,56,32,32,32]
// for(i=0; i<arr.length; i++){
//     if(arr[i]===arr[i+1]) {
//         c++;
//     }
//     else {
//         for (j = i+1; j < arr.length; j++) {
//             if(arr[i]===arr[j]){
//                 console.log(arr[i]);
//                c=c+1
//             }
//         }
//     }
// }
// console.log(c);


// let a=[45,45,3,2,56,32,32,32];
// let newArr = [...new Set(a)]
// console.log(a.length-newArr.length)


//  let arr = [32,54,66,53,21,67]
//  for ( a of arr) {
//     console.log(a);
//  }


// let obj ={
//     name : "kaustubh",
//     age : 89,
//     school :"kcs"
// }
// let abc = Object.keys(obj)
// console.log(abc);


// let n= Number(prompt("Enter the number"))
// let fact =1
// for (let i=1; i<=n; i++){
// fact=fact*i
// }
// console.log(fact);

// let arr =[45,45,85,56,89]
// for(i=0 ; i<arr.length; i++){
//     for(j=i+1; j<arr.length ; j++){
//         if(arr[i]===arr[j]){
//             console.log(arr[i]);
//         }
//     }
// }