'use strict';

// links used 
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_temp_converter_celsius_to_fahrenheit
// https://medium.com/@DylanAttal/convert-celsius-to-fahrenheit-in-javascript-b6b76b47c4f0

const darkLight = document.getElementById('mode');

// Dark and Light switch
darkLight.addEventListener('click', function () {
    let element = document.body;
    element.classList.toggle("dark-mode");

})

// Temp calc functions
function celsiusConvert(numVal, answer) {
    numVal = parseFloat(numVal);
    answer = document.getElementById('fVal').innerHTML=(numVal*1.8)+32;
    if (answer === '') {
        fVal.innerText = `Input a number`
    } else if (isNaN(answer)) {
        fVal.innerText = `Is not a number, Please input a number`;
    } else {
        fVal.innerText = `${answer}degrees Celsius`;
    }
}

function farenheitConvert(numVal, answer) {
    numVal = parseFloat(numVal);
    answer = document.getElementById('cVal').innerHTML=(numVal-32)/1.8;
    if (answer === '') {
        cVal.innerText = `Input a number`
    } else if (isNaN(answer) && answer != '') {
        cVal.innerText = `Is not a number, Please input a number`;
    } else {
        cVal.innerText = `${answer} degrees Farenheit`;
    }

}

// 
darkLight.addEventListener('click', function() {
    this.classList.toggle('mode');

    if (this.classList.contains('mode')) {
        this.innerText = 'Dark mode';
    } else 
    this.innerText = 'Light mode'
})



