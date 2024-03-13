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

// null
let h = null;
console.log(h); // null
console.log(typeof h); // object