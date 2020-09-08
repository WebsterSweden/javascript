/*jslint
browser, devel, es6
*/
/*global
window
*/

function sentencePrint() {
    'use strict';
    var sentenceInput = document.getElementById("sentenceOne").innerText;
    document.getElementById("sentenceOutput").innerText = sentenceInput;
    console.log("sentenceInput: " + sentenceInput);
}

document.getElementById("sentenceInput").addEventListener("click", sentencePrint);
