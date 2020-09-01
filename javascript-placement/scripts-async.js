/*jslint
browser, devel
*/

function functionAsyncOne() {
    'use strict';
    console.log("functionAsyncOne");
}

document.getElementById("buttonOne").addEventListener("click", functionAsyncOne);
