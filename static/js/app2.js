
// from data.js
var tableDataReset = data;


// ******************************
// ********** Latyr's Code
// ******************************

// print data 
console.log(tableDataReset);

// Table body tag
var tbody = d3.select("tbody");

// Identify the button that will be clicked
var buttonReset = d3.select("#reset-btn");

// Event #2
buttonReset.on("click", runEnter);

  // Complete the event handler function for the form
  function runEnter() {

  // Delete any previous output
  tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault(); 

  // Append data to the table
  tableDataReset.forEach((ufoData) => {
      var row = tbody.append("tr");
      Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      });
  });

  // Input elements
  var dateInputElement = d3.select("#dateTimeForm");
  var cityInputElement = d3.select("#cityForm");
  var stateInputElement = d3.select("#stateForm");
  var countryInputElement = d3.select("#countryForm");
  var shapeInputElement = d3.select("#shapeForm");

  // Input elements values
  var dateInputElementValue = dateInputElement.property("value");
  var cityInputElementValue = cityInputElement.property("value");
  var stateInputElementValue = stateInputElement.property("value");
  var countryInputElementValue = countryInputElement.property("value");
  var shapeInputElementValue = shapeInputElement.property("value");

  // print
  console.log(dateInputElementValue);
  console.log(cityInputElementValue);
  console.log(stateInputElementValue);
  console.log(countryInputElementValue);
  console.log(shapeInputElementValue);

  // Reset Input elements
  dateInputElementValue= "";
  cityInputElementValue= "";
  stateInputElementValue= "";
  countryInputElementValue= "";
  shapeInputElementValue = "";

  // print
  console.log("============");
  console.log(dateInputElementValue);
  console.log(cityInputElementValue);
  console.log(stateInputElementValue);
  console.log(countryInputElementValue);
  console.log(shapeInputElementValue);

}















































