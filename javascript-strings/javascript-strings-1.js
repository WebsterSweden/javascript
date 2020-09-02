/*jslint
browser, devel
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
