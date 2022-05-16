
// from data.js
var tableData = data;



// ******************************
// ********** Latyr's Code
// ******************************

// print data 
console.log(tableData);

// Table body tag
var tbody = d3.select("tbody");

// Append data to the table
tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Identify the button that will be clicked
var buttonFilter = d3.select("#filter-btn");


// Event #1
buttonFilter.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
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


  // Input elements keys
  var dateInputElementKey     =   dateInputElement.property("key");
  var cityInputElementKey     =   cityInputElement.property("key");
  var stateInputElementKey    =   stateInputElement.property("key");
  var countryInputElementKey  =   countryInputElement.property("key");
  var shapeInputElementKey    =   shapeInputElement.property("key");

  var Filter = {
    datetime  : dateInputElementValue,
    city      : cityInputElementValue,
    state     : stateInputElementValue,
    country   : countryInputElementValue,
    shape     : shapeInputElementValue
  };

  // Delete any attribute with invalid values
  function clean(object) {
    for (var i in object) { 
      if (object[i] === null || object[i] === undefined || object[i] === "") {
        delete object[i];
      }
    }
  }
  
  clean(Filter);
  console.log(Filter)


  // Apply filter(s)
  tableData = tableData.filter(function(Data) {
    for (var key in Filter) {
      if (Data[key] === undefined || Data[key] != Filter[key])
        return false;
    }
    return true;
  })

  console.log(tableData)


  // Table body tag
  var tbody = d3.select("tbody");


  // Delete any previous output
  tbody.html("");


  // Append filtered data to the table
  tableData.forEach((dateFilteredData) => {
      var row = tbody.append("tr");
      Object.entries(dateFilteredData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      });
  });



}













































