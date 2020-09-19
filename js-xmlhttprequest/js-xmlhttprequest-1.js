/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

function XMLHttpRequestFunction() {
    'use strict';
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.status === 200) {
            document.getElementById("XMLHttpRequestOneOutput").innerText = xhttp.responseText;
            document.body.style.backgroundColor = "red";
        }
    };
    xhttp.open("GET", "js-xmlhttprequest-1.txt", true);
    xhttp.send();
}

document.getElementById("XMLHttpRequestOne").addEventListener("click", XMLHttpRequestFunction);

// xhttp.readyState === 4 && xhttp.status === 200
