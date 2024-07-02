let user_names:string[]=["faizan", "salman","admin","usman","amal"]
// user_names=[]

if(user_names.length === 0){
console.log("Your array is empty! We need to find some users")
}else{
    user_names.forEach(oneuser=>{
        if(oneuser==="admin"){
            console.log(`Hellow ${oneuser}, would you like to see a status report?`)
        }else{
            console.log(`Hellow ${oneuser}, thankyou for logging in again`)
        }
    })
}