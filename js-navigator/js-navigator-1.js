/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

function navigatorOneFunction() {
    'use strict';
    document.getElementById("navigatorOneOutput").innerHTML += "appCodeName: " + navigator.appCodeName + "<br>";
    document.getElementById("navigatorOneOutput").innerHTML += "appName: " + navigator.appName + "<br>";
    document.getElementById("navigatorOneOutput").innerHTML += "appVersion: " + navigator.appVersion + "<br>";
    document.getElementById("navigatorOneOutput").innerHTML += "cookieEnabled: " + navigator.cookieEnabled + "<br>";
    document.getElementById("navigatorOneOutput").innerHTML += "geolocation : " + navigator.geolocation + "<br>";
    document.getElementById("navigatorOneOutput").innerHTML += "geolocation.getCurrentPosition : " + navigator.geolocation.getCurrentPosition + "<br>";
    document.getElementById("navigatorOneOutput").innerHTML += "language: " + navigator.language + "<br>";
    document.getElementById("navigatorOneOutput").innerHTML += "onLine: " + navigator.onLine + "<br>";
    document.getElementById("navigatorOneOutput").innerHTML += "platform: " + navigator.platform + "<br>";
    document.getElementById("navigatorOneOutput").innerHTML += "product: " + navigator.product + "<br>";
    document.getElementById("navigatorOneOutput").innerHTML += "userAgent: " + navigator.userAgent + "<br>";
}

document.getElementById("navigatorOneButton").addEventListener("click", navigatorOneFunction);

// TODO: Change from http to https.
// A Geolocation request can only be fulfilled in a secure context.

var navigatorGeolocationOutput = document.getElementById("navigatorGeolocationOutput").innerHTML;

function showPosition(position) {
    'use strict';
    navigatorGeolocationOutput = "Latitude: " + position.coords.latitude + "<br>" + "Longitude: " + position.coords.longitude;
}

function navigatorGeolocationFunction() {
    'use strict';
    navigatorGeolocationOutput = document.getElementById("navigatorGeolocationOutput").innerHTML;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        navigatorGeolocationOutput = "else";
    }
}

document.getElementById("navigatorGeolocationButton").addEventListener("click", navigatorGeolocationFunction);
