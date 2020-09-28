/*jslint
browser, devel, es6
*/
/*global
window
*/

console.log("script-head.js");

function functionHeadOne() {
    'use strict';
    console.log("functionHeadOne");
}

document.getElementById("buttonOne").addEventListener("click", functionHeadOne);
