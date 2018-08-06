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
		$('header').html(`
			<h1 role="banner" class="banner" align="center">Contact Details</h1>
			`);
	});
	$('.intro-btn').on('click',(e) => {
		$('#js-area').html(generateIntroduction());
		$('header').html(`
			<h1 role="banner" class="banner" align="center">Introduction</h1>
			`);
	});
	$('.skills-btn').on('click', (e) => {
		$('#js-area').html(generateSkillset());
		$('header').html(`
			<h1 role="banner" class="banner" align="center">Skillset / Keywords</h1>
		`);
	});
	$('.exp-btn').on('click', (e) => {
		$('#js-area').html(generateWorkExperience());
		$('header').html(`
			<h1 role="banner" class="banner" align="center">Work Experience</h1>
		`);
	});
	$('.project-btn').on('click', (e) => {
		$('#js-area').html(generateProjects());
		$('header').html(`
			<h1 role="banner" class="banner" align="center">Projects</h1>
		`);
	});
	$('#edu-btn').on('click', (e) => {
		$('#js-area').html(generateEducation());
		$('header').html(`
			<h1 role="banner" class="banner" align="center">Education</h1>
		`);
	})
	setTimeout(()=> {
		$('.intro-div').hide();
		$('.body-head').show();
		$('#foot').show();
		// $('#friendly').show();
		$('.contact-box').show();
		$('#js-area').show();
		$('footer').show();
		$('.nav').show();
		$('#introduction').hide();
		$('#skillset').hide();
		$('#work-exp').hide();
		$('#contact-details').hide();
		$('#project-btn').hide();
		$('#edu-btn').hide();
	}, 1000 * 4);
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
		$('#edu-btn').css({
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
		$('#edu-btn').css({
			"display": "none"
		});
		$('#text-hide').css({
			"display": "none"
		});			
	})
}

$(listenForEvent);

