let index = 0;
// listen for button navigation
function listenForEvent() {
	$('#contact-details').on('click', (e) => {
		console.log('button pressed');
		e.preventDefault();
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
	$('#other').on('click', (e) => {
		$('#js-area').html(generateOther());
	});

}
// navigate back and forth




// submit form for info


$(listenForEvent);
