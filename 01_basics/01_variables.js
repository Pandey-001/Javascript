//Variables----- cosnt , var,let;

const accountId = 144553;
let accountEmail = "pamdey123@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur"; 
 let accountState; // will give underfined because we have not defined it


// allowed but dont do it like this do specify let or const;

// accountId = 2; // cant change value of const;

accountEmail="shubham@001"
accountPassword="111111";
accountCity="Delhi"

/*
prefer not to use var because of issue in scope and functional scope;

*/
// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);