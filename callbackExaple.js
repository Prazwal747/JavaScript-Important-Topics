var Currentsalary=52000;

async function getEmployee(empId, empname, callback){
   if(empId==120 && empname=="raju"){
        console.log(empId+" "+empname);
       await callback(15000);
    }
}

function salaryIncreaser(salary){
    Currentsalary+=salary
    console.log(Currentsalary);
}

getEmployee(120,"raju", salaryIncreaser);



//Example 2

function delayedGreeting(callback) {
    setTimeout(function() {
      console.log("Hello, after 2 seconds!");
      callback();
    }, 2000);
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  delayedGreeting(sayGoodbye);


  //example 3
  //Event Listener with Callback:

document.getElementById("myButton").addEventListener("click", function() {  //basically we have passed function to addEventListener that works like a callback
  console.log("Button clicked!");
  // Your callback logic here
});
// Here, the addEventListener method is used to attach a click 
// event listener to an HTML button with the ID 
// "myButton." The anonymous function serves as 
// the callback that gets executed when the button is clicked.


// example 3 
// Ajax Request with Callback:

function fetchData(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        callback(data);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }
  
  function handleData(data) {
    console.log("Received data:", data);
    // Your callback logic here
  }
  
  fetchData("https://api.example.com/data", handleData);
  