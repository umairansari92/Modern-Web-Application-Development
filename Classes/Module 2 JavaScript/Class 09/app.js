let students = [
    { name: "Ali", marks: [85, 78, 92, 88, 76] },
    { name: "Sara", marks: [65, 70, 60, 72, 68] },
    { name: "Ahmed", marks: [90, 88, 95, 93, 91] },
    // Add more students here...
];

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let totalMarks = student.marks.reduce((a, b) => a + b, 0);
    document.write(`${student.name.toUpperCase()}: Total Marks = ${totalMarks}<br>`);
}



// console.log("hello class 09")

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99, 100];
// var copy = arr.slice(2 , 7)
// var copy = arr.slice(3)
// var copy = arr.slice(0, -2);
// var copy = arr.slice(-2);
// console.log(arr);
// console.log(copy);

// Splice - add | remove
// var cities = ["lahore", "karachi", "islamabad"];
// cities.splice(1, 1); //remove karachi
// cities.splice(2, 1); //remove islamabad
// cities.splice(1, 0, "Multan");
// cities.splice(1, 2, "multan" , "abcd" , "132" , "asdkasjd");
// console.log(cities);

// loops
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")

// for( variable ; condition ; increment/decrement       ){

// }

for (var a = 1; a <= 5; a++) {
    console.log("hello world" , a);
  }