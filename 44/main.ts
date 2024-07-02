function makeSanwitches(...items:string[]){
    console.log("\nMaking a sandwitch with the following items:\n")
    items.forEach(singleItem=> console.log("-" + singleItem));
    console.log("Now Enjoy sandwitches")
}
makeSanwitches("butter","chicken","egg")
makeSanwitches("butter","bread")
makeSanwitches("butter","chicken","egg","bread","Sauce")