var tableValue = +prompt("Enter Table You Want To Print")
var starttingValue = +prompt("Enter Table Starting Value")
var endingValue = +prompt("Enter Table Ending Value")

for(var i= starttingValue; i<= endingValue; i++){
    document.write(tableValue + "X" + i + "=" + tableValue*i + "<br />"+"<br />")
}