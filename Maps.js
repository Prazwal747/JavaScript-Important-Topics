//how to create a map

//by creating  new Map() object and use map.set();

//by passing an Arrays to new Map();

const fruits = new Map([
  ["apple", 500],
  ["mango", 400],
  ["oranges", 120],
]);

const cars = new Map();
cars.set("virtus", 45000); //set value
cars.set("scorpio", 52000);
cars.set("bmw", 1230000);

console.log(cars.get("virtus")); //gets value

console.log(cars.size);

cars.delete("scorpio");
console.log(cars);

// cars.clear();
// console.log(cars)

console.log(cars.has("virtus"));

console.log(typeof cars);
console.log(cars instanceof Map);

//forEach
//with one parameter we can pass value inside function
let total = 0;
cars.forEach((value) => {
  total += value;
});
console.log(total);

//with two params value , key we can pass both key and value;
let text = "";
cars.forEach((value, key) => {
  console.log(`key: ${key}  value: ${value}`);
});

//Map Entries : return itterator object with key value in map;
let _someString = "";

