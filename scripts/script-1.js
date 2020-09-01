/*jslint
browser, devel
*/

console.log(document.currentScript);

function functionDateTime() {
    'use strict';
    var dateObject = new Date();
    console.log(dateObject);
}

document.getElementById("buttonDateTime").addEventListener("click", functionDateTime);
