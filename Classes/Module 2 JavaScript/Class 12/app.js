var totalMarks = 0;
var subjects = ["Math", "Science", "English"];
for (var i = 0; i < subjects.length; i++) {
    var marks = +prompt("Enter marks for " + subjects[i] + ":");
    totalMarks += marks; // Add marks to totalMarks
}
console.log("Total Marks:", totalMarks);
