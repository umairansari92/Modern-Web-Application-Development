var English = +prompt("Enter English's numbers ");
var Islamiat = +prompt("Enter Islamiat's numbers ");
var Urdu = +prompt("Enter Urdu's numbers ");
var Math = +prompt("Enter Math's numbers ");
var Science = +prompt("Enter Science's numbers ");
var Social = +prompt("Enter Social's numbers ");
var TotalMarks = English + Islamiat + Urdu + Math + Science + Social;
var obtainedMarks = 600;
var Per = (TotalMarks / obtainedMarks) * 100;

if (
  English < 0 ||
  English > 100 ||
  Urdu < 0 ||
  Urdu > 100 ||
  Islamiat < 0 ||
  Islamiat > 100 ||
  Math < 0 ||
  Math > 100 ||
  Social < 0 ||
  Social > 100 ||
  Science < 0 ||
  Science > 100
) {
  alert ("Please enter marks between 0 and 100 for all subjects.");
  
}

var result = " ";
if (
  English < 40 ||
  Islamiat < 40 ||
  Urdu < 40 ||
  Math < 40 ||
  Science < 40 ||
  Social < 40
) {
  result = "You are failed! (Try next time)...";
} else {
  result = "Congragulations you are Passaed...";
}

var grade = " ";
if (Per >= 90 && Per <= 100) {
  grade = "A-1";
} else if (Per >= 80 && Per < 90) {
  grade = "A+";
} else if (Per >= 70 && Per < 80) {
  grade = "A";
} else if (Per >= 60 && Per < 70) {
  grade = "B";
} else if (Per >= 50 && Per < 60) {
  grade = "C";
} else if (Per >= 40 && Per < 50) {
  grade = "D";
} else {
  grade = "None";
}

document.getElementById("english") .innerHTML = "English Marks: " + English;
document.getElementById("islamiat") .innerHTML = "Islamiat Marks: " + Islamiat;
document.getElementById("urdu") .innerHTML = "Urdu Marks: " + Urdu;
document.getElementById("math") .innerHTML = "Math Marks: " + Math;
document.getElementById("science") .innerHTML = "Science Marks: " + Science;
document.getElementById("social") .innerHTML = "Social Studies Marks: " + Social;
document.getElementById("TotalMarks") .innerHTML = "Total Marks: " + TotalMarks + " / 600";
document.getElementById("percentage") .innerHTML = "Your Percentage is: " + Per.toFixed(2) + "%";
document.getElementById("grade") .innerHTML = "Your Grade is: " + grade;
document.getElementById("result") .innerHTML = "Result: " + result;
