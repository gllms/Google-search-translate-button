// ==UserScript==
// @name         Google Search Translate Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a Translate button to the Google Search page
// @author       Gllms
// @match        *www.google.com/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var search = document.getElementById("lst-ib").value;
    var url = "https://translate.google.com/#auto/en/" + search;
    document.getElementById("hdtb-msb-vis").innerHTML += `<div class="hdtb-mitem hdtb-imb"><a class="q qs" href="${url}">Translate</a></div>`;
})();
