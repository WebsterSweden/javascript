/*jslint
browser, devel, es6, for
*/
/*global
window
*/

// bitwise, browser, convert, couch, devel, es6, eval, fudge, getset, long, node, single, this, white

console.log(document.currentScript);

let currentScriptElementOne = document.currentScript;

// [objcet HTMLScriptelement]
// document.getElementById("currentScriptOne").innerText = currentScriptElementOne;

document.getElementById("currentScriptTwo").innerText = currentScriptElementOne.src;
