/*!
	Theme Name: keyicons
	Theme Name: keyicons
	Theme URI: http://keyicons.com
	Author: @noyonosoyesa & @mishortcut
	Author URI: https://dribbble.com/hellmcnamara & http://minz.design 
	Author Contact: hello@keyicons.com
	Description: Pixel perfect set icons design.
	Version: 1.0
	Copyright 2017
*/

var topbar = require('./libs/topbar');

var keyicons = require('./libs/keyicons');

var subscribe = require('./libs/subscribe');

jQuery(document).ready(function($) {

	console.log('%cHello, I see you worry about how I am built, Regards!', "color: red");

  topbar();
  keyicons();
  subscribe();

});





