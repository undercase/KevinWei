// Helper function to create a link tag
function buildLink(text, url) {
	return "<a target='_blank' href='" + url + "'>" + text + "</a>";
};

// Helper function to create a span tag
function buildSpecialText(text) {
	return "<span class='special'>" + text + "</span>";
};

// Create a lambda function that returns the data for a command from prompts
function buildLambda(command) {
	return function() {
    return "<span class='wrapper'>" + format(command) + "</span>";
  };
}

// Format the response data from prompts
// If the data is a string, add padding. If it is a list, convert it into a
// string and then add padding.
function format(command) {
  // Retrieve raw response data from prompts
	var unformattedResponse = prompts[command];
  var formattedResponse = "";

  // If the response type is a string, return it
	if (typeof unformattedResponse == "string") {
		formattedResponse = "\n\t" + unformattedResponse + "\n\n";
  // Otherwise, the response type is a list, so convert the list to a string
	} else {
    formattedResponse = "\n" + formatList(unformattedResponse) + "\n";
  }
  return formattedResponse;
};

// Convert a list of data from prompts into a string
function formatList(list) {
	var response = "";
  // Loop through each piece of data and append a formatted version of it
  // to the response string
	for (var listItemIndex=0; listItemIndex<list.length; listItemIndex++) {
		response += "\t";
		var formattedItem = formatObject(list[listItemIndex]);
		response += formattedItem + "\n";
	}
	return response;
};

// Loop through an object and format its entries to display on the console
function formatObject(obj) {
	dataItems = [];
	for (var property in obj) {
    // Only add property if it wasn't inherited
    // This is to avoid adding default object properties
		if (obj.hasOwnProperty(property)) {
			dataItems.push(obj[property]);
		}
	}
	return dataItems.join(" - ");
};

// Use fuse to find similar commands to the one entered
function search(list, searchitem) {
  // Create a copy of fuseOptions using the extend function
  customOptions = $.extend({}, fuseOptions);
	customOptions['distance'] = (searchitem.length<=2? 0 : 100);
	return new Fuse(list, fuseOptions).search(searchitem);
}

var fuseOptions = {
	include: ["score"],
	shouldSort: true,
	threshold: 0.3,
	location: 0,
	distance: 100,
	maxPatternLength: 32,
	keys: ['command']
};
