let a = 10;
let b = a;
// Stack (Primitive)
console.log(a); // 10
console.log(b); // 10
b = 20;
console.log(b); // 20
console.log(a); // 10

// Heap (Object)(Non-primitive)
let userOne = {
    email : "dibyaranjan@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne;
console.log(userOne.email); // dibyaranjan@gmail.com
console.log(userTwo.email); // dibyaranjan@gmail.com
userTwo.email = 'newmail@yahoo.com';
console.log(userOne.email); // newmail@yahoo.com
console.log(userTwo.email); // newmail@yahoo.com
