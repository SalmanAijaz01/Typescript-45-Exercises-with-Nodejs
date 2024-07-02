function makeSanwitches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwitch with the following items:\n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("Now Enjoy sandwitches");
}
makeSanwitches("butter", "chicken", "egg");
makeSanwitches("butter", "bread");
makeSanwitches("butter", "chicken", "egg", "bread", "Sauce");
