var std1 = {
  Name: "Ali",
  Age: 25,
  Course: ["Html", "CSS", "JS"],
  Numbers: {
    HTML: 80,
    CSS: 75,
    JS: 65,
  },
};

// Accessing Object Properties
std1.CNIC = "12345-1234567-1";
var checkCNIC = "CNIC" in std1;
console.log(std1);
console.log(checkCNIC);

// Using for...in loop to iterate over object properties
for (var key in std1) {
  console.log(key + ": " + std1[key]);
}