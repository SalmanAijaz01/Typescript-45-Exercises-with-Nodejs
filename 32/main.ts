let current_users:string[]=["faizan", "salman","admin","usman","amal"]
let New_users:string[]=["faizan", "salman","safdar","haider","amal"]
// user_names=[]

// if(user_names.length === 0){
// console.log("Your array is empty! We need to find some users")
// }else{
    New_users.forEach(new_one_user=>{
        let our_condition=current_users.some(current_one_user=>current_one_user.toLowerCase() === new_one_user.toLowerCase())
        if(our_condition){
            console.log(`Sorry ${new_one_user}, is already taken!`)
        }else{
            console.log(`This username ${new_one_user}, is available`)
        }
    })