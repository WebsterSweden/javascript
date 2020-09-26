/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

function functionOne() {
    'use strict';
    document.getElementById("functionOneOutput").innerText = "functionOne()";
}

document.getElementById("functionOneButton").addEventListener("click", functionOne);

function functionTwo() {
    'use strict';
    document.getElementById("functionTwoOutput").innerText = "functionTwo()";
}

document.getElementById("functionTwoButton").addEventListener("click", functionTwo());

function functionThree() {
    'use strict';
    document.getElementById("functionThreeOutput").innerText = "functionThree(\"argument\")";
}

document.getElementById("functionThreeButton").addEventListener("click", functionThree("argument"));

function functionFour(parameter) {
    'use strict';
    document.getElementById("functionFourOutput").innerText = parameter;
}

document.getElementById("functionFourButton").addEventListener("click", functionFour("argument"));

function functionFive(parameter) {
    'use strict';
    document.getElementById("functionFiveOutput").innerText = parameter;
}

function functionSix() {
    'use strict';
    var functionSixInputValue = document.getElementById("functionSixInput").value;
    document.getElementById("functionSixOutput").innerText = functionSixInputValue;
}

function functionSeven() {
    'use strict';
    var functionSevenInputValue = document.getElementById("functionSevenInput").value;
    document.getElementById("functionSevenOutput").innerText = functionSevenInputValue;
}

document.getElementById("functionSevenButton").addEventListener("click", functionSeven);
