/* GLOBALS */
var windowHeight;

/* FUNCTIONS TO BE RAN ONCE EVERY TIME PAGE IS LOADED */
$(document).ready(function() {
	getWindowHeight();
	wooshHeader();
	fadeInArticleImage();
	//wooshArticleHeader();
});

/* FUNCTIONS TO BE RAN EVERY TIME USER RESIZES BROWSER WINDOW */
$(window).resize(function(){
	getWindowHeight();
});

/* FUNCTIONS TO BE RAN EVERY TIME USER SCROLLS */
$(window).scroll(function() {
	fixedNavOrNah();
});


// FUNCTIONS

function fadeInArticleImage(){
	$('.article-image').fadeIn();
}

function fixedNavOrNah(){
	var fromTop = $(window).scrollTop();
	var headerHeight = $('.header').outerHeight();

	if(fromTop >= windowHeight - headerHeight){ 
		$('.header').addClass('sticky');
	} else{
		$('.header').removeClass('sticky');
		$('.header').css('bottom', '0');
	} 
}

function getWindowHeight(){
	windowHeight = $(window).height();
}

function wooshHeader(){
	var fromTop = $(window).scrollTop();
	console.log(fromTop);

	if(fromTop > 0){ 
		fixedNavOrNah(); // check to see if sticky or bottom 0
	} else { // at very top of page so woosh
		$('.header').animate({
			bottom: '0'
		}, 500);
	}
}


function wooshArticleHeader(){

	if($('body').hasClass('is-article')){

		setTimeout(function(){

			$('.parallax').animate({
				'margin-top': '75vh'
			}, 500);

		}, 500);

	}
}
