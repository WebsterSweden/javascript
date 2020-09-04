/*jslint
browser, devel, es6
*/
/*global
window
*/

function disableButtonFunction() {
    'use strict';
    document.getElementById("buttonOne").disabled = true;
    console.log("Button One disabled");
}

document.getElementById("buttonDisable").addEventListener("click", disableButtonFunction);

function enableButtonFunction() {
    'use strict';
    document.getElementById("buttonOne").disabled = false;
    console.log("Button One enabled");
}

document.getElementById("buttonEnable").addEventListener("click", enableButtonFunction);

function nameOfButtonFunction() {
    'use strict';
    var nameOfButtonVariable = document.getElementById("buttonOne");
    console.log(nameOfButtonVariable.id);
    console.log(nameOfButtonVariable.name);
}

nameOfButtonFunction();
