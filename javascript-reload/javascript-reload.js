/*jslint
browser, devel
*/
/*global
window
*/

function changeColor() {
    "use strict";
    document.getElementById("changeColorOutput").style.backgroundColor = "red";
}

document.getElementById("changeColor").addEventListener("click", changeColor);


function softRefresh() {
    'use strict';
    window.location.reload();
}

document.getElementById("reload").addEventListener("click", softRefresh);

function softRefreshFalse() {
    'use strict';
    window.location.reload(false);
}

document.getElementById("reloadFalse").addEventListener("click", softRefreshFalse);

function softRefreshTrue() {
    'use strict';
    window.location.reload(true);
}

document.getElementById("reloadTrue").addEventListener("click", softRefreshTrue);
