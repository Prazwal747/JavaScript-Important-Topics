var d1 = new Date("11/06/1999");
var d2 = new Date("11/01/2024");

var diff = d2.getTime() - d1.getTime();

var dayDiff = diff/(1000*60*60*24);

console.log(dayDiff);


//diff of years

var yearDiff = (diff/31536000000);
console.log(yearDiff);