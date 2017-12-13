// Code examples from the book: "JavaScript: The Good Parts" by Douglas Crockford.

// Create objects:
var empty_object = {};

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42", city: "Los Angeles"
    }
};


// Obtaining objects values:
console.log( "stooge[\"first-name\"]: " + stooge["first-name"] );
console.log( "flight.departure.IATA: " + flight.departure.IATA );

// Non-existent member of the object return undefined:
console.log( "stooge[\"middle-name\"]: " + stooge["middle-name"] );
console.log( "flight.status: " + flight.status );


// Setting default object values:
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";


//Update object:
// If a property with that name exists
stooge['first-name'] = 'Jerome';

// If the object does not already a property with that name
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';

flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';


// Object prototype:

// Add method to create a prototype object
if(typeof Object.create !== 'function') {
    Object.create = function(o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    }
}
var another_stooge  = Object.create(stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

// Adding a new property to the prototype object
stooge.profession = 'actor';
another_stooge.profession // 'actor'