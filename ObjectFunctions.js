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





/* --------------------------------------------------------------------------------------------------------------------- */

const animal = {}

Object.defineProperty(animal,"name",{
    value:"Cat",
    writable: false
});
console.log(animal.name);

Object.defineProperty(animal,"date",{
    get() {
        return new Date();
    }
})

console.log(animal.date);

//defineProperty in 3rd argument where we define descriptor that is properties we can also define function , and inside descriptor we can use value, writable or get, set 
// here we can only use get to return a function , and set to set something , 

Object.defineProperty(animal,"demoFunction",{
    get(){
        return function demo(){
            console.log("You just hit this function");
        }
    }
})

animal.demoFunction();


/*-------------------------------------------------------------------------------------------------------------------------------------*/

const weather = {
    loacation:"Banglore",
    temp:35,
    wind: "12kn west"
}

const array = Object.entries(weather);   //entries method is used to return array from object it returns multi dimensional array;
console.log(array);


const samagri = [['apple',5],['orange',6],['cherry',10]];

const samagriObject  = Object.fromEntries(samagri); //fromEntries method is used to convert multiDim array to object , it return object from an array passed

console.log(samagriObject);


/*-------------------------------------------*/
/*  we can also also make object immutbale that is we cant delete , add or reassign by using freeze method */

const sampleObject = {
    name:"prajwal",
    age:21,
    college:"dropout"
}

Object.freeze(sampleObject);
delete sampleObject.name;

console.log(sampleObject);  //property will not be deleted
