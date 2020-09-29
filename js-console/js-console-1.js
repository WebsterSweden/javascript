/*jslint
browser, devel, es6, for
*/
/*global
window
*/

// console.log(document.currentScript);

// function consoleAssertOneFunction() {
//     'use strict';

//     var objectOne = {
//         firstname: "firstname",
//         lastname: "lastname"
//     };

//     console.assert(document.getElementById("consoleAssertOneOutput"), objectOne);
// }

// document.getElementById("consoleAssertOneButton").addEventListener("click", consoleAssertOneFunction);

var objectOne = {
    firstname: "firstname",
    lastname: "lastname"
};

console.assert(document.getElementById("consoleAssertOneOutput"), objectOne);

function consoleClearOneFunction() {
    'use strict';
    // Console was cleared.
    console.clear();
}

document.getElementById("consoleClearOneButton").addEventListener("click", consoleClearOneFunction);

function consoleCountOneFunction() {
    'use strict';
    var i;
    for (i = 0; i < 10; i += 1) {
        console.count();
    }
}

document.getElementById("consoleCountOneButton").addEventListener("click", consoleCountOneFunction);

function consoleErrorOneFunction() {
    'use strict';
    console.error("console.error");
}

document.getElementById("consoleErrorOneButton").addEventListener("click", consoleErrorOneFunction);

// group
// groupCollapsed
// groupEnd
// info
// log
// table
// time
// timeEnd
// trace
// warn

