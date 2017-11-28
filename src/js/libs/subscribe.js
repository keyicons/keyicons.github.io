var subscribe = function () {

	var subscribe_content = $('.Footer_Subscribe'),
			btn_download = $('.js-download');

	btn_download.on('click', function(e){
		subscribe_content.addClass('is-scrolled');
	});

var previousScroll = 0,
   	originalTop = subscribe_content.offset().top;

 $(window).scroll(
 	function(e){
 		if ($(this).scrollTop() <= originalTop) {
 			subscribe_content.addClass('is-scrolled');
 		}
    else {
    	subscribe_content.removeClass('is-scrolled');
    }
});

}

module.exports = subscribe;