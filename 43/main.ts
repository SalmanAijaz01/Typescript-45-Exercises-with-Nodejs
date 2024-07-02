
function show_magicians(magicians:string[]){
    magicians.forEach(name=> console.log(name))
}

function make_great(magicians:string[]){
    return magicians.map(name=> `The Great ${name}`);
}

let magicians_name=["salman","Usman","Faizan"]

let copy_magicians_name=magicians_name.slice()

let copy_great_magicians=make_great(copy_magicians_name)

show_magicians(magicians_name)
show_magicians(copy_great_magicians)