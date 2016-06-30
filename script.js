$(document).ready(function(){
    // your jQuery codes will go here

    // var cityName = "Seattle";
    
    
    $("#btn-drop").click( function(){
    	var cityName = $("select").val();
    	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=b29a368759557459af28754f136e3af0";
    	var url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=b29a368759557459af28754f136e3af0";
    	
    	var output = "";
    	$.get(url, function(res){
	    	console.log("first api", output);
    		output += "<div class='weather-card'>";
	    	output += "<h3>"+res.name+"</h3>";
	    	output += "<p>"+res.main.temp+"</p>";
	    	output += "<p>"+res.wind.speed+"</p>";
	    	output += "<p>"+res.wind.deg+"</p>";
	    	output += "<p>"+res.dt+"</p>";	
    	}).promise().done( function() {
    		$.get(url2, function(res2){
    		// console.log(res);
    		console.log("2nd api", output);
	    		output += "<p>Hum: "+res2.list[0].main.humidity+"</p>";
	    		output += "<p>5 Day:  ";
	    		for(var i=0; i<5; i++) {
	    			output+= res2.list[i*8+7].main.temp + "  ";
	    		}
	    		output += "</p>";
	    		output += "<p>Lat/Long: "+res2.city.coord.lat+", "+res2.city.coord.lon+"</p>";
			console.log("3rd api", output);	
			output += "</div>";
		$("#weather-info").append(output); 
	    	});
	    
    	});


    	
	    
    });

	$("#btn-search").click( function(){
    	var cityName = $("#city").val();
    	var stateName = $("#state").val();
    	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName +",us-" +stateName + "&APPID=b29a368759557459af28754f136e3af0";
    	var url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName +",us-" +stateName + "&APPID=b29a368759557459af28754f136e3af0";
    	
    	$.get(url, function(res){
	    	var output = "";
    		output += "<div class='weather-card'>";
	    	output += "<h3>"+res.name+", "+ stateName+"</h3>";
	    	output += "<p>"+res.main.temp+"</p>";
	    	output += "<p>"+res.wind.speed+"</p>";
	    	output += "<p>"+res.wind.deg+"</p>";
	    	output += "<p>"+res.dt+"</p>";	
	    	
	    	$.get(url2, function(res2){
	    		// console.log(res);
	    		output += "<p>Hum: "+res2.list[0].main.humidity+"</p>";
	    		output += "<p>5 Day:  ";
	    		for(var i=0; i<5; i++) {
	    			output+= res2.list[i*8+7].main.temp + "  ";
	    		}
	    		output += "</p>";

	    		output += "<p>Lat/Long: "+res2.city.coord.lat+", "+res2.city.coord.lon+"</p>";	
				output += "</div>";
				$("#weather-info").append(output);
	    	});
	    });	 
    });

});