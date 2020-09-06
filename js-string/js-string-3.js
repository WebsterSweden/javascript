/*jslint
browser, devel, es6
*/
/*global
window
*/

// TODO: Second parameter for indexOf and lastIndexOff.
// TODO: Backward search.

function indexOfFunction() {
    'use strict';
    var indexOfVariable = document.getElementById("paragraphOne").innerText;
    var indexOfPosition = indexOfVariable.indexOf("is");
    console.log(indexOfPosition);
    var indexOfNotFound = indexOfVariable.indexOf("Not found");
    console.log(indexOfNotFound);
}

document.getElementById("indexOfButton").addEventListener("click", indexOfFunction);

function lastIndexOfFunction() {
    'use strict';
    var lastIndexOfVariable = document.getElementById("paragraphOne").innerText;
    var lastIndexOfPosition = lastIndexOfVariable.lastIndexOf("is");
    console.log(lastIndexOfPosition);
    var lastIndexOfNotFound = lastIndexOfVariable.lastIndexOf("Not found");
    console.log(lastIndexOfNotFound);
}

document.getElementById("lastIndexOfButton").addEventListener("click", lastIndexOfFunction);

function searchFunction() {
    'use strict';
    var searchVariable = document.getElementById("paragraphOne").innerText;
    var searchPosition = searchVariable.search("is");
    console.log(searchPosition);
    var searchNotFound = searchVariable.search("Not found");
    console.log(searchNotFound);
}

document.getElementById("searchButton").addEventListener("click", searchFunction);
