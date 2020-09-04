/*jslint
browser, devel, es6
*/
/*global
window
*/

var onlyOnceOne = (function () {
    'use strict';
    var executed = false;
    console.log("executed: " + executed);
    return function () {
        if (!executed) {
            executed = true;
            console.log("executed: " + executed);
        }
    };
}());

document.getElementById("onlyOnceOne").addEventListener("click", onlyOnceOne);

var randomNumber = (function () {
    'use strict';
    var randomValue;
    console.log("Random before: " + randomValue);
    return function (flagForceNewValue) {
        if (randomValue === undefined || flagForceNewValue) {
            randomValue = Math.floor(Math.random() * (10 - 1) + 1);
            document.getElementById("randomNumberOutput").innerText = randomValue;
            console.log("Random after: " + randomValue);
        }
        console.log("Random last: " + randomValue);
        return randomValue;
    };
}());

// randomNumber();

document.getElementById("randomNumber").addEventListener("click", randomNumber);

var statusCheck = true;

console.log("statusCheck before function: " + statusCheck);

function onlyOnceTwo() {
    'use strict';
    console.log("statusCheck first in function: " + statusCheck);
    if (statusCheck === true) {
        console.log("statusCheck if true: " + statusCheck);
        document.getElementById("textOne").disabled = true;
        statusCheck = false;
    } else {
        console.log("statusCheck if else false: " + statusCheck);
    }
}

document.getElementById("formOneSubmit").addEventListener("click", onlyOnceTwo);
