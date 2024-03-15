// There are two way ro create a  string object in Java
//1. Using new keyword:
const str1 = new String('Dibya Ranjan Samal')
let age = 23;
console.log(typeof str1) // object
console.log(str1) // [String: 'Dibya Ranjan Samal']

//2. Without using the 'new' keyword:
const str2 = "Dibya Ranjan Samal";
console.log(typeof str2); // string
console.log(str2); // Dibya Ranjan Samal

console.log(`My name is ${str1}. i am ${age} year old.`); // My name is Dibya Ranjan Samal. i am 23 year old.

// at() / charAt()
let index = 4;
console.log(`An index of ${index} returns the character ${str1.at(index)}`); // An index of 4 returns the character a
console.log(str1.charAt(index)); // a

console.log(str1[0]);
console.log(str1.length);