/*!
	Theme Name: keyicons
	Theme Name: keyicons
	Theme URI: http://keyicons.com
	Author: @noyonosoyesa & @mishortcut
	Author URI: Jay & https://migue.design 
	Author Contact: hello@keyicons.com
	Description: Pixel perfect set icons design.
	Version: 1.0
	Copyright 2017
*/

var topbar = require('./libs/topbar');

var keyicons = require('./libs/keyicons');

var subscribe = require('./libs/subscribe');

var shared = require('./libs/shared');

var search = require('./libs/search');

var lightDark = require('./libs/lightDark');


jQuery(document).ready(function($) {

	// console.log('%cHello, I see you worry about how I am built, Regards!', "color: red");
	lightDark();
	keyicons();
	// subscribe();
	shared();
	search();

});





