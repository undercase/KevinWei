/*
Commands:

help: display a list of available commands
hello: display introduction message again
links: display a list of relevant links
contact: display contact info
cats: display ascii art of cats ;)
*invalid*: text to display when no valid command is entered
*/

var intro = `
Hi! I'm Kevin Wei. I'm a political organizer and policy researcher with a technical background. My main policy interests are technology and innovation, national security, globalization and global governance, cybersecurity policy, and select microeconomics topics. In the past, I was a 2019 State of the Net Fellow at the Internet Education Foundation and a Beto Senate campaign staffer. I've also worked/interned in the Office of Nancy Pelosi, DigitalOcean (Growth & Demand Generation), the Techstars IoT Accelerator, the George W. Bush Presidential Library, and the Smithsonian. When time permits, I'm an avid Overwatch player (TeSPA) and science fiction fan (reviewer atFantasyLiterature.com). Studying Mathematics-Statistics & Economics at Columbia (expected 2019) with some IR/politics.
`;

var help = [{
  name: buildSpecialText("help"),
  description: "Display all commands"
}, {
  name: buildSpecialText("hello"),
  description: "Display introduction message"
}, {
  name: buildSpecialText("links"),
  description: "Displays links to social media, projects, and more"
}, {
  name: buildSpecialText("contact"),
  description: "Display my contact info"
}, {
  name: buildSpecialText("cats"),
  description: "Display ascii art of cats ;)"
}];

var links = [];

var contact = [];

var cats = [];

var invalid = `That's not a valid command! Type <span class='special'>help</span> for a list of commands.`;

var prompts = {
	help: help,
  intro: intro,
  links: links,
  contact: contact,
  cats: cats,
	invalid: invalid
};
