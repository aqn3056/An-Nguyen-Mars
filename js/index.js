// adding footer
var body = document.querySelector("body");
var footer = document.createElement("footer");
body.appendChild(footer);

// get current year
var today = new Date();
var thisYear = today.getFullYear();

// select footer element
var footerElement = document.querySelector("footer");

// new paragraph element for copyright
var copyright = document.createElement("p");

// set the innerHTML with the symbol and year
copyright.innerHTML = "&copy; An Nguyen " + thisYear;

// append the copyright paragraph to the footer
footerElement.appendChild(copyright);

// skills list
var skills = [
    "JavaScript", 
    "HTML", 
    "CSS", 
    "Python", 
    "C", 
    "C++", 
    "GitHub"];
// select the skills section by id
var skillsSection = document.getElementById("Skills");

// query the skillsSection to select the <ul> element
var skillsList = skillsSection.querySelector("ul");

// loop through the skills arr and create li items
for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}