// var obj = {
//   "Name": "Umair Ahmed",
//   Age: 39,
//   CNIC: 4210135591091,
//   Address: "B-7/17 Azam Nagar Sindhi Hotel Liaquatabad Karachi.",
// };

// console.log("obj", obj.Address);

// console.log(`Hello ${obj.Name} Welcome To Our Site`);

// var obj2 = {
//   Name: "John Doe",
//   Age: 30,
//   CNIC: 1234567890123,
//   Address: "123 Main St, Anytown, USA.",
// };

// console.log("obj2", obj2);

// console.log(`Hello ${obj2.Name} Welcome To Our Site`);
// console.log("obj2", obj2.Address);

// var objArr = [obj, obj2];
// console.log("Array of objects:", objArr[1].Name);

function getStudentInfo(name, Age, cnic, Address) {
  (this.Name = name),
    (this.Age = Age),
    (this.cnic = cnic),
    (this.Address = Address);
  this.getStudentInfo = function () {
    return `Name: ${this.Name},  Age: ${this.Age}, CNIC: ${this.cnic}, Address: ${this.Address}`;
  };
}

var student1=new getStudentInfo(
  "Umair Ahmed",
  39,
  4210135591091,
  "B-7/17 Azam Nagar Sindhi Hotel Liaquatabad Karachi."
)
  console.log(student1.getStudentInfo());


var student2=new getStudentInfo(
  "John Doe",
  30,
  1234567890123,
  "123 Main St, Anytown, USA."
)  
console.log(student2.getStudentInfo());