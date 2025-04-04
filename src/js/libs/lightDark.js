var lightDark = function () {
	
    //Theme Light & Dark
	function theme(){
		user = window.localStorage.getItem('user');
		render(user);
	}
	theme();

	$('.btn-lightDark').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('is-night');
		$('body').toggleClass('Dark');

		if($(this).hasClass('is-night')){
			const person = {
				theme: "Dark"
			}
			window.localStorage.setItem('user', JSON.stringify(person));
		}
		else{
			window.localStorage.removeItem('user');
		}
	})
	
	function render(user){
		user = user;
		if(user){
			$('.btn-lightDark').toggleClass('is-night');
			$('body').toggleClass('Dark');
		}
	}
    

}

module.exports = lightDark;