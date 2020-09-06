/*jslint
browser, devel, es6
*/
/*global
window
*/

function sliceFunction() {
    'use strict';
    var sliceVariable = document.getElementById("paragraphOne").innerText;
    // var sliceExtract = sliceVariable.slice();
    // var sliceExtract = sliceVariable.slice("");
    var sliceExtract = sliceVariable.slice(10);
    console.log(sliceExtract);
}

document.getElementById("sliceButton").addEventListener("click", sliceFunction);

function substringFunction() {
    'use strict';
    var substringVariable = document.getElementById("paragraphOne").innerText;
    var substringExtract = substringVariable.substring(10, 16);
    console.log(substringExtract);
}

document.getElementById("substringButton").addEventListener("click", substringFunction);

function substrFunction() {
    'use strict';
    var substrVariable = document.getElementById("paragraphOne").innerText;
    var substrExtract = substrVariable.substr(10, 6);
    console.log(substrExtract);
}

document.getElementById("substrButton").addEventListener("click", substrFunction);

function replaceFunction() {
    'use strict';
    var replaceVariable = document.getElementById("paragraphOne").innerText;
    var replaceInsert = replaceVariable.replace("This is a string", "This is the replaced string");
    console.log(replaceInsert);
}

document.getElementById("replaceButton").addEventListener("click", replaceFunction);

function toUpperCaseFunction() {
    'use strict';
    var toUpperCaseVariable = document.getElementById("paragraphOne").innerText;
    var toUpperCaseConvert = toUpperCaseVariable.toUpperCase(toUpperCaseVariable);
    console.log(toUpperCaseConvert);
}

document.getElementById("toUpperCaseButton").addEventListener("click", toUpperCaseFunction);

function toLowerCaseFunction() {
    'use strict';
    var toLowerCaseVariable = document.getElementById("paragraphOne").innerText;
    var toLowerCaseConvert = toLowerCaseVariable.toLowerCase(toLowerCaseVariable);
    console.log(toLowerCaseConvert);
}

document.getElementById("toLowerCaseButton").addEventListener("click", toLowerCaseFunction);

// concat
// trim
// charAt
// charCodeAt
// split
