/*jslint
browser, devel, es6
*/
/*global
window
*/

function mathRandomFunction() {
    'use strict';
    document.getElementById("output").innerText = Math.random();
}

document.getElementById("mathRandom").addEventListener("click", mathRandomFunction);

function random_1_2_Function() {
    'use strict';
    document.getElementById("output").innerText = Math.floor(Math.random() * (2) + 1);
}

document.getElementById("random_1-2").addEventListener("click", random_1_2_Function);
