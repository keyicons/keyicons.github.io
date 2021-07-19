var shared = function () {

	var icon = $('.keyicon'),
			closeShared = $('#CloseShared'),
			img = $('.Shared-Img img'),
			shared = $('.Shared');

	$('body').on('click', '.keyicon', function(){

		// console.log('shared-icons');
		
		shared.addClass('is-open');
		
		algo = $(this).attr('href');
		// console.log(algo);

		img.attr('src', algo);

		setTimeout(function(){
			shared.removeClass('is-open');
		}, 5000);

	});

	closeShared.on('click', function(){

		shared.removeClass('is-open');

	});



	}

module.exports = shared;