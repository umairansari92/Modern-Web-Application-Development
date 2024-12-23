function check() {

  var english = parseInt(document.getElementById("english").value) || 0;
  var urdu = parseInt(document.getElementById("urdu").value) || 0;
  var math = parseInt(document.getElementById("math").value) || 0;
  var islamiat = parseInt(document.getElementById("islamiat").value) || 0;
  var sst = parseInt(document.getElementById("sst").value) || 0;
  var science = parseInt(document.getElementById("science").value) || 0;

  if (
    english < 0 ||
    english > 100 ||
    urdu < 0 ||
    urdu > 100 ||
    math < 0 ||
    math > 100 ||
    islamiat < 0 ||
    islamiat > 100 ||
    sst < 0 ||
    sst > 100 ||
    science < 0 ||
    science > 100
  ) {
    alert("Please enter marks between 0 and 100 for all subjects.");
    return;
  }

  var totalMarks = 600;
  var obtainMarks = english + urdu + math + islamiat + sst + science;
  var per = (obtainMarks / totalMarks) * 100;


  
  document.getElementById("totalMarks").innerHTML =
    "Total Marks: " + totalMarks;
  document.getElementById("obtainMarks").innerHTML =
    "Obtained Marks: " + obtainMarks;
  document.getElementById("percentage").innerHTML =
    "Percentage: " + per.toFixed(2) + "%";

  var grade = "";
  if (per >= 90 && per <= 100) {
    grade = "A+";
  } else if (per >= 80 && per < 90) {
    grade = "A";
  } else if (per >= 70 && per < 80) {
    grade = "B";
  } else if (per >= 60 && per < 70) {
    grade = "C";
  } else if (per >= 50 && per < 60) {
    grade = "D";
  } else {
    grade = "Bad Luck! (Try next time)";
  }

  document.getElementById("grade").innerHTML = "Grade: " + grade;
}
