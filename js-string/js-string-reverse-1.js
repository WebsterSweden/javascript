/*jslint
browser, devel, es6
*/
/*global
window
*/

function sentencePrint() {
    'use strict';
    var sentenceInput = document.getElementById("sentence-one").innerText;
    document.getElementById("sentence-output").innerText = sentenceInput;
    console.log("sentence-input: " + sentenceInput);
}

document.getElementById("sentence-input").addEventListener("click", sentencePrint);
