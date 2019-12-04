let fs = require("fs");

fs.readFile("fuelInput.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
    let totalFuel = 0;
    let dataArr = data.split('\n');
  
    for (let i = 0; i < dataArr.length; i++) {
        
        totalFuel += fuelNeeded(dataArr[i])
    }
    console.log("Total fuel needed", totalFuel)
  });

  const fuelNeeded = (weight) => {
      return (Math.floor(weight / 3)) - 2;
  }