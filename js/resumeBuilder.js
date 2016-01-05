var formattedName = HTMLheaderName.replace("%data%", "Matthew Daly");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Deveolper");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



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
	"welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mauris nec neque pellentesque pretium. Praesent interdum sodales rutrum. Suspendisse potenti.",
	"skills": [
		"instruction", "sales", "curriculum development", "HTML", "CSS", "JS"
	],
	"biopic" : "images/Matt.jpg"
}


var education = { 
	"schools": [
	{
	 	"name": "State University of New York - Empire Sate College",
	 	"city": " Saratoga Springs",
	 	"degree": "BA",
	 	"major": "World History",
	 	"dates" : "2000",
	 	"url" : "http://example.com"
	},
	{
	 	"name": "University of Maryland European Division",
	 	"city": "Munich",
	 	"degree": "AA",
	 	"major": "Theater Arts",
	 	"dates" : "2000",
	 	"url" : "http://example.com"
	},
	{
	 	"name": "Payap University",
	 	"city": "Chiang Mai",
	 	"degree": "COC",
	 	"major": "Thai Language and Culture",
	 	"dates" : "2000",
	 	"url" : "http://example.com"
	}
    ],
    "onlineCourses": [
    {
  		"title" : "JavaScript Crash Course",
  		"school" : "Udacity",
  		"dates" : "2000",
  		"Url" : "https://www.udacity.com"
  	}
  ]
}

var work = {
 "jobs": [
	{
	  	"employer" : "TripDonor/TravelGenie	",
	  	"title" : "Content Manager",
	  	"dates" : "Dec 2014 - Aug 2015",
	  	"location" : "San Diego (though I worked remotely)",
	  	"description" : "Vested Partner in travel crowdfunding site. Collaborated from its initial research and development phase, through core team assembly, to the building of a fully functioning proof	of concept website. Led a team in the creation of all related company content, including branding copy, blogging, press releases, as well as contributed to the fundamental business plan and company mission statement. Unfortunately the project failed during initial rounds of funding - we fought the good fight, but lost."
	},
	{	
	  	"employer" : "Dara Academy/Wat Parinayok School",
	  	"title" : "Teacher/Program Administrator ",
	  	"dates" : "May 2006 - March 2015",
	  	"location" : "Chiang Mai/Bangkok, Thailand (respectively)",
	  	"description" : "Developed and administered various programs and curricula across multiple grade levels (K-12). Was part of a team responsible for the creation of an intensive English language program for young learners that won the King's Award for Academic Excellence. Successfully worked and excelled in an environment that demanded the highest levels of cross-cultural awareness and adaptability."
	},
	{	
	  	"employer" : "A.G.A.S. Manufacturing Group",
	  	"title" : "Sales Manager",
	  	"dates" : "Feb 2003 - Jan 2006",
	  	"location" : "New York, New York",
	  	"description" : "Increased gross US sales by 14% during my tenure. Instituted new quality control and shipping processes that saw a marked decrease in returns and cancelled orders. Oversaw the creation of a retail website, opening new revenue sources. Through training and operational protocols, decreased customer response times from 20min to 5min. "
	},
	{	
	  	"employer" : "SquareTrade",
	  	"title" : "Lead Customer Service Represenative",
	  	"dates" : "Feb 2000 - Dec 2002",
	  	"location" : "San Francisco, California",
	  	"description" : "Was the 14th hire in this start-up (one of the few still standing from the .com days) and was instrumental in building the company’s Customer Service department; including helping to refine the data collection and reporting processes, the creation of email templates, technical support Q & As, bug reporting procedures and acted as the main liaison between the CS department and the technical and Biz Dev departments."
	},
  ]
}

var projects = {
 "projects": [
  	{
  		"title" : "Sample Project 1",
  		"dates" : "2015",
  		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mauris nec neque pellentesque pretium. Praesent interdum sodales rutrum. Suspendisse potenti.",
  		"images" : [
  		  "https://www.udacity.com",
  		  "https://www.udacity.com"	
  		]
  	}
  ]
}


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
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	
}

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



