/*jslint
browser, devel
*/

function functionDeferOne() {
    'use strict';
    console.log("functionDeferOne");
}

document.getElementById("buttonOne").addEventListener("click", functionDeferOne);
