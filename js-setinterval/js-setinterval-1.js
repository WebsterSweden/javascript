/*jslint
browser, devel, es6, for
*/
/*global
window
*/

// bitwise, browser, convert, couch, devel, es6, eval, fudge, getset, long, node, single, this, white

console.log(document.currentScript);

let intervalOne;
let intervalTwo;

function consoleLog() {
    'use strict';
    console.log("consoleLog");
}

function setIntervalOneMethod() {
    'use strict';
    intervalOne = setInterval(consoleLog, 1000);
}

document.getElementById("setIntervalOne").addEventListener("click", setIntervalOneMethod);

function clearIntervalOneMethod() {
    'use strict';
    clearInterval(intervalOne);
}

document.getElementById("clearIntervalOne").addEventListener("click", clearIntervalOneMethod);

function clock() {
    'use strict';
    let dateObject = new Date();
    document.getElementById("clockOutput").innerText = dateObject.getHours() + ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds();
}

function setIntervalTwoMethod() {
    'use strict';
    intervalTwo = setInterval(clock, 1000);
}

document.getElementById("setIntervalTwo").addEventListener("click", setIntervalTwoMethod);

function clearIntervalTwoMethod() {
    'use strict';
    clearInterval(intervalTwo);
}

document.getElementById("clearIntervalTwo").addEventListener("click", clearIntervalTwoMethod);
