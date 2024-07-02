var current_users = ["faizan", "salman", "admin", "usman", "amal"];
var New_users = ["faizan", "salman", "safdar", "haider", "amal"];
// user_names=[]
// if(user_names.length === 0){
// console.log("Your array is empty! We need to find some users")
// }else{
New_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, ", is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, ", is available"));
    }
});
