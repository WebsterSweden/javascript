/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

var anonymousFunctionOneVariable = function () {
    'use strict';
    console.log("anonymousFunctionOne no name function.");
};

document.getElementById("anonymousFunctionOneButton").addEventListener("click", anonymousFunctionOneVariable);

var anonymousFunctionTwoVariable = function anonymousFunctionTwo() {
    'use strict';
    console.log("anonymousFunctionTwo named function.");
};

document.getElementById("anonymousFunctionTwoButton").addEventListener("click", anonymousFunctionTwoVariable);
