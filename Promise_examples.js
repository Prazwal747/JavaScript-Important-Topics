//promise in javascript basic example and syntax
//promise is an object so you have to make a new object of promise to use it

let filePresent = false;

let p = new Promise((resolve, reject) => {
  if (filePresent) {
    resolve("Success from resolve");
  } else {
    reject("Error from reject");
  }
});

p.then((message) => {
  console.log("file" + message);
}).catch((message) => {
  console.log("file " + message);
});

// Example with Asynchronous Code:

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = { name: "John", age: 25 };
      resolve(data);
    }, 1000);

    if (22 < 4) {
      reject("Error from reject");
    }
  });
}

fetchData()
  .then((result) => {
    console.log("Data received:", result);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// web dev Simplified example(youtuber) //callback
let userLeft = false;
let userWatchingCatmeme = true;

function watchTutorialCallBack(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "user left",
      message: ":(",
    });
  } else if (userWatchingCatmeme) {
    errorCallback({
      name: "user watching cat meme",
      message: "WebDevSimplified < cat",
    });
  } else {
    callback("Successsss... suiiii");
  }
}

watchTutorialCallBack(
  (message) => {
    console.log("Success: " + message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

//lets write the above code (callback) into promises;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "user left",
        message: ":(",
      });
    } else if (userWatchingCatmeme) {
      reject({
        name: "user watching cat meme",
        message: "WebDevSimplified < cat",
      });
    } else {
      resolve("Successsss... suiiii");
    }
  });
}

watchTutorialPromise()
  .then((result) => {
    console.log("hey: " + result);
  })
  .then((result) => {
    console.log("Watching: " + result.name + result.message);
  })
  .catch((error) => {
    console.log("Error: " + error.name + " " + error.message);
  });

//promises all and race method

var vedio1 = new Promise((resolve, reject) => {
  resolve(`vedio 1 is streaming`);
});

var vedio2 = new Promise((resolve, reject) => {
  resolve(`vedio 2 is streaming`);
});

var vedio3 = new Promise((resolve, reject) => {
  resolve(`vedio 3 is streaming`);
});

Promise.all([vedio1, vedio2, vedio3]).then((message) => {
  console.log(message);
});

Promise.race([vedio1, vedio2, vedio3]).then((message) => {
  console.log(message);
});
