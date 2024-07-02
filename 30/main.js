"use strict";
let user_names = ["faizan", "salman", "admin", "usman", "amal"];
user_names.forEach(oneuser => {
    if (oneuser === "admin") {
        console.log(`Hellow ${oneuser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hellow ${oneuser}, thank you for logging in again.`);
    }
});
