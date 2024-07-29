let prompt = require("prompt-sync")();
// let k= document.getElementById("header");
// console.dir(k);

// let main =document.getElementsByClassName("main")
// console.dir(main)


// let user = {
//     age: 18,
//     cast: "Brahman",
//     name:["kautubh","pandey"]
// }
// Object.seal(user)
// // user.ag =12
// console.log(user);



// let n = Number(prompt("enter the number "))
// let k= Number(prompt("enter the number"))
// for(i=1; i<=n; i++){
//     let c=0
//     for(j=1; j<=k; j++){
//         if(n%j==0){
//             c=c+1
//             console.log(c);
//         }
//     }
// }



// let userinfo = new Object()
// userinfo.name ="kaustubh",
// userinfo.age = 78
// userinfo.company = "tcs"
// console.log(userinfo);


// let newuserinfo = {
//     email: "kaustubhpandey81788@gmail.com",
//     fullname: {
//         username: {
//             firstname: "kaustubh",
//             lastname: "pandey"
//         }
//     }
// }
// console.log(newuserinfo .fullname.username.firstname);


let first = {name :"kaustubh", age: 18}
let second = {cast:"brahman", village:"pachpaika"}
let third = Object.assign(first,second)
console.log(third);