const accountId = 144553
let accountEmail = "kanak@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//accountId = 2  // not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "hc@hc.com"
accountPassword = "2121212121"
accountCity = "Bengaluru"
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity])
console.log(accountState)