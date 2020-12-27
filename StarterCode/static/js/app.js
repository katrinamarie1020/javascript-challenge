// from data.js
var tableData = data;

// Reference table body

var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

//Step 1: Loop Through `data` and console.log each UFO report object

data.forEach(function(ufosight) {
      console.log(ufosight);
      var row = tbody.append("tr");
    });