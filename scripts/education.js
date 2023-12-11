window.onload = function () {
    // Display an alert when the page has completely loaded
    alert('Please click anywhere to display the table');
  };
  
  document.addEventListener('click', function () { //Click event
    const api = "./table.json";
    fetch(api)
      .then(function (response) {
        // Create a fetch request to return a promise
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json(); // Parse the JSON data from the response
      })
      .then(function (data) {
        // Log the status code and received data to the console 
        console.log(`Status Code: ${data.status}`);
        console.log('Received Data:', data);
        var col = "";
        data.forEach(function (itemData) { // Create HTML string to display the data in a table
          col += "<tr>";
          col += "<td>" + itemData.coursename + "</td>";
          col += "<td>" + itemData.description + "</td>";
          col += "<td>" + itemData.skills + "</td>";
        });
        document.getElementById('data').innerHTML = col; // Set inner HTML with id 'data'
      })
      .catch(function (error) {
        console.error('Fetch Error:', error); // Handle errors
      });
  });
  