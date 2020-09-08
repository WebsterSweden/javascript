/*jslint
browser, devel, es6
*/
/*global
window
*/

document.getElementById("redGreenDiv").style.backgroundColor = "red";

function redGreenFunction() {
    'use strict';
    if (document.getElementById("redGreenDiv").style.backgroundColor === "red") {
        document.getElementById("redGreenDiv").style.backgroundColor = "green";
        console.log("Toggle from red to green.");
    } else {
        document.getElementById("redGreenDiv").style.backgroundColor = "red";
        console.log("Toggle from green to red.");
    }
}

document.getElementById("redGreenButton").addEventListener("click", redGreenFunction);
