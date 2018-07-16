function generateWorkExperience() {
	return `<section role="region">
				<div id="work-exp" class="well">
					<h2 class="header">Work Experience</h2>
					<ul>
						<li>Thinkful Student</li>
							<ul>
								<li>Studied all things javascript. Put roughly 30 hours a week in learning the skills mentioned. React/Redux is the last course and will be done approximately the first week of August. </li>
								<li>Started 02/24/2018 - 08/07/2018</li>
							</ul><br><br>
						<li>Flawless Air Service</li>
							<ul>
								<li>Sales Manager - Duties include running generated sales leads through <a href="http://www.homeadvisor.com">Homeadvisor.com</a>.I ran all calls generated except when there was an overflow of business. Had a closing rate of around 75%. Sold approximately $150,000 inside of 6 month period. In charge of hiring new sales technicians and running the business when the owner was busy with QA. Also in charge of approximately 50% of service calls that involved troubleshooting a broken unit.</li>
								<li>Started 03/01/17 - 09-01-17</li>
							</ul><br><br>
						<li>HVAC Private Contractor(Self-Employed)</li>
							<ul>
								<li>Sales/Service Technician - Duties include running generated sales leads through in-house telemarketing. Responded promptly to all calls in a professional manner to either P.M. HVAC equipment or fix broken units. Had a closing rate of around 60% and sold roughly $100,000 in a seven month period. Tasked with helping on installations from time to time. Also on call during the entire duration of being a contractor.</li>
								<li>Started 06/01/16 - 05/01/17</li>
							</ul>
					</ul>
				</div>
			</section>`
} 
function generateProjects() {
	return `
		<div id="projects" class="well">
			<h2 id="project-head">Projects I am currently designing</h2>
			<div class="row">
				<label for="collective-app">The Collective Public House App</label>
				<a href="https://github.com/Blubagoo/The-collective-app"><br><img id="collective" name="collective-app" src="https://thecollectivepublichouse.com/wp-content/uploads/2017/11/collective-250x142.jpg" alt="the collective logo"></a><br>
				<label for="learn-tube">Youtube API</label>
				<a href="https://github.com/Blubagoo/LearnTube"><br><img id="learn" name="learn-tube" src="https://www.nchba.org/wp/wp-content/uploads/education.png" alt="Search Youtube"></a><br>
				<label for="flow-state">Flow-state</label>
				<a href="https://github.com/Blubagoo/FlowState"><br><img id="flow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Q1uav15JExiiVPaM4wpery6XXO4hUARLKjR_m_C5QukYqrC80Q" name="flow-state" alt="Flow State Logo"></a><br>
			</div>
		</div>`
};
function generateContactDetails() {
	return `
	<div class="contact-details">
		<div class="address">
			<p class="header">Jim Tisdale</p>
			<p class="info">758 willow Rd.</p>
			<p class="info">Slocomb, Al 36375</p>
		</div>
		<div class="phone">
			<p class="info">P: (334)648-9249</p>
			<p class="info">E: JCTisdale1988@gmail.com</p>
			<p class="info">DOB: 10//07/1988</p>
		</div>
	</div>
	`
}
function generateIntroduction() {
	return `
		<div id="bio" class="well">
			<h2 class="header">Introduction</h2>
				<p class="info">I am a junior developer ready to enter into a professional environment where I can grow and
					learn what its about to be a part of development team. My professional ambition is, to reinforce my knowledge
					of front and back end design, and become a skilled developer. My training has taught me both how design
					whole apps from design to completion. Although I am applying for my first job as a developer I have developed
					several apps from the ground up to showcase my abilities. Please check out the links below to my portfolio projects.
					</p>
				<p class="header">Projects: <a href="https://flow-state.herokuapp.com" target="_blank">Flow-State</a>, 
					<a href="https://github.com/Blubagoo/singngo" target="_blank">Sing'N'Go</a>,
					<a href="https://repl.it/@JimTisdale/Quiz-App" target="_blank">Quiz-App</a></p>
		</div>
	`
}
function generateOther() {

}

function generateSkillset() {
	return `
		<div id="skillset">
			<div id="op-sys">
				<p class="header">Operating Systems</p>
				<p class="info">Windows 7,8,10</p>
			</div>
			<div id="Langs">
				<p class="header">Languages & Platforms</p>
				<p class="info">HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node.js, Express.js</p>
			</div>
		</div> 
	`
}