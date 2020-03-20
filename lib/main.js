'use strict';

// Use Arrow function to print temperatures 
var tempList = function tempList() {
    document.getElementById('boiling-temp').innerHTML = 212;
    document.getElementById('freezing-temp').innerHTML = 32;
    document.getElementById('water-temp').innerHTML = 73;
};

// Feeds temperature values to tempList function
tempList([212, 32, 73]);

// setTimeout 
setTimeout(function () {
    document.getElementById('good-temp').setAttribute('class', 'show');
}, 3000);