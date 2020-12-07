/*jslint
browser, devel, es6, for
*/
/*global
window
*/

// bitwise, browser, convert, couch, devel, es6, eval, fudge, getset, long, node, single, this, white

console.log(document.currentScript);

// Date Object.
const dateObject = new Date();
// new Date(null);
// new Date(+0);

document.getElementById("dateObject").innerText = dateObject;

// Date now.
const dateNow = Date.now();

document.getElementById("dateNow").innerText = dateNow;

// Date parse since 1970-01-01 00:00:00 UTC. Returns the number of milliseconds.
// 1970-01-01T00:00:00.000+00:00
// 10-11-12
const dateParse = Date.parse("1970-01-01T00:00:00.000+00:00");

document.getElementById("dateParse").innerText = dateParse;

// Date since 1970-01-01 00:00:00 UTC.
const dateUtc = new Date(Date.UTC(0, 0, 0, 0, 0, 0, 0));

document.getElementById("dateUtc").innerText = dateUtc;

// Timezone difference in minutes from current locale host to UTC.
const timezoneOffset = dateObject.getTimezoneOffset();

document.getElementById("timezoneOffset").innerText = timezoneOffset;

// get time.
const dateGetTime = dateObject.getTime();

document.getElementById("getTime").innerText = dateGetTime;

// set time.
const dateSetTime = new Date();
dateSetTime.setTime(0);

document.getElementById("setTime").innerText = dateSetTime;

// Time now.
const currentMillisecond = dateObject.milliseconds;
const currentSecond = dateObject.seconds;
const currentMinute = dateObject.minutes;
const currentHour = dateObject.hours;
const currentDay = dateObject.days;
const currentDate = dateObject.Date;
const currentWeek = dateObject.weeks;
const currentMonth = dateObject.months;
const currentYear = dateObject.years;
const currentDecade = dateObject.decades;
const currentCentury = dateObject.centuries;
const currentMillenium = dateObject.milleniums;

// Supereons
// Eons
// Eras
// Periods
// Epochs
// Ages
