// let myDate = new Date()
// console.log(myDate.toString()); // Fri Mar 22 2024 17:44:11 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Fri Mar 22 2024
// console.log(myDate.toISOString()); // 2024-03-22T12:14:11.403Z
// console.log(myDate.toJSON()); // 2024-03-22T12:14:11.403Z
// console.log(myDate.toLocaleDateString()); // 22/3/2024
// console.log(myDate.toLocaleString()); // 22/3/2024, 5:44:11 pm
// console.log(myDate.toTimeString()); // 17:44:11 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); // Fri, 22 Mar 2024 12:14:11 GMT
// console.log(myDate.getTimezoneOffset()); // -330
// console.log(typeof myDate); // object


// In JS Month always start with '0' means "January"
// let myCreatedDate1 = new Date(2024, 2, 23)
// console.log(myCreatedDate1.toDateString()); // Thu Mar 23 2024
// let myCreatedDate2 = new Date(2024, 2, 23, 17, 51)
// console.log(myCreatedDate2.toLocaleString()); // 23/3/2024, 5:51:00 pm
// let myCreatedDate3 = new Date("2024-03-22")
// console.log(myCreatedDate3.toLocaleString()); // 22/3/2024, 5:30:00 am

// let myCreatedDate4 = new Date("2024-03-22")
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate); // 2024-03-23T14:12:33.989Z
console.log(newDate.getMonth()); // 2
console.log(newDate.getDay()); // 6

