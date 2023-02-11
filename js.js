// Date object

let currentDate = new Date();
console.log(currentDate);

let hour = currentDate.getHours();
let min = currentDate.getMinutes();
console.log(hour + ":" + min);


console.log(currentDate.toLocaleString('deflaut', {weekday: 'long'}));

/// Math object

const num1 = Math.random().toFixed(1) * 10 
const num2 = Math.random().toFixed(1) * 10 
const num3 = Math.random().toFixed(1) * 10 

console.log(num1);
console.log(num2);
console.log(num3);

const max = Math.max(num1, num2, num3)
console.log(max);

// Comparison Operators

const a = 10
const b = 15

console.log(
    a > b
);

console.log(
    a == "10"
);

console.log(
    a === "10"
);

// Nullish Coalescing Operator

let course;
console.log(course ?? "Please select a course")

let courseProfress = 0;
console.log(courseProfress ?? "Start the cours")

/* Control flow - By default our JavaScript code is executed from top to bottom, line by line however we can change this with control flow. 
Control flow allows our program to make decisions about what code is executed and when */

// If else Statements

let num = 10 + 2;
if (num > 2 && num < 20) {
    console.log("true");
} else {
    console.log("false");
} // true

let user = 'employee'

if (user === "guest") {
    console.log('Login denined');
} else if (user === "employee") {
    console.log('Succesfully Logged in')
}

let myName = 'Klaudia';

/*if (myName.length > 5) {
    alert("More than 5");
} else if (myName.length === 5) {
    alert("Exactly 5 letters");
} else {
    alert("Less then 5 letters");
} */

// Switch Statement 

let favFood = 'sushi';

switch(favFood) {
    case 'pizza':
        console.log(`That's right! ${favFood} is my favourite!`);
        break;
        case 'pizza':
        console.log(`That's right! ${favFood} is my favourite!`);
        break;
        case 'food3':
        console.log(`That's right! ${favFood} is my favourite!`);
        break;
        case 'food2':
        console.log(`That's right! ${favFood} is my favourite!`);
        break;
        case 'sushi':
        console.log(`That's right! ${favFood} is my favourite!`);
        break;
        default:
            console.log("Fav food not found... I'm hungry!");
}

// The Ternary (Conditional) Operator

