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
    } else {
        document.getElementById("redGreenDiv").style.backgroundColor = "red";
    }
}

document.getElementById("redGreenButton").addEventListener("click", redGreenFunction);
