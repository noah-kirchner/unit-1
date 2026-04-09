 // Data for citites and their respective populations
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

// Function to add columns to cityPop
function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
            // Add header to each row indicating city size
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;
            // Categorize city sizes
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
            // Add city size as new cell
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

// Function to add events
function addEvents(){
    // Changes color of table on mouseover
	document.querySelector("table").addEventListener("mouseover", function(){
		// Builds an rgb color string using three random values 0-255
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
				};
		};
        // Establishes background colors
		document.querySelector("table").style.backgroundColor = color;
	});
    // Alerts user when the user clicks
	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};
// Function to run addColumns and addEvents
function initialize(){
    cities();
    addColumns(cityPop);
    addEvents();
};
// Runs initialize() once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);

// Function to manage cities data
function cities(){
    // Creates table element
    var table = document.createElement("table");
    var headerRow = document.createElement("tr");
    // Creates header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>");
    table.appendChild(headerRow);
    // Loops through cityPop and adds each city as a respective table row
    for(var i = 0; i < cityPop.length; i++){
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        table.insertAdjacentHTML('beforeend', rowHtml);
    };
    // Appends table to mydiv element
    document.querySelector("#mydiv").appendChild(table);
};