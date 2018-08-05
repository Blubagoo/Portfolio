[
    "../images/headshot.jpg"
].forEach(function(url){
    new Image().src = url;
});
let index = 0;
// listen for button navigation
function listenForEvent() {
	$('.contact-btn').on('click', (e) => {
		console.log('button pressed');
		e.preventDefault();
		$('#js-area').show();
		$('#js-area').html(generateContactDetails());
		// $('body').css({
		// 	"background": "linear-gradient(0.25turn, rgb(122, 93, 203), rgb(150, 120, 208), rgb(122, 93, 203))"
		// });
		$('header').html(`
			<h1 role="banner" class="banner" align="center">Contact Details</h1>
			`);
	});
	$('.intro-btn').on('click',(e) => {
		$('#js-area').html(generateIntroduction());
		// $('body').css({
		// 	"background": "linear-gradient(0.25turn, rgb(104, 158, 250), rgb(124, 165, 246), rgb(104, 158, 250))"
		// });
		$('header').html(`
			<h1 role="banner" class="banner" align="center">Introduction</h1>
			`);
	});
	$('.skills-btn').on('click', (e) => {
		$('#js-area').html(generateSkillset());
		// $('body').css({
		// 	"background": "linear-gradient(0.25turn, rgb(133, 194, 21), rgb(154, 224, 30), rgb(133, 194, 21))"
		// });
		$('header').html(`
			<h1 role="banner" class="banner" align="center">Skillset / Keywords</h1>
			`);
	});
	$('.exp-btn').on('click', (e) => {
		$('#js-area').html(generateWorkExperience());
		// $('body').css({
		// 	"background": "linear-gradient(0.25turn, rgb(221, 128, 9), rgb(247, 155, 37), rgb(221, 128, 9))"
		// });
		$('header').html(`
			<h1 role="banner" class="banner" align="center">Work Experience</h1>
			`);
	});
	$('.project-btn').on('click', (e) => {
		$('#js-area').html(generateProjects());
		// $('body').css({
		// 	"background": "linear-gradient(0.25turn, rgb(254, 89, 83), rgb(235, 133, 131), rgb(254, 89, 83))"
		// });
		$('header').html(`
			<h1 role="banner" class="banner" align="center">Projects</h1>
			`);
	});
	$('#enter-btn').on('click', (e)=> {
		e.preventDefault();
		$('.intro-div').hide();
		$('.body-head').show();
		$('#foot').show();
		$('#friendly').show();
		$('.contact-box').show();
		$('#js-area').show();
		$('footer').show();
		$('.nav').show();
		$('#introduction').hide();
		$('#skillset').hide();
		$('#work-exp').hide();
		$('#contact-details').hide();
		$('#project-btn').hide();

	})
	$('.btn-div').hover(() => {
		$('#text-hide').show();
		$('#introduction').css({
			"display": "block"
		});
		$('#skillset').css({
			"display": "block"
		});
		$('#work-exp').css({
			"display": "block"
		});
		$('#contact-details').css({
			"display": "block"
		});
		$('#project-btn').css({
			"display": "block"
		});
	})
	.mouseout(() => {

		$('#introduction').css({
			"display": "none"
		});
		$('#skillset').css({
			"display": "none"
		});
		$('#work-exp').css({
			"display": "none"
		});
		$('#contact-details').css({
			"display": "none"
		});
		$('#project-btn').css({
			"display": "none"
		});
		$('#text-hide').css({
			"display": "none"
		});
	})
}


$(listenForEvent);
