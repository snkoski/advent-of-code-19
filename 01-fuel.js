let fs = require("fs");

fs.readFile("fuelInput.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
    let totalFuel = 0;
    let dataArr = data.split('\n');
  
    console.log(dataArr);
    for (let i = 0; i < dataArr.length; i++) {
        let temp = (Math.floor(dataArr[i] / 3)) - 2;
        totalFuel += temp
    }
    console.log("Total fuel needed", totalFuel)
  });