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

let radic = 0;
kontakt_button.addEventListener("click", event => {
	
	radic += 1;
	event.preventDefault();

	console.log("mail.innerHTML");

	if (radic == 1) {
		
		style = {
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			padding: "50px 30px",
			transition: "all 300ms ease-in-out"

		}
	} else {
		style = {
			display: "none"
		};
		radic -= 2;
	}

	show_kontakt.style.width = style.width;
	show_kontakt.style.flexDirection = style.flexDirection;
	show_kontakt.style.justifyContent = style.justifyContent;
	show_kontakt.style.alignItems = style.alignItems;
	show_kontakt.style.padding = style.padding;
	
	setTimeout(function() {
		show_kontakt.style.display = style.display;
	}, 300);

	show_kontakt.appendChild(tel_cislo);
	show_kontakt.appendChild(mail);
	show_kontakt.appendChild(linkedIn);

	kontakt_button.appendChild(show_kontakt);
	console.log('end');

});

const brandOnTop = "assets/imgs/logo.png, assets/imgs/logo-2x.png 2x, assets/imgs/logo-3x.png 3x";
const brandScrolling = "assets/imgs/logo2.png, assets/imgs/logo2-2x.png 2x, assets/imgs/logo2-3x.png 3x";

$(window).scroll(function() {
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

});
