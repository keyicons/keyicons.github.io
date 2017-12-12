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


	var modal = $('.Modal'),
		btn_download = $('.js-download'),
		btn_close = $('#Modal-Close');

	btn_download.on('click', function(e){
		e.preventDefault();
		modal.addClass('is-open');
		$('#mce-EMAIL').focus();
	});

	function closeModal(){
	 	modal.removeClass('is-open');
	}

	$(document)
		.on('click', '[href="#closer"]', function(e){
	    e.preventDefault();
	    closeModal();
	    })
	.keydown(function(tecla){
		if(modal.hasClass('is-open')){
	    if (tecla.keyCode == 27) { 
        closeModal();
	    }
	  }
	});

}

module.exports = subscribe;