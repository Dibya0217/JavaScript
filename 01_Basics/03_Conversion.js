// Conversion
let a = "10";
let b = Number(a);
console.log(typeof a); // string
console.log(b); // 10
console.log(typeof b); // number

let c = 1;
let d = Boolean(c);
console.log(typeof c); // number
console.log(d); // true
console.log(typeof d); // boolean
c = 0;
console.log(Boolean(c)); // false
c = "";
console.log(Boolean(c)); // false
c = "Dibya";
console.log(Boolean(c)); // true

let  e = 10;
console.log(typeof e); // number
let f = String(e); 
console.log(typeof f); // string


// Coercion
let x = 1 + "5" ;
console.log(x); // 15
console.log(typeof x); // string

x = 1 + Number("5") ;
console.log(x); // 6
console.log(typeof x); // number

let y = "2" * 10;
console.log(y); // 20
console.log(typeof y); // number