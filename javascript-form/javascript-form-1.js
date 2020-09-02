/*jslint
browser, devel
*/

function disableButtonFunction() {
    'use strict';
    document.getElementById("buttonOne").disabled = true;
}

document.getElementById("buttonDisable").addEventListener("click", disableButtonFunction);

function enableButtonFunction() {
    'use strict';
    document.getElementById("buttonOne").disabled = false;
}

document.getElementById("buttonEnable").addEventListener("click", enableButtonFunction);

function nameOfButtonFunction() {
    'use strict';
    var nameOfButtonVariable = document.getElementById("buttonOne");
    console.log(nameOfButtonVariable.id);
    console.log(nameOfButtonVariable.name);
}

nameOfButtonFunction();
