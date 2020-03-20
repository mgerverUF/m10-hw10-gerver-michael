// Use Arrow function to print temperatures 
var tempList = () => {
    document.getElementById('boiling-temp').innerHTML = 212;
    document.getElementById('freezing-temp').innerHTML = 32;
    document.getElementById('water-temp').innerHTML = 73;
}; 

// Feeds temperature values to tempList function
tempList([212, 32, 73]);

// setTimeout 
setTimeout( function() { document.getElementById('good-temp').setAttribute('class','show')
    }, 3000);


// https://www.linkedin.com/learning/learning-functional-programming-with-javascript/simple-callbacks?u=41282748
// https://www.linkedin.com/learning/learning-ecmascript-6/arrow-functions?u=41282748     