var keyicons = function () {

	$('.KeyiconsContent').html('');

	$.ajax({
	    
	    url: 'public/js/keyicons.json',
	    dataType: 'JSON',
	    success: function(res) {
	    	printKeyicons(res);
	    }
	  });

	function printKeyicons(res){

		var templateKeyicon = 	"<div class='key' data-category=':tag:'>"+
														"<a href=':link:' download class='keyicon :keyiconNew:'>"+
														"<span class='keyicon_name'>:name: <span class='keyicon_aka'>:aka:</span></span>"+
														"<img src=':img:' alt=''>"+
														"<span class='keyicon_download'>Download</span>"+
														":type:"+
														"</a>"+
														"</div>",
		url = "./public/iconset/",
		n = 0;

		$.each( res.keyicons, function(i, val){

			img = url + val.name +'.svg';
			link = url + val.name +'.svg';
			
			// Random function for numbers on New label
			function NumerosAleatorios(min, max) {
				randomColor = Math.round(Math.random() * (max - min) + min);
				if(randomColor == 1){ return "newBlue"}
				else if(randomColor == 2){return "newOrange"}
				else{return "newPink"}
				
			}
			randomColor = NumerosAleatorios(1, 3);
			anotherColor = "<span class='keyicon-new " + randomColor + "'>New</span>";

			// Si hay iconos nuevos que se pinten de otro color
			type = val.type == 1 ? anotherColor : "";
			keyiconNew = val.type == 1 ? randomColor : "";

			// AKA : para términos relacionados
			aka = val.aka != "" ? " / " + val.aka : ""	

			// Remplace all values
			var itemsKey = templateKeyicon
					.replace(':name:', val.name)
					.replace(':aka:', aka)
					.replace(':link:', link)
					.replace(':img:', img)
					.replace(':type:', type)
					.replace(':tag:', val.tag)
					.replace(':keyiconNew:', keyiconNew)
					
					addKeyicon(itemsKey);

					n++;
  		});

	}

	function addKeyicon(itemsKey){
		// console.log(itemsKey);
		$('.KeyiconsContent').append($(itemsKey));


		
	}

	// Agregar la clase .is-clicked a los keyicons que se clickean
	$('body').on('click', '.keyicon', function(e){
		// Agregar la clase Downloaded
		$(this).addClass('is-clicked');
		// Agregar Donloaded feedback
		$(this)[0].childNodes[2].innerHTML = "Downloaded";
		

	});



}

module.exports = keyicons;