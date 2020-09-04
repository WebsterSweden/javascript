/*jslint
browser, devel, es6
*/
/*global
window
*/

console.log(document.currentScript);

function functionDateTime() {
    'use strict';
    var dateObject = new Date();
    console.log(dateObject);
}

document.getElementById("buttonDateTime").addEventListener("click", functionDateTime);

function numberAddFunction() {
    'use strict';
    var numberOne = parseInt(document.getElementById("number-one").value);
    console.log(numberOne);
    var numberTwo = parseInt(document.getElementById("number-two").value);
    console.log(numberTwo);
    var numberAddResult = numberOne + numberTwo;
    console.log(numberOne + " + " + numberTwo + " = " + numberAddResult);
}

document.getElementById("number-add").addEventListener("click", numberAddFunction);
