
// in this example you will see how we can convert object to string and string to object using JSON
// this is usefull in some cases when you backend api returns object or string from db you can change it oocordingly

Vehicle = {
    name:"mahindra",
    type: "suv",
    make: 1998
}
console.log(Vehicle.name);

var name = JSON.stringify(Vehicle);
console.log(name);

var Obj = JSON.parse(name);
console.log(Obj);