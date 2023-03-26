// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}
var filters = [];
function updateFilters() {

    let filterVal = d3.select(this).property("value");
  // Check to see if a date was entered and filter the

    let filterId = d3.select(this).attr("id");
    console.log(filterId);
    if (filterVal) {
        filters[filterId] = filterVal;
        console.log(filters);
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
 
}

// 7. Use this function to filter the table when data is entered.
function filterTable() {

    // 8. Set the "filtered data" to the "tableData".
    let filteredData = tableData;

    // 9. Loop through all of the filters and keep any data that matches the filter values (from module)
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);
