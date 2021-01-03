// from data.js
var tableData = data;

// Reference table body

var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

//Step 1: Loop Through `data` and console.log each UFO report object. 
// Insert data into table


    data.forEach(function(ufosight) {
        console.log(ufosight);
        var row = tbody.append("tr");
      
        Object.entries(ufosight).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the ufo sighting object
          var cell = row.append("td");
          cell.text(value);
        });
      });


  // Step 2: filter data based on user search

  var button = d3.select("#button");

  var form = d3.select("#form");

  button.on("click", runEnter);
  form.on("submit",runEnter);

  function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);

  };