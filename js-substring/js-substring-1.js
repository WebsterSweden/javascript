/*jslint
browser, devel, es6, for
*/
/*global
window
*/

// bitwise, browser, convert, couch, devel, es6, eval, fudge, getset, long, node, single, this, white

console.log(document.currentScript);

let stringOne = "The quick brown fox jumps over the lazy dog";

document.getElementById("stringOne").innerText = stringOne;

let substringOne = stringOne.substring();

document.getElementById("substringOne").innerText = substringOne;

// let substringTwo = stringOne.substring(0, 0);
// let substringTwo = stringOne.substring(0);
// let substringTwo = stringOne.substring(0, 3);
// let substringTwo = stringOne.substring(3, 0);
let substringTwo = stringOne.substring(0, stringOne.length);
// let substringTwo = stringOne.substring(-6, stringOne.length + 6);

document.getElementById("substringTwo").innerText = substringTwo;
