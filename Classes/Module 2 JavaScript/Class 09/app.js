/* //  Initialize an array with some elements
let fruits = ["Apple", "Banana", "Cherry", "Date"];

// Add an element to the end of the array
fruits.push("Elderberry");

// Remove the last element from the array
let lastFruit = fruits.pop();

// Add an element to the beginning of the array
fruits.unshift("Fig");

// Remove the first element from the array
let firstFruit = fruits.shift();

// Access an element by index
let secondFruit = fruits[1];

// Iterate over the array
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Find the index of an element
let index = fruits.indexOf("Cherry");

// Remove an element by index
if (index !== -1) {
    fruits.splice(index, 1);
}

// Create a new array with transformed elements
let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});

console.log(fruits);
console.log(upperCaseFruits);

// Use slice to create a new array with selected elements
let slicedFruits = fruits.slice(1, 3);

// Log the original array and the sliced array
console.log("Original array:", fruits);
console.log("Sliced array:", slicedFruits);*/



// Array of 20 students' results
let studentResults = [
    { name: "Student1", marks: 450 },
    { name: "Student2", marks: 440 },
    { name: "Student3", marks: 430 },
    { name: "Student4", marks: 420 },
    { name: "Student5", marks: 410 },
    { name: "Student6", marks: 400 },
    { name: "Student7", marks: 390 },
    { name: "Student8", marks: 380 },
    { name: "Student9", marks: 370 },
    { name: "Student10", marks: 360 },
    { name: "Student11", marks: 350 },
    { name: "Student12", marks: 340 },
    { name: "Student13", marks: 330 },
    { name: "Student14", marks: 320 },
    { name: "Student15", marks: 310 },
    { name: "Student16", marks: 300 },
    { name: "Student17", marks: 290 },
    { name: "Student18", marks: 280 },
    { name: "Student19", marks: 270 },
    { name: "Student20", marks: 260 },
  ];
  
  // Extract top 5 results using slice
  let topStudents = studentResults.slice(0, 5);
  console.log("Top 5 Students:", topStudents);

  
  // List of 40 participants
let participants = Array.from({ length: 40 }, (_, i) => `Person${i + 1}`);

// Assign prizes
let firstPrize = participants.splice(0, 1); // 1st prize winner
let secondPrize = participants.splice(0, 3); // 3 second prize winners
let thirdPrize = participants; // Remaining are 3rd prize winners

console.log("First Prize Winner:", firstPrize);
console.log("Second Prize Winners:", secondPrize);
console.log("Third Prize Winners:", thirdPrize);




let students = ["Ali", "Sara", "Ayesha", "Bilal", "Daniyal"];
let grades = [85, 90, 78, 88, 92];

// Print each student's grade
for (let i = 0; i < students.length; i++) {
  console.log(`${students[i]} scored ${grades[i]}`);
}
