
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

}













































