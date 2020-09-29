/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

function functionOne() {
    'use strict';
    var functionOneValue = document.getElementById("functionOneInput").value;
    document.getElementById("functionOneOutput").innerText = functionOneValue;
    console.log("functionOneValue: " + functionOneValue);
}

document.getElementById("functionOneButton").addEventListener("click", functionOne);
