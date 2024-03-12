/*
// Var
console.log(a); // undefined

var a = 10;
console.log(a); // 10

a = 20;
console.log(a); // 20

// Re-declare
var a = 30;
console.log(a); // 30

// Initialize without declare
b = 100;
console.log(b); // 100

console.log(c); // ReferenceError: c is not defined
*/


/*
// Let
// console.log(d); // ReferenceError: Cannot access 'd' before initialization
let d = 50;
console.log(d); // 50

// Re-declare
d = 60;
console.log(d); // 60

// Declare without initialization
let e;
console.log(e); // undefined

// Re-declare
// let d = 70; // SyntaxError: Identifier 'd' has already been declared
*/


/*
// const
// console.log(f); // ReferenceError: Cannot access 'f' before initialization
const f = 80;
console.log(f); // 80
// Updated
// f = 90;
// console.log(f); // TypeError: Assignment to constant variable.

// re-declare
// const f = 90; // SyntaxError: Redeclaration of block-scoped variable 'g'.
*/




/*
const accountId = 123
let accountEmail = "Dibya@gmail.com"
var accountPassword = "12345"
accountCity = "Odisha"
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// accountId = 2 // not Allowed because we can't change or first declar then initialize the value of const type.

accountEmail = "dibyaranjansamal@gmail.com";
accountPassword = "123321"
accountCity = "Banglore"
accountState = "Karnataka"

// Prefer not to use var because of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
*/