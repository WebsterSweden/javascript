/*jslint
browser, devel, es6
*/
/*global
window
*/

function functionDeferOne() {
    'use strict';
    console.log("functionDeferOne");
}

document.getElementById("buttonOne").addEventListener("click", functionDeferOne);
