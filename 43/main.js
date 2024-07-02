function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["salman", "Usman", "Faizan"];
var copy_magicians_name = magicians_name.slice();
var copy_great_magicians = make_great(copy_magicians_name);
show_magicians(magicians_name);
show_magicians(copy_great_magicians);
