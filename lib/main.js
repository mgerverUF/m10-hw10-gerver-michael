'use strict';

var tempList = function tempList() {
    document.getElementById('boiling-temp').innerHTML = 212;
    document.getElementById('freezing-temp').innerHTML = 32;
    document.getElementById('water-temp').innerHTML = 73;
};

tempList([212, 32, 73]);