function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
};
// disableScroll();
  
function enableScroll() { 
    window.onscroll = function() {}; 
}
const kontakt_button = document.getElementById("kontakt");
const padding = "15px";

const tel_cislo = document.createElement("p");
tel_cislo.innerHTML = "+421 902 611 679";
tel_cislo.style.paddingBottom = padding;

const mail = document.createElement("a");
mail.href = "martin.albert.187@gmail.com";
mail.innerHTML = "martin.albert.187@gmail.com";
mail.style.paddingBottom = padding;

const linkedIn = document.createElement("a");
linkedIn.href = "https://linkedin.com/in/martin-albert-29005a16b/";
linkedIn.innerHTML = "Linked In";

const show_kontakt = document.createElement("div");
show_kontakt.style.display = "none";


const brandOnTop = "assets/imgs/logo.png, assets/imgs/logo-2x.png 2x, assets/imgs/logo-3x.png 3x";
const brandScrolling = "assets/imgs/logo2.png, assets/imgs/logo2-2x.png 2x, assets/imgs/logo2-3x.png 3x";
const videoPath = "assets/videos/";
var trigger = false;

$('#scroll-down').click(function() {
	enableScroll();
	console.log('test')
});
if ($(".navbar").offset().top > 50) {
	$('.navbar').addClass('affix');
	$('.navbar-brand img').attr('src','assets/imgs/logo2.png');
	$('.navbar-brand img').attr('srcset', brandScrolling);
}
var hash = "#chemex";
$('a').each(function(){
	$(this).click(function(){
		enableScroll();
		hash = $(this)[0].hash;
	})
});

$(window).scroll(function() {
	if ($('.navbar').offset().top > 150) {

		// modify this so it can have a smooth transition between videos
		// $(window).one('scroll', function() {
			
		// 	if ($('.navbar').offset().top > 150) {
		// 		if (!trigger)
		// 			$('#main-video').attr('src', videoPath+"brewing_drops.mp4")
		// 		trigger = true;
		// 	} else {
		// 		if (trigger)
		// 			$('#main-video').attr('src', videoPath+"brewing_filter.mp4")
		// 		trigger = false;
		// 	}
		// });
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
