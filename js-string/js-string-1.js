/*jslint
browser, devel, es6
*/
/*global
window
*/

var stringOne = "This is string number one";
var stringTwo = "This is string number two";

console.log(stringOne + " = " + stringOne.length);

var textInnerHtml = document.getElementById("textSampleOne").innerHTML;

console.log(textInnerHtml);

var textInnerText = document.getElementById("textSampleOne").innerText;

console.log(textInnerText);

var textTextContent = document.getElementById("textSampleOne").textContent;

console.log(textTextContent);

// Escape characters.
// \b \f \n \r \t \v

console.log("Backspace Escape Character: " + "backspace\bbackspace");

console.log("Form Feed Escape Character: " + "formfeed\fformfeed");

console.log("New Line Escape Character: " + "newline\nnewline");

console.log("Carriage Return Escape Character: " + "carriagereturn\rcarriagereturn");

console.log("Horizontal Tabulator Escape Character: " + "horizontaltabulator\thorizontaltabulator");

console.log("Vertical Tabulator Escape Character: " + "verticaltabulator\vverticaltabulator");
