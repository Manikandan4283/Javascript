let numbers = [5, 2, 8, 1];

// Map
let doubled = numbers.map(n => n * 2);

// Filter
let even = numbers.filter(n => n % 2 === 0);

// Find
let found = numbers.find(n => n > 4);

// Sort
let sort =numbers.sort((a, b) => a - b);

// Reverse
// let reverse =numbers.reverse();

console.log(numbers,doubled,even,found,sort)