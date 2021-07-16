var topbar = function () {
	var header = $('.Header'),
			previousScroll = 0,
    	originalTop = header.offset().top;
			console.log(previousScroll, originalTop);
  $(window).scroll(
  	function(e){
			var currentScroll = $(this).scrollTop();
  		if (currentScroll >= originalTop+400) {
  			header.addClass('is-scrolled');
				console.log('hola amigo');
  		}
	    else {
	    	header.removeClass('is-scrolled');
				console.log('adios amigo');
	    }
	});
}

module.exports = topbar;