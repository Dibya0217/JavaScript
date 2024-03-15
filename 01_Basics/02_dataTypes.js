"use strict"; // treat all JS code as newer version

// alert(3 + 3) // we are using node.js, not browser JavaScript so no need for this

let a = 10;
console.log("a is: ", a); // 10
console.log(typeof a); // number


// number
let b = 20;
console.log(b); // 20
console.log(typeof b); // number
let c = 10.4;
console.log(c); // 10.4
console.log(typeof c); // number


// string
let d = 'Hello';
console.log(d); // Hello
console.log(typeof d); // string
let e = "Dibya Ranjan Samal";
console.log(e); // Dibya Ranjan Samal
console.log(typeof e); // string

// boolean
let f = true;
console.log(f); // true
console.log(typeof f); // boolean
console.log(Boolean(0)); // false
console.log(Boolean(-1)); // true


// undefined
let g;
console.log(g); // undefined
console.log(typeof g); // undefined
let i = undefined;
console.log(i); // undefined

// null
let h = null;
console.log(h); // null
console.log(typeof h); // object


// symbol
let sym1 = Symbol('123');
let sym2 = Symbol('123');
console.log(sym1); // 123
console.log(sym2); // 123
console.log(sym1 == sym2); // false
console.log(sym1 === sym2); // false
console.log(typeof sym1); // symbol
console.log(typeof sym2); // symbol
let sym3 = sym1;
console.log(sym1 == sym3); // true
console.log(sym1 === sym3); // true
// sym1.description = 'Hello';
// console.log(sym1.description); // TypeError: Cannot set property description of [object Symbol] which has only a getter at object



// bigint
let j = 123456789n;
console.log(j); // 123456789n
console.log(typeof j); // bigint

// array
const students = ["Dibya", "Aamir", "Pradeep", "Rohit", "Iswar", "Akash"];
console.log(students); // [ 'Dibya', 'Aamir', 'Pradeep', 'Rohit', 'Iswar', 'Akash' ]
console.log(typeof students); // object

// object
let myObj = {
    name : "Dibya",
    age : 23
}
console.log(myObj); // { name: 'Dibya', age: 23 }
console.log(typeof myObj); // object

// function
let myFunction = function() {
    console.log("Hello World");
}
console.log(myFunction()); // undefined
console.log(typeof myFunction); // function