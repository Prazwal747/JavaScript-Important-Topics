var set = new Set();
set.add("jQuery");
set.add("Angular.js");
set.add("BootStrap");
set.add("Next.js");

var itr = set.values(); //returns itterator object 

for( var i=0 ; i<set.size ; i++ ){
    console.log(itr.next().value + `\n`);
}

set.add('56');

console.log(set);

set.delete('56');
console.log(set)

var itr2 = set.entries();  //return itterator object but [any , any] type , with key value , as set internally uses key inside
                            // To keep the values unique it uses the key internally.

for (const iterator of itr2) {  //for of loop ,
        console.log(iterator);
}

var arr = ['apple','mango','cherry']
var set2 = new Set(arr);

set2.forEach( (value1,value2,set)=>{
    console.log(`key[ ${value1}  ] = ${value2}`)
} )

