/*jslint
browser, devel
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

document.getElementById("button-one").addEventListener("click", eventListenerfunctionOne);
