// ==UserScript==
// @name         TimeGod
// @version      1.0.0
// @author       Ikzelf
// @include https://*.grepolis.com/game/*
// @exclude forum.*.grepolis.*/*
// @exclude wiki.*.grepolis.*/*
// @grant        none
// @noframes
// ==/UserScript==


(async function () {
  'use strict'
  setTimeout(() => {
    WndHandlerAttack.prototype.resetUnitInputs = function() {}
    MM.getCollections().MovementsRevoltAttacker[0].models = []
    MM.getCollections().MovementsRevoltDefender[0].models = []
    setInterval(() => {
      MM.getCollections().MovementsRevoltAttacker[0].models = []
      MM.getCollections().MovementsRevoltDefender[0].models = []
    }, 60 * 1000)
  }, 10 * 1000)
})()