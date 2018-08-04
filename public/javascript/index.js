[
    "../images/headshot.jpg"
].forEach(function(url){
    new Image().src = url;
});
let index = 0;
// listen for button navigation
function listenForEvent() {
	$('#contact-details').on('click', (e) => {
		console.log('button pressed');
		e.preventDefault();
		$('#js-area').show();
		$('#js-area').html(generateContactDetails());
	});
	$('#introduction').on('click',(e) => {
		$('#js-area').html(generateIntroduction());
	});
	$('#skillset').on('click', (e) => {
		$('#js-area').html(generateSkillset());
	});
	$('#work-exp').on('click', (e) => {
		$('#js-area').html(generateWorkExperience());
	});
	$('#projects').on('click', (e) => {
		$('#js-area').html(generateProjects());
	});
	$('#enter-btn').on('click', (e)=> {
		e.preventDefault();
		$('.enter-btn').hide();
		$('.banner').hide();
		$('.intro-box').show();
		$('#js-area').show();
		$('footer').show();
		$('nav').css({
			"display": "flex",
			"justify-content": "space-around",
		});
	})
}


$(listenForEvent);
