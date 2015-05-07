$(document).ready(function() {

	// Alternate Method - Gets all CSS related categories, regardles of whether any browser version needs a vendor prefix

	var requestUrl = 'http://raw.githubusercontent.com/Fyrd/caniuse/master/data.json';
	var localRequestUrl = 'data.json';


	$.getJSON(localRequestUrl, function(response) {

		var cssProperties = [];

		console.log(response);

		// Loop through each property
		$.each(response.data, function(index, value) {

			var added = false;

			// If has CSS related category
			if ( !($.inArray('CSS', value.categories) == -1) | !($.inArray('CSS2', value.categories) == -1) | !($.inArray('CSS3', value.categories) == -1) ) {
			
				cssProperties.push(value);
				added = true;
			}

		})


		var source = $("#properties-template").html()
		var template = Handlebars.compile(source)
		var output = template( {Property: cssProperties} )

		$("#whichvendorprefix").html(output)

		//console.log(cssProperties);

	});

	
})