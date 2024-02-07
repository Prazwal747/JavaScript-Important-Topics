const person = {
    personname:"Prajwal",
}

//here from assign method we can reassign , change , add new property to the Object it will change the orginal Object ie here person object;
Object.assign(person, {
    personname:"raju",
    age:24
});

console.log( person);


//to avoid changing the orginal object we can return the Object to another variable by declarations

const newPerson = Object.assign({},person,{
    personname:"sajna",
    age:24
})

console.log(person);


//this is to copy object using spread operator
const copyPerson = {...person};
console.log(copyPerson);

//now lets try to reaasign something or add properties using spread operator to new person object;

const anotherPerson = {...person,...{
    personname:"jeffry",
    age:"45",
    company:"Blue Orgigin"
}}

console.log(`old object is : ${person} \n new object is ${anotherPerson} `);
