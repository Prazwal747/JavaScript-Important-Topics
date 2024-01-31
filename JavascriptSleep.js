// The programming languages such as PHP and C has a sleep(sec) function to pause the execution for a fixed amount of time. Java has a thread.
// sleep(), python has time.sleep(), and GO has time.sleep(2*time.second).

// Unlike other languages, JavaScript doesn't have any sleep() function. We can use some approaches for simulating the sleep() function
// in JavaScript. The features such as promises and async/await function in JavaScript helped us to use the sleep() function in an easier way.

//examplpe 1

// function sleep(milliseconds){
//     return new Promise(resolve=>setTimeout(resolve,milliseconds))
// }

// async function counter(){
//     console.log('Hello World');
//     for(i=0;i<4;i++){
//         await sleep(1500);
//         console.log(i);
//     }
// }

// counter();

// example2

var sleeper = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

sleeper(5000).then(() => console.log(`beeeeeppp`));
