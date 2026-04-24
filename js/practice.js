// const mycheckbox = document.getElementById("mycheckbox");
// const visabtn = document.getElementById("visabtn");
// const mastercard = document.getElementById("mastercard");
// const paypalbtn = document.getElementById("paypalbtn");
// const mysubmit = document.getElementById("mysubmit");

// const subresult = document.getElementById("subresult");
// const paymentresult = document.getElementById("paymentresult");

// mysubmit.onclick = function () {
//     if (mycheckbox.checked) {
//         subresult.textContent = 'you are subscribed thanks';

//     }
//     else {
//         subresult.textContent = 'you are not subscribed ';
//     }
//     if (visabtn.checked) {
//         paymentresult.textContent = 'paid on visa';
//     }



//     else if (mastercard.checked) {
//         paymentresult.textContent = 'paid on mastercard';
//     }



//     else if (paypalbtn.checked) {
//         paymentresult.textContent = 'paid on paypal';
//     }

//     else {
//         paymentresult.textContent = 'please select a payment method';
//     }




// }




// let age = 19;
// let message;

// if(age>18){
//     message = "adult";
// }

// else{
//     message = "minor"
// }

// console.log(message);


// ternary operator


// let age = 12;
// let message = age > 18? 'yor are adult' : 'you are minor ';
// console.log(message);


// let purchase =90;
// let message = purchase > 100 ? "you get 10% discount" : "not eligible for discount";
// console.log(message);



// switch case

// let day = 1;
// switch(day){
//     case 1:
//         console.log("monday");
//         break;  
//     case 2:
//         console.log("tuesday");
//         break; 

//     case 3:
//         console.log("wednesday");
//         break; 


//     case 4:
//         console.log("thursday");
//         break; 

//     case 5:
//         console.log("friday");
//         break; 

//     case 6:
//         console.log("saturday");
//         break; 

//     case 7:
//         console.log("sunday");
//         break; 
//     default:
//         console.log("not a day");
// }

// string methods (like indexing)


// let name="Gowtham";
// console.log(name.charAt(2));       //charAt


// let name= "gowthi";
// console.log(name.indexOf("g"));       // indexOf


// let name = "gowthi   "
// name=name.trim();
// console.log(name);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());



let phonenumber = "955-245-3501";
phonenumber = phonenumber.replaceAll("-", "");
console.log(phonenumber);





