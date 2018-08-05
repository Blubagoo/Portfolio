function generateWorkExperience() {
	return `
			<section role="region">
				<div class="work-exp">
					<h2 class="header">Work Experience</h2>
					<ul class="info">
						<li class="header">Thinkful Student</li>
							<ul>
								<li>"Web Development Fundamentals;" "The Command Line, Git, and Github;" "Asynchronous Client Side Apps;"
								"Server-side programming with Javascript;" "Learn React;" "Advanced Topics"</li>
								<li><span class="info">From</span> 02/24/2018 - To 08/07/2018</li>
							</ul><br><br>
						<li class="header">HVAC Private Contractor(Self-Employed)</li>
							<ul>
								<li><span class="info">Sales Consultant</span> - To Duties include running generated sales leads through <a href="http://www.homeadvisor.com">Homeadvisor.com</a>. I ran all calls generated except when there was an overflow of business. Had a closing rate of around 75%. Sold approximately $150,000 inside of six-month period. In charge of hiring new sales technicians and running the business when the owner was busy with QA. Also in charge of approximately 50% of service calls that involved troubleshooting a broken unit.</li>
									<li><span class="info">From</span> 05/01/17 - To 02/24/18</li>
									<li><span class="info">Sales/Service Technician</span> - Duties include running generated sales leads through in-house telemarketing. Responded promptly to all calls in a professional manner to either P.M. HVAC equipment or fix broken units. Had a closing rate of around 60% and sold roughly $100,000 in a seven-month period. Tasked with helping on installations from time to time. Also on call during the entire duration of being a contractor.</li>
									<li><span class="info">From</span> 06/01/16 - To 05/01/17</li>
							</ul>
					</ul>
				</div>
			</section>`
} 
function generateContactDetails() {
	return `
		<div class="contact-box">
			<div class="img-banner">
				<div class="img">
					<img id="headshot" src="../images/headshot.jpg" alt="Jim Tisdale" />
				</div>
				<div class="contact-details">
					<div class="address">
						<p class="header">Jim Tisdale</p>
						<p class="info">758 Willow Rd.</p>
						<p class="info">Slocomb, Al 36375</p>
					</div>
					<div class="phone">
						<p class="info">10/07/1988</p>
						<p class="info">(334)500-0066</p>
						<p class="info">JCTisdale1988@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	`
}
function generateIntroduction() {
	return `
		<div id="bio" class="well">
			<p class="info">  
				When I imagined what a career in tech would be like,
				I had no indication it was going to be such a journey.<br><br>
				The developer career track is fraught with roadblocks and headaches,
				but have persevered by digging deep and achieving my goals.<br><br> 
				I believe my passion for web development is going to help me grow from a junior developer
				into a project manager and ultimately an entrepreneur. 
				I want to be able to transform my ideas into products from which people will truly benefit.<br><br>
				People say that persistence and hard work is the key to success.
				What they don't tell you is that you can't just get there on persistence and hard work alone.
				You need ambition and the will to surpass your obstacles,
				so that there is no ceiling to your achievements.<br><br>
				Please feel free share your success stories, or better yet, 
				share some rock-solid tips for being a better developer. 
			</p>
		</div>
	`
}
function generateProjects() {
	return `
			<div class="projects">
				<div class="pic-container">
					<div class="overlay white sm-text">
						<p class="header o-header md-text">Flow-State</p>
						<p class="info xsm-text">A better way to work</p>
						<p class="header sm-text o-footer">Created with: 
							<span class="info xsm-text">HTML5, CSS3, Javascript ES6, Asynchronous AJAX calls, API Integration,
							Node.js, Mongoose, MongoDb, NodeFS</span>
						</p>
					</div>
					<div class="flow">
						<a href="https://flow-state.herokuapp.com"><img id="flow-pic" class="thumbnail" src="images/flow-example.jpg"></a>	
					</div>
				</div>
				<div class="pic-container">
					<div class="overlay white darker sm-text">
						<p class="header o-header md-text">Sing'N'Go</p>
						<p class="info xsm-text" align="center">Get your favorite artist's lyrics and showtimes!</p>
						<p class="info sm-text o-footer">Created with: HTML5, CSS3, Javascript ES6, Asynchronous AJAX calls, API Integration</p>
					</div>
					<div class="sing">
						<a href="https://blubagoo.github.io/singngo/"><img class="thumbnail" id="sing-pic"src="images/singbg.jpg"></a>
					</div>
				</div>
				<div class="pic-container">
					<div class="overlay white darker sm-text">
						<p class="header o-header md-text">Think you're a gamer?</p>
						<p class="info xsm-text">Test your gamer knowledge</p>
						<p class="info sm-text o-footer">Created with: HTML5, CSS3, Javascript</p>
					</div>
					<div class="quiz">
						<a href="https://repl.it/@JimTisdale/Quiz-App"><img class="thumbnail" id="quiz-pic" src="images/quizbg.jpg"></a>
					</div>
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