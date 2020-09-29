/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

function eventBubbleOne() {
    'use strict';
    console.log("eventBubbleOne " + "event.bubbles: " + event.bubbles);
}

document.getElementById("eventBubbleOneButton").addEventListener("click", eventBubbleOne);

function eventBubbleTwo() {
    'use strict';
    console.log("eventBubbleTwo " + "event.bubbles: " + event.bubbles);
}

document.getElementById("eventBubbleOneButton").addEventListener("click", eventBubbleTwo);

function eventBubbleThree() {
    'use strict';
    console.log("eventBubbleThree " + "event.bubbles: " + event.bubbles);
}

document.getElementById("eventBubbleOneButton").addEventListener("click", eventBubbleThree);

// Test bubble and capture effect.

function divOuterFunction() {
    'use strict';
    document.getElementById("divOuter").style.backgroundColor = "red";
}

document.getElementById("divOuter").addEventListener("click", divOuterFunction);

function divBetweenFunction() {
    'use strict';
    document.getElementById("divBetween").style.backgroundColor = "green";
}

document.getElementById("divBetween").addEventListener("click", divBetweenFunction);

function divInnerFunction() {
    'use strict';
    document.getElementById("divInner").style.backgroundColor = "blue";
}

document.getElementById("divInner").addEventListener("click", divInnerFunction);
