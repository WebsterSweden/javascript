/*jslint
browser, devel
*/

console.log("scripts-head.js");

function functionHeadOne() {
    'use strict';
    console.log("functionHeadOne");
}

document.getElementById("buttonOne").addEventListener("click", functionHeadOne);
