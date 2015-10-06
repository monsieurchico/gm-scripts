// ==UserScript==
// @name         SeLoger Price Gauge Corrector
// @version      0.1
// @description  Correct wrong gauge indicator
// @author       Romain Derocle <rderocle@gmail.com>
// @match        http://www.seloger.com/*
// @grant        none
// ==/UserScript==

var surface = parseFloat($('input[name="prixImmo-surface"]').val().replace(' ', ''));
var price = parseFloat($('input[name="prixImmo-bien"]').val().replace(' ', ''));
var min = parseFloat($('input[name="prixImmo-min"]').val().replace(' ', ''));
var max = parseFloat($('input[name="prixImmo-max"]').val().replace(' ', ''));

var percent = ((price / surface) - min) / (max - min) * 100;
$('.prixImmo-bien').css('width', percent + '%');
