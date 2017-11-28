var subscribe = function () {


	var submit = $('#mc-embedded-subscribe'),
			input = $('#mce-EMAIL'),
			form = $("#mc-embedded-subscribe-form");


	/*
	Validar que haya correo valido
	------------------------------*/
	submit.on('click', function(e){
		
		e.preventDefault();
		// console.log('clicked');

		form.validate();
		if (form.valid()) {
			// console.log('valid');
			form.submit();
			setTimeout(function(){
				input.val('');
			}, 1000);
		}
		
	});

	/*
	Mensajes personalizados 
	------------------------------*/
	// jQuery.extend(jQuery.validator.messages, {
	//     required: "👆 This field is required.",
	//     email: "👀 Please enter a valid email address.",
	// });



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