/*jslint
browser, devel, es6
*/
/*global
window
*/

let numberOne = 123;
let numberTwo = +456;
let numberThree = -789;
let numberFour = 0.123;
// let numberfive = 0,456;
let numberSix = 123.0; // 123.00

let stringOne = "stringOne";
let stringTwo = "123";

let undefinedVariable = undefined;

function convertToNumberFunction() {
    'use strict';

    document.getElementById("outputOne").innerHTML += numberOne + ": " + Number(numberOne) + "<br>";
    document.getElementById("outputOne").innerHTML += numberTwo + ": " + Number(numberTwo) + "<br>";
    document.getElementById("outputOne").innerHTML += numberThree + ": " + Number(numberThree) + "<br>";
    document.getElementById("outputOne").innerHTML += numberFour + ": " + Number(numberFour) + "<br>";
    document.getElementById("outputOne").innerHTML += numberSix + ": " + Number(numberSix) + "<br>";

    document.getElementById("outputOne").innerHTML += stringOne + ": " + Number(stringOne) + "<br>";
    document.getElementById("outputOne").innerHTML += stringTwo + ": " + Number(stringTwo) + "<br>";

    document.getElementById("outputOne").innerHTML += undefinedVariable + ": " + Number(undefinedVariable) + "<br>";

    document.getElementById("outputTwo").innerHTML += numberOne + ": " + Number.isInteger(numberOne) + "<br>";
    document.getElementById("outputTwo").innerHTML += numberTwo + ": " + Number.isInteger(numberTwo) + "<br>";
    document.getElementById("outputTwo").innerHTML += numberThree + ": " + Number.isInteger(numberThree) + "<br>";
    document.getElementById("outputTwo").innerHTML += numberFour + ": " + Number.isInteger(numberFour) + "<br>";
    // document.getElementById("outputTwo").innerHTML += numberFive + ": " + Number.isInteger(numberFive) + "<br>";
    document.getElementById("outputTwo").innerHTML += numberSix + ": " + Number.isInteger(numberSix) + "<br>";

    document.getElementById("outputTwo").innerHTML += stringOne + ": " + Number.isInteger(stringOne) + "<br>";
    document.getElementById("outputTwo").innerHTML += stringTwo + ": " + Number.isInteger(stringTwo) + "<br>";

    document.getElementById("outputTwo").innerHTML += undefinedVariable + ": " + Number.isInteger(undefinedVariable) + "<br>";
}

document.getElementById("convertToNumberButton").addEventListener("click", convertToNumberFunction);

convertToNumberFunction();
