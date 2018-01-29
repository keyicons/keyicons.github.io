var subscribe = function () {


	var submit = $('#mc-embedded-subscribe'),
			input = $('#mce-EMAIL'),
			$resultElement = $('#resultElement'),
			$content_form = $('.content-email'),
			$form = $("#mc-embedded-subscribe-form");


	/*
	Validar que haya correo valido
	------------------------------*/
	submit.on('click', function(e){
		
		e.preventDefault();
		// console.log('clicked');

		$form.validate();
		if ($form.valid()) {
			// console.log('valid');
			
			submitSubscribeForm($form, $resultElement);
			
			setTimeout(function(){
				input.val('');
			}, 1000);
		}
		else{
			// console.log('no valid');
			$('#mce-EMAIL').focus();
		}
		
	});

	function submitSubscribeForm($form, $resultElement){
		
		$.ajax({
			type: "GET",
			url: $form.attr("action"),
			data: $form.serialize(),
			cache: false,
			dataType: "jsonp",
			jsonp: "c", // trigger MailChimp to return a JSONP response
			contentType: "application/json; charset=utf-8",
			error: function(error){
				// According to jquery docs, this is never called for cross-domain JSONP requests
			},
			
			success: function(data){
				if (data.result != "success") {
					var message = data.msg || "Sorry. Unable to subscribe. Please try again later.";
					$content_form.fadeOut();
					$resultElement.addClass("is-error").fadeIn();

					if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
						message = "<p>You're already subscribed. Thank you.</p> <br> <a href='http://keyicons.com/public/keyicons_library.zip' class='btn btn-secondary'>Download Library again</a> ";
						$content_form.fadeOut();
						$resultElement.removeClass("is-error").addClass("is-success").fadeIn();
					}

					$resultElement.html(message);

				} else {
					$content_form.fadeOut();
					$resultElement.removeClass("is-error").addClass("is-success");
					$resultElement.html("Thank you!<br>You must confirm the subscription in your inbox.").fadeIn();
				}
			}
		});
  }


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
	 	$('#mce-EMAIL').val('');
	 	$('#mce-NAME').val('');
	 	$content_form.fadeIn();
	 	$resultElement.fadeOut();
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