function getData() {
  let fname = "John",
    lname = "Rickman",
    age = 25,
    occupation = "SDE2";

  return [fname, lname, age, occupation];
}

const [fname, lname, age, occupation] = getData();

console.log(fname, lname);

function objectReturner() {
  let name = "prajwal";
  let salary = 33555;

  return {
    name,
    salary,
  };
}

let obj = objectReturner();

console.log(obj.name + " " + obj.salary);

let vehicle = {
  brand: "vw",
  type: "suv",
  year: "4545",
};

let vehicle2 = {};

for (k in vehicle) {
  console.log(vehicle[k]);
  vehicle2[k] = vehicle[k];
  console.log(k);
}

console.log(vehicle2);
