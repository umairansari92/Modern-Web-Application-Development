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



