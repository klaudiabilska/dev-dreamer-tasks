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

for (let marcin4 = 10; marcin4 >= 5; marcin4--) {
    console.log(marcin4);
};

console.log("zadanie 2")

for (let marcin5 = 5; marcin5 < 30; marcin5++) {
    console.log(marcin5);
}

console.log("zadanie 3")

for (let marcin6 = 20; marcin6 > 0; marcin6-=2) {
    console.log(marcin6);
}

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

// Arrays

let countries = ["poland", "germany", "japan"];
countries[3] = "italy";
console.log(countries)

let kolory = ["pink", "grey", "black", ["white", "brown", "red"]];
console.log(kolory[3][2])

// Array Methods

let fruits = ["apple", "orange", "banana"];

fruits.unshift("cherry", "pineapple")
fruits.push("plum", "grapes")
fruits.splice(3, 1, "lemon")
fruits.sort()
console.log(fruits)

//Array Iterator Methods

let array1 = ["apple", "banana", "orange"]
array1.forEach(
    function(value, index, array) {
        console.log(value, index);
    }
);

array1.map(
    function(value) {
        console.log(value.toUpperCase());
    }
);

let moreThanThree = array1.some(
    function(value) {
        return value.length > 3;
    }
);

console.log(moreThanThree);

//marcin forEach

let printAllValues = [1, 2, 3];
printAllValues.forEach(
    function(value, index, array) {
        console.log(`Na pozycji ${index} znajduje się ${value}`);
    }
)

// Sets and Weak Sets

let newSet = new Set();
newSet.add("Scorpion")
newSet.add("Sub-Zero")
newSet.add("Reptile")
newSet.add("Liu Kang")

for (element of newSet) {
    console.log(element);
}

// Maps and Weak Maps

// Marcin obiekt jako wlasciwiosc

let user0 = {
    name: "Kuba",
    surname: "Wedrowicz",
    address: {
        country: "Polska",
        city: "Stary Majdan",
        postal: "22-120",
        street: null
    }
}

let book = {
    relaseYear: 2019,
    title: "Karpie bijem",
}

// marcin json

const jsonTest = 
{
    "name": "Air Max 720",
    "marka": "Nike",
    "opis": "poduszka gazowa",
    "size": "45",
    "obraz": "https://...",
    "price": {
    "cena": "649.99",
    "waluta": "PLM" 
    }
     
}

//marcin konto bankowe

function makeBankAccount() {
    return {
        balance: 0,
        deposit: function(amount) {
            this.balance += amount;
            return this.balance;
        },
        withraw: function(amount) {
            if (amount > this.balance) {
                amount = this.balance;
            } 
            this.balance -= amount;
            return amount;
        },
        currentBalance: function() {
            return this.balance
        } 
    }

}

const account = makeBankAccount();
console.log(account.currentBalance());

const balance = account.deposit(1000);
console.log(balance);
console.log(account.currentBalance());

const withrawed1 = account.withraw(300);
console.log(withrawed1);
console.log(account.currentBalance());

const withrawed2 = account.withraw(1500);
console.log(withrawed2);
console.log(account.currentBalance());

///
