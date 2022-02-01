console.log("Examples of objects");

const car = {
    make:"Ford",
    model:"Fiests Ghia",
    engine:"1.4",
    feul:"Unleaded",
    color:"Hot pink",
    price:1499.99
}

console.log(car);

console.log(car.price);


const cars = [{
    make:"Ford",
    model:"Fiests Ghia",
    engine:"1.4",
    feul:"Unleaded",
    color:"Hot pink",
    price:1499.99
},
{
    make:"Mini",
    model:"Cooper",
    engine:"1.8",
    feul:"Unleaded",
    color:"White",
    price:2999.999
},
{
    make:"SEAT",
    model:"Ibiza",
    engine:"1.2 TDI",
    feul:"Unleaded",
    color:"Red",
    price:1499.99
}]

console.log(cars);

function searchObject(search){
    const result = cars.find(car => car.make === search);
    console.log(result)
    return result;
}