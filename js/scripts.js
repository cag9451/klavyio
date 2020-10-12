document.addEventListener('DOMContentLoaded', function() {
	console.log( 'init' );

	var menu_state = 'closed';
	var $body = document.querySelector('body');
	var $menu_burger = document.querySelector('.js-toggle_menu');
	var $menu_burger_close = document.querySelector('.js-mobilemenu_closer');

	var toggle_mobile_menu = function () {
		if ( menu_state === 'closed' ) {
			$menu_burger.classList.add( 'active' );
			$body.classList.add( 'noscroll' );
			document.querySelector( '.js-mobilemenu' ).classList.add( 'active' );
			menu_state = 'opened';
		} else {
			$menu_burger.classList.remove( 'active' );
			$body.classList.remove( 'noscroll' );
			document.querySelector( '.js-mobilemenu' ).classList.remove( 'active' );
			menu_state = 'closed';
		}
	}

	$menu_burger.addEventListener('click', function(event) {
		event.preventDefault();
		toggle_mobile_menu();
	});

	$menu_burger_close.addEventListener('click', function(event) {
		event.preventDefault();
		toggle_mobile_menu();
	});
});