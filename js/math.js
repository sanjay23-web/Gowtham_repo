// let x = 50;
// let y = 2;
// let z = 1;


// z = Math.floor(x);

// z = Math.trunc(x);  //
// z = Math.pow(x,y);
// z=Math.sqrt(x);
// z=Math.log(x)
// z = Math.sin(x);
// z=Math.cos(x);
// z= Math.tan(x);
// z=Math.abs(x);  //absolute means minus to plus number 
// z=Math.sign(x);  //gives the sign of number either negative or positive -1 or 1
// let max = Math.max(x,y,z);  // max of numbers

// let min = Math.min(x,y,z);



// console.log(min);


// random number generator


// const min = 50;
// const max = 100;
// let randomnumber =Math.floor( Math.random() *(min- max)) +min;
// console.log(randomnumber);

const mybutton = document.getElementById("mybtn");
const mylabel = document.getElementById("mylabel");
const min = 1;
const max =6;
let randomnum;
mybutton.onclick = function() {
    randomnum=Math.floor(Math.random() * max)+min;
    mylabel.textContent = randomnum;
}
