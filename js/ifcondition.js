// let age =19;
// let haslicence=true;

// if(age>=18){
//     console.log("you are old enough to drive");
//     if(haslicence){
//         console.log("you have licence");
//     }
//     else{
//         console.log("you dont have licence");
//     }
    
// }
// else{
//     console.log("grow up kid");

// }


// if(age>=18){
//     console.log("you are allowed to enter site");


// }
// else if(age<=0){
//     console.log("are you dumb age cant be belw zero or zero");
// }
// else{
//     console.log("not allowed kid");

// }}


const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultelement = document.getElementById("resultelement");

let age;


mysubmit.onclick = function (){

age = mytext.value;
age=Number(age);

if(age>=18){
    resultelement.textContent = 'you are allowed';
}

else{
    resultelement.textContent = 'not allowed';
}}