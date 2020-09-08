/*jslint
browser, devel, es6
*/
/*global
window
*/

function functionAsyncOne() {
    'use strict';
    console.log("functionAsyncOne");
}

document.getElementById("buttonOne").addEventListener("click", functionAsyncOne);
