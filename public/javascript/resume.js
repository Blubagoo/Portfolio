function generateWorkExperience() {
	return `
			<section role="region">
				<div class="work-exp">
					
					<p class="header">HVAC Private Contractor</p>
					<p class="info sub-text">Self Employed</p>
					
					<p><span class="info indent">Sales Consultant</span> - To Duties include running generated sales leads through <a href="http://www.homeadvisor.com">Homeadvisor.com</a>. I ran all calls generated except when there was an overflow of business. Had a closing rate of around 75%. Sold approximately $150,000 inside of six-month period. In charge of hiring new sales technicians and running the business when the owner was busy with QA. Also in charge of approximately 50% of service calls that involved troubleshooting a broken unit.</p>
					<p class="date" align="center"><span class="info indent">From</span> 05/01/17 - <span class="info">To</span> 02/24/18</p>
					
					<p><span class="info indent">Sales/Service Technician</span> - Duties include running generated sales leads through in-house telemarketing. Responded promptly to all calls in a professional manner to either P.M. HVAC equipment or fix broken units. Had a closing rate of around 60% and sold roughly $100,000 in a seven-month period. Tasked with helping on installations from time to time. Also on call during the entire duration of being a contractor.</p>
					<p class="date" align="center"><span class="info indent">From</span> 06/01/16 - <span class="info">To</span> 05/01/17</p>
					
					<p class="header">Food Service Industry</p>
					<p class="header indent">Management</p>
					<p class="info indent">Chipotle <span class="sub-text sm-text">  Service Manger</span></p>
					<p class="info sub-text indent date">02/14 - 03/15</p>
					<p class="info indent">Pizza Hut <span class="sub-text sm-text">  Shift Leader</span></p>
					<p class="info sub-text indent date">2008 - 2009</p>
					<p class="header indent">FOH/BOH Personnel</p>
					<p class="info sub-text indent date">2008 - 2016</p><br><br>
					<p class="info md-text indent">BWW's<span class="sub-text sm-text">  Line Cook/Trainer</span></p>
					<p class="info indent sub-text date">03/16 - 07-16</p>
					<p class="info md-text indent">BWW's<span class="sub-text sm-text">  Line Cook</span></p>
					<p class="info indent sub-text date">07/15 - 09-15</p>
					<p class="info md-text indent">Chipotle<span class="sub-text sm-text">  Service Manager</span></p>
					<p class="info indent sub-text date">02/14 - 03/15</p>
					<p class="info md-text indent">Old Chicago<span class="sub-text sm-text">  Line Cook/Prep/Trainer</span></p>
					<p class="info indent sub-text date">07/12 - 03/14</p>
					<p class="info md-text indent">Applebees<span class="sub-text sm-text">  Line Cook</span></p>
					<p class="info indent sub-text date">01/12 - 07/12</p>
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
		<div id="bio">
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
			<p class="info blogs">Blogs: <a href="https://css-tricks.com/">CSS Tricks</a>, <a href="https://www.sitepoint.com/">SitePoint</a></p>
		</div>
	`
}
function generateProjects() {
	return `
			<div class="projects">
				<div class="pic-container">
					<div class="overlay white sm-text">
						<p class="header o-header md-text">Flow-State</p>
						<p class="info md-text">A better way to work</p>
						<p class="info sm-text o-footer">Created with: 
							<span class="info xsm-text">HTML5, CSS3, Javascript ES6, Asynchronous AJAX calls, API Integration,
							Node.js, Mongoose, MongoDb, NodeFS</span>
						<p class="info xsm-text link" align="center"><a href="https://flow-state.herokuapp.com">Check it out!</a></p>
						</p>
					</div>
					<div class="flow">
						<a href="https://flow-state.herokuapp.com"><img id="flow-pic" class="thumbnail" src="images/flow-example.jpg"></a>	
					</div>
				</div>
				<div class="pic-container">
					<div class="overlay white darker sm-text">
						<p class="header o-header md-text">Sing'N'Go</p>
						<p class="info md-text" align="center">Get your favorite artist's lyrics and showtimes!</p>
						<p class="info sm-text o-footer">Created with: <span class="info xsm-text">HTML5, CSS3, Javascript ES6, Asynchronous AJAX calls, API Integration</span></p>
						<p class="info xsm-text link" align="center"><a href="https://blubagoo.github.io/singngo/">Check it out!</a></p>
					</div>
					<div class="sing">
						<a href="https://blubagoo.github.io/singngo/"><img class="thumbnail" id="sing-pic"src="images/singbg.jpg"></a>
					</div>
				</div>
				<div class="pic-container">
					<div class="overlay white darker sm-text">
						<p class="header o-header md-text">Quiz App</p>
						<p class="info md-text">Test your gamer knowledge</p>
						<p class="info sm-text o-footer">Created with: <span class="info xsm-text">HTML5, CSS3, Javascript</span></p>
						<p class="info xsm-text link" align="center"><a href="https://repl.it/@JimTisdale/Quiz-App">Check it out!</a></p>
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
				<p class="info indent">Windows 7,8,10</p>
			</div>
			<div id="langs">
				<p class="header">Languages & Platforms</p>
				<p class="info indent">HTML5, CSS3, JavaScript, Node.js, React</p>
			</div>
			<div id="frame-works">
				<p class="header">Frameworks</p>
				<p class="info indent">jQuery, Bootstrap, Express.js, Mongoose.js, React.js, Redux.js, Mocha.js, Chai.js, Enzyme.js</p>
			</div>
			<div id="db">
				<p class="header">Database</p>
				<p class="info indent">MongoDB(noSQL)</p>
			<div id="env">
				<p class="header">Environment</p>
				<p class="info indent">Windows 10</p>
				<p class="info indent">Git, Sublime, Travis CI</p>
			</div>
			<div id="methods">
				<p class="header">Methodologies</p>
				<p class="info indent">Mobile First Design</p>
				<p class="info indent">SEO & Accessible Design</p>
			</div>
			<div class="soft">
				<p class="header">Soft Skills</p>
				<p class="info indent">Management</p>
				<p class="info indent">Sales</p>
				<p class="info indent">Trainer</p>
		</div> 
	`
}

function generateEducation() {
	return `
		<div class="edu">
			<div class="school">
				<p class="header">Thinkful.Com - Remote</p>
				<p class="info indent">"Web Development Fundamentals;" "The Command Line, Git, and Github;" "Asynchronous Client Side Apps;"
					"Server-side programming with Javascript;" "Learn React;" "Advanced Topics"</p>
				<p class="info indent date sm-text">02/24/2018 - 08/07/2018</p>
				<p class="header">Fortis College - Dothan, AL</p>
				<p class="info indent">HVAC-R Technical Training</p>
				<p class="info indent date sm-text">09/2015 - 02/2016</p>
				<p class="header">Daniel 1 Academy</p>
				<p class="info indent sub-text">High School Diploma</p>
				<p class="info indent sub-text date">Class of 2007</p>
			</div>
		</div>
	`
}