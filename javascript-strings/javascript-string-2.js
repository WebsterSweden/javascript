/*jslint
browser, devel, es6
*/
/*global
window
*/

var sentenceOne = document.getElementById("string-one").innerText;

function stringSplit() {
    'use strict';
    var splitOutputOne = sentenceOne.split();
    console.log(splitOutputOne);

    // Separate each character including whitespace.
    var splitOutputTwo = sentenceOne.split("");
    console.log(splitOutputTwo);

    var splitOutputThree = sentenceOne.split(" ");
    console.log(splitOutputThree);

    var splitOutputFour = sentenceOne.split(" ", 3);
    console.log(splitOutputFour);

    var splitOutputFive = sentenceOne.split("t");
    console.log(splitOutputFive);
}

document.getElementById("string-split").addEventListener("click", stringSplit);
