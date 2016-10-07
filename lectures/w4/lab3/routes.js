"use strict";

/* Airline route display */

/* Indicates which cities have a direct flight between them.
 * A key has a direct flight to each of the cities in the array
 * associated with the key. */
const routes = {
    "YYZ" : ["YVR", "YYC", "YOW"],
	"YVR" : ["YYZ", "YYC"],
	"YXE" : ["YYC"],
	"YYC" : ["YXE","YVR", "YYZ"],
	"YOW" : ["YYZ"]
};

/* Create a paragraph element for each route in the routes object. 
 * The text of the element will be SRC <=> DEST  where SRC is is one of
 * the keys in routes, and DEST is in the array of cities.
 * Because routes are bi-drectional, they should not be duplicated in the
 * output.  In other words only one of the following should appear on the 
 * page: "YYZ <=> YVR" and "YVR <=> YYZ"
 */

function build_routes() {
	let parent = document.getElementById("routes");
    // keep track of cities that have been fully processed
	let seen = [];
	for(let source in routes) {
	    if(!routes.hasOwnProperty(source)) {
			continue;
		}
		for(let dest in routes[source]) {
            console.log("    dest "+ routes[source][dest]);
            // if we have not processed the dest, then create an element
			if(seen.indexOf(routes[source][dest]) == -1) {
				let tmp = document.createElement("p");
				tmp.textContent = source + " <=> " + routes[source][dest];
                
                // Add classes to the element to make it easier to find the
                // right ones.
				tmp.classList.add(source, "route", routes[source][dest]);

				parent.appendChild(tmp);
			}
		}
        // the source city hass been fully processed and should not appear
        // in any more routes
		seen.push(source);
	}
}

/* Return true if element has the class cls, false otherise */

function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

/* Create one button element for each city in "routes".
 * When the button is clicked, it will change the colour to red  of all of the 
 * paragraph elements with the class "route" and with the class name of
 * the city that is the name of the button.
 *
 * For example, if the user clicks on YOW, only the YOW <=> YYZ route
 * will be coloured red.  All other routes will be black.
*/

function build_cities() {
	let parent = document.getElementById("cities");
	for(let key in routes) {
	    if(!routes.hasOwnProperty(key)) {
			continue;
		}
	    let button = document.createElement("button");
		button.textContent = key;

		button.onclick = function() {
		    let elems = document.getElementsByClassName("route");
		    for(let i = 0; i < elems.length; i++) {
				if(hasClass(elems[i], key)) {
			    	elems[i].style.color = "red";
				} else {
					elems[i].style.color = "black";
				}
			}
		}
		parent.appendChild(button);
	}
}

window.onload  = function() {
	build_routes();
	build_cities();
};

