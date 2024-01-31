fetch("IndiaData.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
//   .catch((err) => console.log("Error occured"));

// var data = JSON.parse("./IndiaData");
