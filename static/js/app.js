// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with ufo report values
data.forEach(function(ufoFinder) {
  console.log(ufoFinder);
  var row = tbody.append("tr");
  Object.entries(ufoFinder).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in the ufo finder object
    var cell = row.append("td");
    cell.text(value);
  });
});