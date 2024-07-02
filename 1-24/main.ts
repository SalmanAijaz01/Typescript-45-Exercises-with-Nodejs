// Assignment#02
// let firstName="Eric";
// let message=`Hellow ${firstName}, Would yoy like to learn some Python today.`
// console.log(message)

// Assignment#03
// let firstName="Salman Aijaz";
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())

// let quote:string="As you sow so shall you reap";
// let words:string[]=quote.split(" ")
// let titleCase:string=" "
// for(let word of words){
    //    titleCase+= word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()+" "
    // }
    // console.log(titleCase)
    
// Assignment#04
// console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”")

// Assignment#05
// let famousPerson="Albert Einstein";
// let message="“A person who never made a mistake never tried anything new.”";
// console.log(message)

// Assignment#06
// const personName:string="    \n\tAlbert Einstein\t\n    ";
// console.log(personName)
// const secondName:string=personName.trim()
// console.log(secondName)

// Assignment#07 & 08
// console.log(5 + 3)
// console.log(10 - 2)
// console.log(4 * 2)
// console.log(32 / 4)

// Assignment#09
// let favouriteNumber=8;
// let message="My favourite number is "+ favouriteNumber;
// console.log(message)

// Assignment#10
// console.log(5 + 3); //Addition
// console.log(10 - 2); //subtract
// console.log(4 * 2);// multiply
// console.log(32 / 4);//divide

// Assignment#11 12
// let friendNames:string[]=['faizan', 'usman', 'Azher'];
// let message:string="is my childhood friend";
// for(let i=0;i<friendNames.length;i++){
    //     console.log(`${friendNames[i]} ${message}`)
    // }
    
// Assignment#13    
// let favTransport:string[]=['car','Bike','plane','healicopter'];
// let message:string="I would like to own a";
// for(let i=0; i<favTransport.length; i++){
//     console.log(`${message} ${favTransport[i]}`)
// }
// Assignment#13   (another method)
// let favTransport:string[]=['car','Bike','plane','healicopter'];
// for(let i=0; i<favTransport.length; i++){
//     console.log("I would like to own a " + favTransport[i])
// }

// Assignment#14
// let invitedPeople:string[]=['faizan', 'usman', 'Azher'];
// let message:string="you are invited on dinner tonight";
// for(let i=0; i<invitedPeople.length; i++){
//     console.log(`Dear ${invitedPeople[i]} ${message}`)
// }
// Assignment#14 (another method)
// let invitedPeople:string[]=['faizan', 'usman', 'Azher'];
// for(let i=0; i<invitedPeople.length; i++){
//     console.log("Dear Mr."+invitedPeople[i]+"',\n\n you are invited on dinner tonight.\n\nThankyou!")
// }
// Assignment#15 
// let invitedPeopleSet1:string[]=['faizan', 'usman', 'Azher'];
// console.log("invited Person list")
// for(let i=0; i<invitedPeopleSet1.length; i++){
//     console.log("Dear Mr."+invitedPeopleSet1[i]+"',\n\n you are invited on dinner tonight.\n\nThankyou!\n\n");
// };
// console.log("It seems like Mr Azher won't be able to come todayn\n\n")
// console.log("New invited Person list")
// let newGuest:string="Zaheer";
// invitedPeopleSet1[0]=newGuest;
//     for(let i=0; i<invitedPeopleSet1.length; i++){
//         console.log("Dear Mr."+invitedPeopleSet1[i]+"',\n\n you are invited on dinner tonight.\n\nThankyou!\n\n");
//         };

//-------------------------------------- Assignment#16

// // 1st invitation

// let invitedPeopleSet1:string[]=['faizan', 'usman', 'Azher'];
// console.log("Invited Person list")
// // for(let i=0; i<invitedPeopleSet1.length; i++){
// //     console.log("Dear Mr."+invitedPeopleSet1[i]+"',\n\n you are invited on dinner tonight.\n\nThankyou!\n\n");
// // };
// console.log("It seems like Mr Azher won't be able to come today\n\n")

// // 2nd invitation

// console.log("New invited Person list")
// let newGuest:string="Zaheer";
// invitedPeopleSet1[0]=newGuest;
//     for(let i=0; i<invitedPeopleSet1.length; i++){
//         console.log("Dear Mr."+invitedPeopleSet1[i]+"',\n\n you are invited on dinner tonight.\n\nThankyou!\n\n");
//         };

//         // 3rd invitation
// console.log("Good News! Now we've found a bigger dinning table and 3 more guests can accomodate")   
// invitedPeopleSet1.unshift("Rizwan")  // add name to the start
// invitedPeopleSet1.splice(2,0,"Amir") // add name in the middle
// invitedPeopleSet1.push("Faisal") // add name in the last
//     for(let i=0; i<invitedPeopleSet1.length; i++){
//         console.log("Dear Mr."+invitedPeopleSet1[i]+"',\n\n You are invited on dinner tonight. \n\nThankyou!\n\n");
//     }


//-------------------------------------- Assignment#17 (shriking guest list)

// // 1st invitation

// let invitedPeopleSet1:string[]=['faizan', 'usman', 'Azher'];
// console.log("Invited Person list")
// // for(let i=0; i<invitedPeopleSet1.length; i++){
    // //     console.log("Dear Mr."+invitedPeopleSet1[i]+"',\n\n you are invited on dinner tonight.\n\nThankyou!\n\n");
// // };
// console.log("It seems like Mr Azher won't be able to come today\n\n")

// // 2nd invitation

// console.log("New invited Person list")
// let newGuest:string="Zaheer";
// invitedPeopleSet1[0]=newGuest;
//     // for(let i=0; i<invitedPeopleSet1.length; i++){
//     //     console.log("Dear Mr."+invitedPeopleSet1[i]+"',\n\n you are invited on dinner tonight.\n\nThankyou!\n\n");
//     //     };

//         // 3rd invitation
// console.log("Good News! Now we've found a bigger dinning table and 3 more guests can accomodate")   
// invitedPeopleSet1.unshift("Rizwan")  // add name to the start
// invitedPeopleSet1.splice(2,0,"Amir") // add name in the middle
// invitedPeopleSet1.push("Faisal") // add name in the last
//     for(let i=0; i<invitedPeopleSet1.length; i++){
    //         console.log("Dear Mr."+invitedPeopleSet1[i]+"',\n\n You are invited on dinner tonight. \n\nThankyou!\n\n");
    //     }
// console.log('\nSorry! We cannot arrange big table only two people will be invited');

// while(invitedPeopleSet1.length > 2){
    //     let removeGuest=invitedPeopleSet1.pop();
    //     console.log(`Sorry Mr. ${removeGuest}! You are not invited on dinner`);
    // }
    // for(let i=0; i<invitedPeopleSet1.length; i++){
//     console.log("Dear Mr."+invitedPeopleSet1[i]+"',\n\n You are still invited on dinner tonight. \n\nThankyou!\n\n");
// }
// // To delete last two name in an array
// invitedPeopleSet1.splice(0,2);
// console.log(invitedPeopleSet1)


//------------------------------- Assignment#18 (Seeing the world)

// Store the locations in a array. Make sure the array is not in alphabetical order.
// let placesToVisit:string[]=['Italy', 'France', 'Germany','Australia','Agra','SaudiaArabia'];
// // • Print your array in its original order
// console.log(placesToVisit);
// // • Print your array in alphabetical order without modifying the actual list.
// console.log([...placesToVisit].sort())
// // Show that your array is still in its original order by printing it.
// console.log(placesToVisit);
// // Print your array in reverse alphabetical order without changing the order of the original list.
// console.log([...placesToVisit].sort().reverse())
// // Show that your array is still in its original order by printing it again.
// console.log(placesToVisit);
// // Reverse the order of your list. Print the array to show that its order has changed.
// console.log(placesToVisit.reverse());
// // Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log(placesToVisit.reverse());
// // Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log(placesToVisit.sort());
// // Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log(placesToVisit.sort().reverse());

// ----------------------------------Assignment#19

// let invitedPeople:string[]=['faizan', 'usman', 'Azher'];
// let peopleLength:number=invitedPeople.length;
//     console.log(`The number of invited People is ${peopleLength}`);

// ----------------------------------Assignment#20

// let randomArr:string[]=['English','Urdu','Germany','Punjabi']
// console.log(randomArr)

// ----------------------------------Assignment#20 (another method)
// let randomArr:string[]=[];
// randomArr.splice(0,0,'English','Urdu','Germany','Punjabi');
// console.log(randomArr)

// ----------------------------------Assignment#21 

// type TcarFeatures={
//     color:string
//     model:number
//     isAvailable:boolean
// }

// let carFeatures:TcarFeatures={
//     color:"Black",
//     model:2024,
//     isAvailable:true
// }
// console.log(carFeatures.isAvailable)

// ----------------------------------Assignment#22

// let randomArr:string[]=['English','Urdu','Germany','Punjabi']
// let res=randomArr[0]
// if(res===undefined){
    // console.log("You have entered incorect index")
    // }else{
        // console.log(`response is ${res}`)
        // }
        
// ----------------------------------Assignment#23

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')

// console.log("Is car !== 'subaru'? I predict False.")
// console.log(car !== 'subaru')

// console.log("Is car !== 'Texi'? I predict True.")
// console.log(car !== 'Texi')

// console.log("Is car !== 'rikshaw'? I predict True.")
// console.log(car !== 'rikshaw')

// console.log("Is car === 'rikshaw'? I predict False.")
// console.log(car === 'rikshaw')

// console.log("Is car === 'subaru'? I predict True.")
// console.log(car === 'subaru')

// console.log("Is car === 'Bike'? I predict False.")
// console.log(car === 'Bike')

// console.log("Is car !== 'Bike'? I predict True.")
// console.log(car !== 'Bike')

// console.log("Is car === 'Cycle'? I predict False.")
// console.log(car === 'cycle')

// console.log("Is car !== 'Cycle'? I predict True.")
// console.log(car === 'cycle')

// ----------------------------------Assignment#24

// test for equality
// console.log("Taha" as string === "Ahmed")
// // test for inequality
// console.log("Taha" as string !== "Ahmed")
// // test for lower case
// console.log("SALMAN".toLowerCase() === "salman")
// // test for Upper case
// console.log("salman".toUpperCase() !== "salman")
// // Numerical tests involving equality and inequality, 
// console.log(6 ===6)
// console.log(6 !== 12 as number)
// // Numerical tests involving greater/less than
// console.log(7 > 6)
// console.log(7 < 6)
// // Numerical tests involving greater/less than equal to
// console.log(7 >= 6)
// console.log(7 <= 6)
// Numerical tests involving and or statement
// console.log(5===5 && 6===7 as number)
// console.log(5>=5 || 6===7 as number)
// Test wether an item is in array
let car:string[]=["corolla","honda"];
console.log(car.includes("corolla"));
console.log(!car.includes("corolla"));


