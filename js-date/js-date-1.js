/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

let dateTime = new Date();

let getDate = dateTime.getDate();
let getDay = dateTime.getDay();
let getFullYear = dateTime.getFullYear();
let getHours = dateTime.getHours();
let getMilliseconds = dateTime.getMilliseconds();
let getMinutes = dateTime.getMinutes();
let getMonth = dateTime.getMonth();
let getSeconds = dateTime.getSeconds();
let getTime = dateTime.getTime();
let getTimezoneOffset = dateTime.getTimezoneOffset();
let getUTCDate = dateTime.getUTCDate();
let getUTCDay = dateTime.getUTCDay();
let getUTCFullYear = dateTime.getUTCFullYear();
let getUTCHours = dateTime.getUTCHours();
let getUTCMilliseconds = dateTime.getUTCMilliseconds();
let getUTCMinutes = dateTime.getUTCMinutes();
let getUTCMonth = dateTime.getUTCMonth();
let getUTCSeconds = dateTime.getUTCSeconds();
let getYear = dateTime.getYear();

document.getElementById("dateOne").addEventListener("click", function () {
    'use strict';
    document.getElementById("getDate").innerText = "getDate(): " + getDate;
    document.getElementById("getDay").innerText = "getDay(): " + getDay;
    document.getElementById("getFullYear").innerText = "getFullYear(): " + getFullYear;
    document.getElementById("getHours").innerText = "getHours(): " + getHours;
    document.getElementById("getMilliseconds").innerText = "getMilliseconds(): " + getMilliseconds;
    document.getElementById("getMinutes").innerText = "getMinutes(): " + getMinutes;
    document.getElementById("getMonth").innerText = "getMonth(): " + getMonth;
    document.getElementById("getSeconds").innerText = "getSeconds(): " + getSeconds;
    document.getElementById("getTime").innerText = "getTime(): " + getTime;
    document.getElementById("getTimezoneOffset").innerText = "getTimezoneOffset(): " + getTimezoneOffset;
    document.getElementById("getUTCDate").innerText = "getUTCDate(): " + getUTCDate;
    document.getElementById("getUTCDay").innerText = "getUTCDay(): " + getUTCDay;
    document.getElementById("getUTCFullYear").innerText = "getUTCFullYear(): " + getUTCFullYear;
    document.getElementById("getUTCHours").innerText = "getUTCHours(): " + getUTCHours;
    document.getElementById("getUTCMilliseconds").innerText = "getUTCMilliseconds(): " + getUTCMilliseconds;
    document.getElementById("getUTCMinutes").innerText = "getUTCMinutes(): " + getUTCMinutes;
    document.getElementById("getUTCMonth").innerText = "getUTCMonth(): " + getUTCMonth;
    document.getElementById("getUTCSeconds").innerText = "getUTCSeconds(): " + getUTCSeconds;
    document.getElementById("getYear").innerText = "getYear(): " + getYear;
});
