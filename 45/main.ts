
function  create_car(manufacturer,model,...options){
    let car={
        manufacturer:manufacturer,
        model:model,
    };
    options.forEach(options=>{
        let[key,value]=options.split(":");
        car[key.trim()]=value.trim();
    });
    return car;
}

let myCar=create_car("Toyota","corolla","color:blank","sunroof:true");
console.log(myCar)