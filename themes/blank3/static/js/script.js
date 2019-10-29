/* GLOBALS */
var windowHeight;

/* FUNCTIONS TO BE RAN ONCE EVERY TIME PAGE IS LOADED */
$(document).ready(function() {
	getWindowHeight();
	wooshHeader();
	wooshArticleHeader();
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





// var articleTitleHeight = $('.article-title').height();
// var articleAuthorImageHeight = $('.article-author-image').height() * 1.5;

// var scrollTotal = articleTitleHeight + articleAuthorImageHeight;

// setTimeout(scrollTitleUp, 500);

// function scrollTitleUp() {
// $("html, body").animate({ scrollTop: scrollTotal }, 1000);
// }

// $('.hamburger').click(function(){
//     $('.nav').toggle();
// })

// $(document).scroll(function() {
//     var dist = $(document).scrollTop();
//     if(dist > 1000){ // Remove top-bar from header
//     	$('.nav').addClass('sticky');
//     }
//     else{ // Add top-bar to header
//     	$('.nav').removeClass('sticky');
//     }
// })

// window.addEventListener("scroll", function() {
// 	var elementTarget = document.getElementById("header");
// 	if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
// 		$('.header').addClass('sticky');
// 	} else{
// 		$('.header').removeClass('sticky');
// 	}
// });