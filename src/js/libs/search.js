var search = function () {

	// onkeyup
	// myFunction

	function myFunction() {

		    // Declare variables
		    var input, filter, icon, a, i;
		    input = $('#searchKeyicons');
		    filter = input.val().toUpperCase();
		    icon = $('.keyicon');

		    // Loop through all iconst items, and hide those who don't match the search query
		    for (i = 0; i < icon.length; i++) {
		        a = icon[i].getElementsByTagName("span")[0];
		        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
		            icono =  icon[i];
		            icono.style.display = "";
		        }
		        else {
		            icono =  icon[i];
		            icono.style.display = "none";
		        }
		    }
		}

	$('#searchKeyicons').on('keyup', function(){

		myFunction();

	});

}
module.exports = search;