/*jslint
browser, devel
*/

console.log("scripts-bottom.js");

function functionBottomOne() {
    'use strict';
    console.log("functionBottomOne");
}

document.getElementById("buttonOne").addEventListener("click", functionBottomOne);
