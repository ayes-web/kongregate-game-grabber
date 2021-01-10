// ==UserScript==
// @name         kongregate game grabber
// @namespace    kongregate
// @version      0.2
// @description  finds the direct links to web games on kongregate
// @author       ayes-web
// @include      https://www.kongregate.com/games/*
// @downloadURL  https://github.com/ayes-web/kongregate-game-grabber/raw/master/kongregate-game-grabber.user.js
// ==/UserScript==

(function() {
    'use strict';
    var regex = /game(\d+)\.konggames\.com\/gamez\/[0-9]{4}\/[0-9]{4}\/live\/index\.html/
    var match = regex.exec(document.getElementById("game").innerHTML);

    var info = document.createElement("li");
    info.innerHTML = "<a href='https://" + match[0] + "' target='_blank'><span style='color: #888' aria-hidden='true' class='kong_ico add prs'>+</span>Open file in new page</a>";
    info.classNames = "play_later lbOn"
    info.id = "quicklinks_play_later_block"
  
    var game_table = document.getElementById("quicklinks");
    game_table.prepend(info);
})();
