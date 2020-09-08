/*jslint
browser, devel, es6
*/
/*global
window
*/

var arrayOne = ["element-one", "element-two", "element-three"];

function arrayOneFunction(element) {
    'use strict';
    document.getElementById("arrayOneOutput").innerHTML += element + "<br>";
    console.log(element);
}

function arrayOneForEach() {
    'use strict';
    console.log(arrayOne);
    arrayOne.forEach(arrayOneFunction);
}

document.getElementById("arrayOne").addEventListener("click", arrayOneForEach);

var arrayTwo = ["element-four", "element-five", "element-six"];

function arrayTwoFunction(element) {
    'use strict';
    document.getElementById("arrayTwoOutput").innerHTML += element + "<br>";
    console.log(element);
}

function arrayTwoForEach() {
    'use strict';
    console.log(arrayTwo);
    arrayTwo.forEach(arrayTwoFunction);
}

document.getElementById("arrayTwo").addEventListener("click", arrayTwoForEach);
