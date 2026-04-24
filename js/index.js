// console.log("hello");
// console.log("i like burger");
// window.alert("this is an alert!");

// this is an comment line 

/* 
this is 
a multi line
comment
*/


// document.getElementById("myh1").textContent = "hello";
// document.getElementById("myp").textContent = "i like burger";

// let age = 25;
// let price = 10.99;
// let gpa = 9.9;
// let name = "Gowtham";


// let favouritefood = "burger";


// console.log(`you are ${age} years old`);
// console.log(`the price is ${price}`);
// console.log(`the gpa is ${gpa}`);
// console.log(`your name is ${name}`)

// console.log(typeof name);

// console.log(`your favourite food : ${favouritefood}`);


// let online = false;
// let carforsale = true;
// console.log(`he is online :${online}`);
// console.log(`is this car for sale: ${carforsale}`);


// let name = "Gowtham";
// let age = 23;
// let student = true;

// document.getElementById("p1").textContent = `your name is :${name}`;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = student;


// let students = 30;
// //students =  students % 2;      // + - * / % **
// // students += 2;
// // students -= 2;
// // students *= 2;
// // students /= 2;
// // students **= 2;
// // students %= 2;
// students++;
// students--;


// console.log(students);

// let result = 1+2+5;
// console.log(result);


// how to create user input using window prompt

// let username;
// username = window.prompt("whats your name");

// console.log(username);

// using html itself user input
// document.getElementById("mysubmit").onclick= function(){
//     username = document.getElementById("mytext").value;
//     console.log(username);
// }


// let age = window.prompt("how old are you");
// age = Number(age);
// age+=1;
// console.log(age);

    // let x= 0;
    // let y ="";

    // x=Number(x);
    // y=String(y);

    // console.log(x, typeof x);
    // console.log(y, typeof y);
    
    // constant

    const pi = 3.14;
    let radius;
    let circumference;
    // radius = window.prompt("enter the radius of circle:");
    

   

    document.getElementById("mysubmit").onclick = function(){
       radius = document.getElementById("mytext").value;
       radius = Number(radius);
       circumference = 2*pi*radius;
       document.getElementById("myh3").textContent = circumference + "cm";

    }

