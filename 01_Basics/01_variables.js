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