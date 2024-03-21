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

const str3 = "Dibya";
const newString = str3.substring(0, 4);
console.log(newString);

const newString2 = str3.slice(-1, 4);
console.log(newString2);

const newString3 = "   Dibya   ";
console.log(newString3);
console.log(newString3.trim());

const url = "dibyaranjan2002@gmail.com";
console.log(url.includes( '@' )); // true

/*
// These methods are present in String
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
*/