// Fetches MegaCities GeoJSON data and displays it in the browser
function debugAjax(){
    fetch("data/MegaCities.geojson")        // Request GeoJSON file from data folder
        .then(function(response){           // Receive raw server response
            return response.json();         // Convert raw response to JSON
        })
        .then(function(response){           // Receive  JSON data
            // Data IS available
            debugCallback(response);        // Pass converted data to callback function
        })

    // Data is NOT available
};

// Callback function to display GeoJSON data
function debugCallback(response){
    // Data IS available, received as parameter from debugAjax
    document.querySelector("#mydiv").insertAdjacentHTML(
        'beforeend',                                        // Insert after existing content
        '<br>GeoJSON data:<br>' + JSON.stringify(response) // Convert JSON object to readable string
    );
};

// Call debugAjax once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', debugAjax);