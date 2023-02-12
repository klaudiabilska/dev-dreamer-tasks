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

let message = '';
let output = message = 1 > 10 ? "Condition is true" : "Contition is false";
console.log(output)

let time = '12:00';
let output2 = time < '12:00' ? 'Good morning' : 'Good Evening';
console.log(output2)

// For Loop

let colours = ["pink", "grey", "yellow", "blue", "red"];

for (let taskloop = 0; taskloop < colours.length; taskloop++) {
    console.log(`${colours[taskloop]} is my fav color!`);
};

///marcin ksiazka zadania z for loop


// While/do while loop

let x = 0;
while (x <= 100) {
    console.log(`The speed of the car is ${x} MPH`);
    x += 10;
};

let taska = 1;
let taskb = 10;

do {
 console.log(taska);
 taska++;
} while (taska <= taskb);

///marcin ksiazka zadania z while loop
let marcin1 = 0;
while (marcin1 <= 100) {
    console.log(marcin1)
    marcin1+=2
}

let marcin2 = 0;
while (marcin2 < 100) {
    console.log(marcin2)
    marcin2+=7
}

let marcin3 = 13;
while (marcin3 < 1000) {
    console.log(marcin3)
    marcin3+=13
}

