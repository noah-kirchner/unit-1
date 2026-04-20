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

function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		
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

		document.querySelector("table").style.backgroundColor = color;
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};

function initialize(){
    cities();
    addColumns(cityPop);
    addEvents();
};

document.addEventListener('DOMContentLoaded', initialize);

function cities(){
    var table = document.createElement("table");
    var headerRow = document.createElement("tr");

    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>");
    table.appendChild(headerRow);

    for(var i = 0; i < cityPop.length; i++){
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        table.insertAdjacentHTML('beforeend', rowHtml);
    };

    document.querySelector("#mydiv").appendChild(table);
};