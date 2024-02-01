// fetch("IndiaData.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
// //   .catch((err) => console.log("Error occured"));

// // var data = JSON.parse("./IndiaData");


async function logMovies() {
  const response = await fetch("https://reqres.in/api/users/2");
  const users = await response.json();
  console.log(users);
}

logMovies();


//uplolading example
async function postJSON(data) {
  try {
    const response = await fetch("https://example.com/profile", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const data = { username: "example" };
postJSON(data);
