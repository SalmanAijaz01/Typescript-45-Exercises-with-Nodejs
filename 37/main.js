function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("You ordered \"".concat(size, "\" size with \"").concat(message, "\" on the shirt"));
}
make_shirt();
make_shirt("samll");
make_shirt("Medium", "Owesome");
