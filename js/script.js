const brandOnTop = "assets/imgs/logo.png, assets/imgs/logo-2x.png 2x, assets/imgs/logo-3x.png 3x";
const brandScrolling = "assets/imgs/logo2.png, assets/imgs/logo2-2x.png 2x, assets/imgs/logo2-3x.png 3x";
const videoPath = "assets/videos/";
var trigger = false;
var hash = "#chemex";

// navigation bar dropdowns
$('.dropdown').hover(() => {
	$('.dropdown-menu').slideDown( "fast" );
}, () => {
	$('.dropdown-menu').slideUp("slow");
})

// navigation bar brand changing
if ($(".navbar").offset().top > 50) {
	$('.navbar').addClass('affix');
	$('.navbar-brand img').attr('src','assets/imgs/logo2.png');
	$('.navbar-brand img').attr('srcset', brandScrolling);
}

// redirect after click on button 
$('.button-img').click(function() {	
	window.location.replace('eshop.html');
})

$(window).scroll(function() {
	if ($('.navbar').offset().top > 150) {

	}
	if ($('.navbar').offset().top >= $('#chemex').offset().top){
		// $('#methods-nav').show();
	} else {
		$('#methods-nav').hide();
	}
	if ($(".navbar").offset().top > 50) {
        $('.navbar').addClass('affix');
        // $(".navbar-fixed-top").addClass("top-nav-collapse");
		$('.navbar-brand img').attr('src','assets/imgs/logo2.png');
		$('.navbar-brand img').attr('srcset', brandScrolling);
    } else {
        $('.navbar').removeClass('affix');
        // $(".navbar-fixed-top").removeClass("top-nav-collapse");
		$('.navbar-brand img').attr('src','assets/imgs/logo.png')
		$('.navbar-brand img').attr('srcset', brandOnTop);
	}  
	let targetPos
	if (hash === "")
		targetPos = 0;
	else
		targetPos = $(hash).offset().top;

	let scrollPos = $('.navbar').offset().top;
	if (scrollPos == targetPos) {
		console.log(targetPos)
		console.log(scrollPos)
		// disableScroll();
	}
});

// CAROUSEL logic
if (document.querySelector(".button-right") != null && 
	document.querySelector(".button-left") != null) {
	let slides = document.querySelectorAll(".mycarousel .mycarousel-item");
	let currentSlide = 0;
	const nextButton = document.querySelector(".button-right");
	const prevButton = document.querySelector(".button-left");

	function nextSlide() {
		slides[currentSlide].className = 'mycarousel-item';
		currentSlide = (currentSlide + 1) % slides.length;
		slides[currentSlide].className = 'mycarousel-item show';
	}

	function prevSlide() {
		slides[currentSlide].className = 'mycarousel-item';
		currentSlide = (currentSlide - 1) % slides.length;
		if (currentSlide < 0)
			currentSlide = slides.length - 1;
		slides[currentSlide].className = 'mycarousel-item show';
	}

	nextButton.addEventListener("click", () => {
		nextSlide();
	});
	prevButton.addEventListener("click", () => {
		prevSlide();
	});


	function positionSliderButton() {
		let slider = document.querySelector('.mycarousel');
		let sliderHeight = slider.getBoundingClientRect().height;
		let buttons = document.querySelectorAll('.slider-button');

		for (button of buttons) {
			let buttonHeight = button.getBoundingClientRect().height;
			button.style.top = (((sliderHeight - buttonHeight) / 2).toString()) + "px";
		}
	}
	positionSliderButton();

	window.addEventListener('resize', () => {
		positionSliderButton();
	});
}

// DYNAMIC PHOTO GALLERY
if (document.title == "Chemex | Coffeehub.store"){
	const productImgs = $('.product-image');
	const gallery = $('<div></div>').addClass('gallery');
	const galleryImgs = productImgs;
	let controls = $('<div></div>').addClass('controls');
	let openGallery = false;

	productImgs.click(function(){
		$('body').append(gallery);
		openGallery = true;

		let imgPath = $(this).attr('src');
		let galleryDiv = $('.gallery');
		let currImg = $('<img>').attr('src',imgPath).addClass('current-image');
		galleryDiv.append(currImg);
		galleryDiv.append(controls);
		$('.controls').append("<img class='prev-img' src='assets/icons/arrow-down-2x.png'>");
		$('.controls').append("<img class='next-img' src='assets/icons/arrow-down-2x.png'>");

		$('.gallery').click(function(event) {
			
			if($('.current-image').length && openGallery){
				if (!$(event.target).parent('div').hasClass('controls') && !$(event.target).hasClass('controls')) {
					if(!$(event.target).closest('.current-image').length) {
						$('.controls').empty();
						$('.gallery').empty().remove();
					}
				}
			}
		});

		$('.prev-img').click(function(){

			let curSrc = $('.current-image')[0].src;
			let iter = 0;
			if($('.current-image').length && openGallery){
				
				galleryImgs.each(function() {
					let prevSrc = $(this)[0].src;
					// found the current index
					if (curSrc == prevSrc) {
						return false;
					}
					iter++;
				});	
				let i = (iter - 1) % galleryImgs.length;
				if (i < 0)
					i = galleryImgs.length -1;

				$('.current-image')[0].src = galleryImgs[i].src
			}
		})
		$('.next-img').click(function(){
			let curSrc = $('.current-image')[0].src;
			let iter = 0;
			if($('.current-image').length && openGallery){
				
				galleryImgs.each(function() {
					let prevSrc = $(this)[0].src;
					// found the current index
					if (curSrc == prevSrc) {
						return false;
					}
					iter++;
				});	
				let i = (iter + 1) % galleryImgs.length;
				if (i >= galleryImgs.length)
					i = 0;

				$('.current-image')[0].src = galleryImgs[i].src
			}
		})
	});
}

// COUNTER
if (document.title == "Eshop | Coffeehub.store"){

	const completeDate = new Date('January 1, 2020 00:00:00').getTime();
	const counter = $('#counter').children('h1');

	var x = setInterval(function() {
	  
		var today = new Date().getTime();
		var diff = completeDate - today;
	  
		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((diff % (1000 * 60)) / 1000);
		console.log(days, hours, minutes, seconds);
		counter.text(days + "d " + hours + "h "+ minutes + "m " + seconds + "s ");
	  
		// finished
		if (diff < 0) {
		  clearInterval(x);
		  document.getElementById("demo").innerHTML = "EXPIRED";
		}
	  }, 1000);
}