/*jslint
browser, devel, es6, for
*/
/*global
window
*/

// bitwise, browser, convert, couch, devel, es6, eval, fudge, getset, long, node, single, this, white

console.log(document.currentScript);

let timingOne;

function colorToggle() {
    'use strict';
    document.getElementById("timingOneDiv").style.backgroundColor = document.getElementById("timingOneDiv").style.backgroundColor === "red"
        ? "green"
        : "red";
}

function timingOneStart() {
    'use strict';
    timingOne = setInterval(colorToggle, 500);
}

document.getElementById("timingOneStart").addEventListener("click", timingOneStart);

function timingOneStop() {
    'use strict';
    clearInterval(timingOne);
}

document.getElementById("timingOneStop").addEventListener("click", timingOneStop);
