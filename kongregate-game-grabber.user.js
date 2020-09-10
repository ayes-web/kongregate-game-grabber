// ==UserScript==
// @name         kongregate game grabber
// @namespace    kongregate
// @version      0.1
// @description  finds the direct links to web games on kongregate
// @author       ayes-web
// @include      https://www.kongregate.com/games/*
// @downloadURL https://github.com/ayes-web/kongregate-game-grabber/raw/master/kongregate-game-grabber.user.js
// ==/UserScript==

(function() {
    'use strict';
    var regex = /game(\d+)\.konggames\.com\/gamez\/[0-9]{4}\/[0-9]{4}\/live\/index\.html/
    var match = regex.exec(document.getElementById("game").innerHTML);

    var info = document.createElement("div");
    info.innerHTML = "<a href='https://" + match[0] + "' target='_blank' style='color:white; text-align: center; margin: 10px; font-size: 30px;'>Open in new page</a>";
    var game_table = document.getElementById("floating_game_holder");
    game_table.appendChild(info);
})();
