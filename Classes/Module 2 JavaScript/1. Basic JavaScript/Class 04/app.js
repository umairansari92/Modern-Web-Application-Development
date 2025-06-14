var a = 5;
var result = a++ + a + ++a;
console.log(result)



var a = 5;
var result = ++a + ++a + a + a++ + a++;

//              6 + 7 +    7 + 7 + 8 = 35

console.log(result)



var a = 5;

var result = a++ - ++a + a + a-- + --a + a
//          5   -   6   +  6 + 5 + 5 + 5 = 22
console.log(result)

var a = 10;
var result = --a + --a + a-- + a + a++ + ++a - --a + a++ - --a;
            // 9  +  8 + 8   + 7 + 7 + 9  - 7  + 7 - 6

            console.log(result)


// a++ + ++a +--a -a
// a-- - a-- - ++a + a++ + a + --a


var a = 8
var result = a++ + ++a +--a -a
//          8 +  10 + 9 -9 = 18
console.log(result)
var result = a-- - a-- - ++a + a++ + a + --a
//          7   -   6  -  7  +  7  + 8 +  7 = 16
console.log(result)
var result = a++ + ++a - --a - ++a + a++ + --a
//          8   +   10  -  9  - 10 + 10 +   10 = 29
console.log(result)



var userName = prompt("Enter Your Name")
console.log("userName =>" , userName)