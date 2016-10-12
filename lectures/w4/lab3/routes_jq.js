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
    let seen = [];
    let $parent = $("#routes");

    for(let source in routes) {

        for(let dest in routes[source]) {
            console.log("    dest "+ routes[source][dest]);
            // if we have not processed the dest, then create an element
            if(seen.indexOf(routes[source][dest]) == -1) {
                // You could chain these operations, but I find it hard to read
                let tmp = $("<p></p>").text(source + " <=> " +
                                            routes[source][dest]);
                tmp.addClass(source + " route " + routes[source][dest]);
                $parent.append(tmp);

            }
        }
        seen.push(source);
    }
}

function build_cities() {
    let $parent = $("#cities");

    for(let key in routes) {
        let $button = $("<button>");
        $button.text(key).on("click", function() {
            $(".route").each(function(){
                if($(this).hasClass(key)) {
                    $(this).css("color", "red");
                } else {
                    $(this).css("color", "black");
                }
            });
        });
        $parent.append($button);
    }
}

$(document).ready(function() {
  build_cities();
  build_routes();
});
