// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with ufo report values
data.forEach(function(ufoFinder) {
  var row = tbody.append("tr");
  Object.entries(ufoFinder).forEach(function([key, value]) {
    // Append a cell to the row for each value in the ufo finder object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the submit button
var submit = d3.select("#filter-btn");

// Click event of datetime filter
submit.on("click", function() {

// Remove existing table
d3.select("tbody").html("");

// Prevent the page from refreshing
d3.event.preventDefault();

// Get the value property of the input element
var dateTime = d3.select("#datetime").property("value");

// Filter data
var filteredData = tableData.filter(record => record.datetime === dateTime);

// Display filtered data
filteredData.forEach(function(ufoFinder) {
    var row = tbody.append("tr");
    Object.entries(ufoFinder).forEach(function([key, value]) {
      // Append a cell to the row for each value in the ufo finder object
      var cell = row.append("td");
      cell.text(value);
    });

});

});