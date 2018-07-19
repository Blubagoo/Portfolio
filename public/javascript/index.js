[
    "../images/calmbg.jpg",
    "../images/calmbg1.jpg",
    "../images/calmbg2.jpg",
    "../images/calmbg3.jpg"
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
		$('.body').css("background-image","url('images/calmbg2.jpg')");
		$('.body').css("background-image","url('images/calmbg3.jpg')");
		$('.enter-btn').hide();
		$('header').show();
		$('#js-area').show();
		$('nav').css({
			"display": "flex",
			"justify-content": "space-around",
		})
		$('button').css({
			"background-color": "rgba(242, 236, 223, 0.7)"
		})
	})
}


$(listenForEvent);
