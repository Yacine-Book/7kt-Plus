// ==UserScript==
// @name         Normal scrollbar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match *://*.youtube.com/*
// @match *://*.youtu.be/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

function restoreScrollbar() {
  document.body.removeAttribute('standardized-themed-scrollbar');
  document.querySelector('html').removeAttribute('standardized-themed-scrollbar');
  Element.prototype.removeAttributes = function(...attrs) {
    attrs.forEach(attr => this.removeAttribute(attr));
  }
  document.querySelector('ytd-app').removeAttributes('scrollbar-rework', 'standardized-themed-scrollbar');
}

restoreScrollbar();
    document.querySelector('ytd-app').addEventListener('yt-visibility-refresh', restoreScrollbar);