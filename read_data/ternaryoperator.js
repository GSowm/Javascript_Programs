let input = require('prompt-sync')()

let num = parseInt (input("Enter number:"))

num>=100 && num<=999? console.log("Number is a 3 digit"): console.log("Number is not a 3 digit");