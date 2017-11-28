var topbar = function () {

	var header = $('.Header'),
			previousScroll = 0,
    	originalTop = header.offset().top;

  $(window).scroll(
  	function(e){
  		if ($(this).scrollTop() >= originalTop + 50) {
  			header.addClass('is-scrolled');
  		}
	    else {
	    	header.removeClass('is-scrolled');
	    }
	});
}

module.exports = topbar;