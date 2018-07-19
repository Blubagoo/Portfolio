function generateWorkExperience() {
	return `<section role="region">
				<div class="work-exp" class="well">
					<h2 class="header">Work Experience</h2>
					<ul class="info">
						<li>Thinkful Student</li>
							<ul>
								<li>"Web Development Fundamentals", "The Command Line, Git, and Github", "Asynchronous Client Side Apps",
								"Server-side programming with Javascript", "Learn React", "Advanced Topics"</li>
								<li>Started 02/24/2018 - 08/07/2018</li>
							</ul><br><br>
						<li>HVAC Private Contractor(Self-Employed)</li>
							<ul>
							<li>Sales Consultant - Duties include running generated sales leads through <a href="http://www.homeadvisor.com">Homeadvisor.com</a>.I ran all calls generated except when there was an overflow of business. Had a closing rate of around 75%. Sold approximately $150,000 inside of 6 month period. In charge of hiring new sales technicians and running the business when the owner was busy with QA. Also in charge of approximately 50% of service calls that involved troubleshooting a broken unit.</li>
								<li> Started 05/01/17 - 02/24/18</li>
								<li>Sales/Service Technician - Duties include running generated sales leads through in-house telemarketing. Responded promptly to all calls in a professional manner to either P.M. HVAC equipment or fix broken units. Had a closing rate of around 60% and sold roughly $100,000 in a seven month period. Tasked with helping on installations from time to time. Also on call during the entire duration of being a contractor.</li>
								<li>Started 06/01/16 - 05/01/17</li>
							</ul>
					</ul>
				</div>
			</section>`
} 
function generateContactDetails() {
	return `
	<div class="contact-details">
		<div class="address">
			<p class="header">Jim Tisdale</p>
			<p class="info">758 willow Rd.</p>
			<p class="info">Slocomb, Al 36375</p>
		</div>
		<div class="phone">
			<p class="info">P: (334)500-0066</p>
			<p class="info">E: JCTisdale1988@gmail.com</p>
			<p class="info">DOB: 10/07/1988</p>
		</div>
	</div>
	`
}
function generateIntroduction() {
	return `
		<div id="bio" class="well">
			<h2 class="header">Introduction</h2>
				<p class="info">  I am a junior developer with a passion for learning. I have been learning on my
				own for the past couple of years. In Febuary of this year I decided to make the change into
				my new career! I fell in love with all the amazing things you can do with Javascript and how there is so much
				opportunity in this field. I am very excited to get into the nitty gritty learning new technologies
				and even trying out Tensorflow.js.</p><br><br>
				<p class="info1">While I was studying at Thinkful I had the chance to learn from real professionals already in the
				industry, because of this I have been able to learn the core essentials at writing good modular
				code. Not only was I able to learn how to be a front-end developer but also how to be a back-end
				developer with Node.js. Next up was persistence and then I really knew that I loved everything 
				that being a developer had to offer. I cant wait to see how future technologies will shape my career!</p>
		</div>
	`
}
function generateProjects() {
	return `
		<div class="projects">
			<div class="flow">
				<a href="https://flow-state.herokuapp.com"><img id="flow-pic" src="images/flow-example.jpg"></a>	
				<p class="cap-text">Flow-State<br><span class="cap-def">A better way to work</span></p>
				<p class="tech">Technolgies used: HTML5, CSS3, Javascript ES6, Asynchronous AJAX calls, API Integration,
					Node.js, Mongoose, MongoDb, NodeFS</p>
			</div>
			<div class="sing">
				<a href="https://blubagoo.github.io/singngo/"><img id="sing-pic"src="images/singbg.jpg"></a>
				<p class="cap-text">Sing'N'Go<br><span class="cap-def">Get your favorite artist's lyrics and showtimes!</span></p>
				<p class="tech">Technolgies used: HTML5, CSS3, Javascript ES6, Asynchronous AJAX calls, API Integration</p>
			</div>
			<div class="quiz">
				<a href="https://repl.it/@JimTisdale/Quiz-App"><img id="quiz-pic" src="images/quizbg.jpg"></a>
				<p class="cap-text">Think you're a gamer?<br><span class="cap-def">Test your gamer knowledge</span></p>
				<p class="tech">Technolgies used: HTML5, CSS3, Javascript</p>
			</div>
		</div>
	`
}

function generateSkillset() {
	return `
		<div class="skillset">
			<div id="op-sys">
				<p class="header">Operating Systems</p>
				<p class="info">Windows 7,8,10</p>
			</div>
			<div id="langs">
				<p class="header">Languages & Platforms</p>
				<p class="info">HTML5, CSS3, JavaScript, jQuery, Bootstrap,<br> Node.js, Express.js, MongoDB(NoSQL), Mongoose</p>
			</div>
		</div> 
	`
}