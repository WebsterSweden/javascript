/*jslint
browser, devel, es6
*/
/*global
window
*/

function eventListenerfunctionTwo() {
    'use strict';
    console.log("eventListenerfunctionTwo");
}

function eventListenerfunctionOne() {
    'use strict';
    console.log("eventListenerfunctionOne");
    eventListenerfunctionTwo();
}

document.getElementById("buttonOne").addEventListener("click", eventListenerfunctionOne);
