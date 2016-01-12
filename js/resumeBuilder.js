// code for bio section
var bio = {
	"name" : "Matthew Daly",
	"role" : "Web Developer",
	"contacts": {
		"mobile" : "(66) 0823328402",
		"email" : "sfhillhouse@gmail.com",
		"github" : "Matthew-Daly",
		"twiter" : "@Dalysfhillhouse",
		"location" : "Chiang Mai, Thailand"
	},
	"welcomeMessage" : "Hi, I'm Matthew and I want to make cool things with cool people.",
	"skills": [
		"HTML/CSS - beginner", "JavaScript - beginner", "writing", "teaching", "sales"
	],
	"languages": [
		"English - native", "Thai - upper intermediate", "German - functional"
	],
	"biopic" : "images/Matt.jpg"
}	

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var bioPic = HTMLbioPic.replace("%data%", "images/matt.jpg");
$("#header").append(bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedwelcomeMsg);
var formmatedMobile= HTMLmobile.replace("%data%", bio.contacts.mobile); 
$("#topContacts").append(formmatedMobile);
$("#footerContacts").append(formmatedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twiter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);



if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	


	$("#header").append(HTMLlanguagesStart);

	var formattedLanguages = HTMLlanguages.replace("%data%", bio.languages[0]);
	$("#languages").append(formattedLanguages);
	var formattedLanguages = HTMLlanguages.replace("%data%", bio.languages[1]);
	$("#languages").append(formattedLanguages);
	var formattedLanguages = HTMLlanguages.replace("%data%", bio.languages[2]);
	$("#languages").append(formattedLanguages);	
}

// end code for bio

//code for work section
var work = {
 "jobs": [
	{
	  	"employer" : "TripDonor/TravelGenie	",
	  	"title" : "Content Manager",
	  	"dates" : "Dec 2014 - Aug 2015",
	  	"location" : "San Diego, California (though I worked remotely)",
	  	"description" : "Vested Partner in travel crowdfunding site. Collaborated from its initial research and development phase, through core team assembly, to the building of a fully functioning proof	of concept website. Led a team in the creation of all related company content, including branding copy, blogging, press releases, as well as contributed to the fundamental business plan and company mission statement. Unfortunately the project failed to secure initial funding - we fought the good fight, but lost."
	},
	{	
	  	"employer" : "Dara Academy/Wat Parinayok School",
	  	"title" : "Teacher/Program Administrator ",
	  	"dates" : "May 2006 - March 2015",
	  	"location" : "Chiang Mai/Bangkok, Thailand",
	  	"description" : "Developed and administered various programs and curricula across multiple grade levels (K-12). Was part of a team responsible for the creation of an intensive English language program for young learners that won the King's Award for Academic Excellence. Successfully worked and excelled in an environment that demanded the highest levels of cross-cultural awareness and adaptability."
	},
	{	
	  	"employer" : "A.G.A.S. Manufacturing Group",
	  	"title" : "Sales Manager",
	  	"dates" : "Feb 2003 - Jan 2006",
	  	"location" : "New York, NY",
	  	"description" : "Increased gross US sales by 14% during my tenure. Instituted new quality control and shipping processes that saw a marked decrease in returns and cancelled orders. Oversaw the creation of a retail website, opening new revenue sources. Through training and operational protocols, decreased customer response times from 20min to 5min. "
	},
	{	
	  	"employer" : "SquareTrade",
	  	"title" : "Lead Customer Service Represenative",
	  	"dates" : "Feb 2000 - Dec 2002",
	  	"location" : "San Francisco, CA",
	  	"description" : "Was the 14th hire in this start-up (one of the few still standing from the .com days) and was instrumental in building the company’s Customer Service department; including helping to refine data collection and reporting processes, the creation of email templates, technical support Q & As, bug reporting procedures and acted as the main liaison between the CS department and the technical and Biz Dev departments."
	}
  ]
}


work.display = function(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);	
		var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedworkDates = HTMLworkDates.replace ("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedworkDates);
		var formattedworkLocation = HTMLworkLocation.replace ("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedworkLocation);
		var formattedworkDescription =HTMLworkDescription.replace ("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedworkDescription);
		}
}


work.display ();



//end of code for work section


// code for education section
var education = { 
	"schools": [
	{
	 	"name": "State University of New York - Empire Sate College",
	 	"location": "New York, NY",
	 	"degree": "BA",
	 	"major": "World History",
	 	"dates" : "",
	 	"url" : "http://example.com"
	},
	{
	 	"name": "University of Maryland European Division",
	 	"location": "Munich, Germany",
	 	"degree": "AA",
	 	"major": "Theater Arts",
	 	"dates" : "",
	 	"url" : "http://example.com"
	},
	{
	 	"name": "Payap University",
	 	"location": "Chiang Mai, Thailand",
	 	"degree": "COC",
	 	"major": "Thai Language and Culture",
	 	"dates" : "",
	 	"url" : "http://example.com"
	},
	{
	 	"name": "Deree American College of Greece",
	 	"location": "Athens, Greece",
	 	"degree": "COC, one year program",
	 	"major": "Ancient Greek History and Culture",
	 	"dates" : "",
	 	"url" : "http://example.com"
	}
    ],
    "onlineCourses": [
    {
  		"title" : "Front-End Web Devoloper Nanodegree",
  		"school" : "Udacity",
  		"date" : "2016",
  		"Url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
  	},
  	{
  		"title" : "Command Line Essentials: Git Bash for Windows",
  		"school" : "udemy",
  		"date" : "2015",
  		"Url" : "https://www.udemy.com/git-bash/learn/#/",
  	},
  	{
  		"title" : "Build Websites from Scratch with HTML & CSS",
  		"school" : "udemy",
  		"date" : "2015",
  		"Url" : "https://www.udemy.com/build-website-scratch/learn/#/",
  	}
  ]
}


education.display = function(){
	for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
		

		var formattedschoolName = HTMLschoolName.replace ("%data%", education.schools[school].name);	
		$(".education-entry:last").append(formattedschoolName);
		var formattedschoolDegree = HTMLschoolDegree.replace ("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedschoolDegree);
		var formattedschoolDates = HTMLschoolDates.replace ("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedschoolDates);
		var formattedschoolLocation = HTMLschoolLocation.replace ("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedschoolLocation);
		var formattedschoolMajor =HTMLschoolMajor.replace ("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedschoolMajor);

	}
	    
}


education.display ();

// end code for edcuation section

// code online classes

education.onlineCourses.display = function(){
	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedonlineTitle);	
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedonlineSchool);	
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedonlineDates);	
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].Url);
		$(".education-entry:last").append(formattedonlineURL);

	}
}


education.onlineCourses.display();
// end code line classes






// code for further education

/*var furtherEducation = { 
	"schools": [
	{
	 	"organization": "American Conservatory Theater",
	 	"location": "London",
	 	"outcome": "COC - Summer Training Congress",
	 	"field": "Acting"
	},
	{
	 	"organization": "University of Maryland",
	 	"location": "Tokyo",
	 	"outcome": "Four Month Study Tour; 4 upper level credits towards degree",
	 	"field": "Ancient Egyption History"
	},
	{
	 	"organization": "University of Maryland",
	 	"location": "Beijing",
	 	"outcome": "Two Month Study Tour; 4 upper level credits towards degree",
	 	"field": "Chinese History and Culture"
	}
  ]
}*/





// end code further education

//code for projects section
var projects = {
 "projects": [
  	{
  		"title" : "Handmade Portfolio Website",
  		"dates" : "2015",
  		"description" : "This is portfolio website was made from scrach. All of the HTML and CSS was hand coded. Though a Bootstrap framework was eventually overlaid, all the initial framing was coded manually. All images are my own work.",
  		"images" : [
  		  "images/project-1-3.jpg",
  		  "images/project-1-2.jpg"	
  		]
  	},
  	{
  		"title" : "Coming Soon!",
  		"dates" : "2016",
  		"description" : "Prepare to have you mind blown in 2016. In the mean time enjoy these images.",
  		"images" : [
  		  "images/turtle-portfolio.jpg",
  		  "images/project-1-4.jpg"	
  		]
  	},
  	{
  		"title" : "Coming Soon!",
  		"dates" : "2016",
  		"description" : "Prepare to have you mind blown in 2016. In the mean time enjoy these images.",
  		"images" : [
  		  "images/project-1-6.jpg",
  		  "images/project-1-7.jpg"	
  		]
  	}
  ]
}

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace ("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace ("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace ("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display ();
//end of projects section


// code for internationalizeButton
function inName(formattedName) {
	name = name.trim().split (" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name [0] +" "+name[1];
}

$('#main').append(internationalizeButton);
// end code of internationalizeButton

// code to append googleMaps
$("#mapDiv").append(googleMap);
// end code to append google maps

// code for Click Location Log Function
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
// end code Click Location Function