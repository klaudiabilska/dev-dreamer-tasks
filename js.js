// Date object

let currentDate = new Date();
console.log(currentDate)

let hour = currentDate.getHours();
let min = currentDate.getMinutes();
console.log(hour + ":" + min)


console.log(currentDate.toLocaleString('deflaut', {weekday: 'long'}))

/// Math object

const num1 = Math.random().toFixed(1) * 10 
const num2 = Math.random().toFixed(1) * 10 
const num3 = Math.random().toFixed(1) * 10 

console.log(num1)
console.log(num2)
console.log(num3)

const max = Math.max(num1, num2, num3)
console.log(max)

// Comparison Operators

const a = 10
const b = 15

console.log(
    a > b
)

console.log(
    a == "10"
)

console.log(
    a === "10"
)
