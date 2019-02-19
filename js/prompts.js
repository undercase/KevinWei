/*
Commands:

help: display a list of available commands
hello: display introduction message again
links: display a list of relevant links
contact: display contact info
cats: display ascii art of cats ;)
*invalid*: text to display when no valid command is entered
*/

var intro = `I'm a <span class="special">political organizer</span> and <span class="special">policy researcher</span> with a technical background.
\tMy main policy interests are technology and innovation, national security, globalization and global governance, cybersecurity policy, and select microeconomics topics.
\tRight now I'm a Cyber Policy Intern at the <a href="https://www.cfr.org/">Council on Foreign Relations</a>.

\tIn the past, I was a 2019 State of the Net Fellow at the <a href="https://www.neted.org/">Internet Education Foundation</a> and a Beto Senate campaign staffer.
\tI've also worked/interned in the Office of Nancy Pelosi, <a href="https://www.digitalocean.com/">DigitalOcean</a> (Growth & Demand Generation), the <a href="http://www.techstars.com/programs/">Techstars IoT Accelerator</a>, the <a href="https://www.georgewbushlibrary.smu.edu/">George W. Bush Presidential Library</a>, and the <a href="https://www.si.edu/">Smithsonian.</a>
\tWhen time permits, I'm an avid Overwatch player (TeSPA) and science fiction fan (reviewer at <a href="http://www.fantasyliterature.com/">FantasyLiterature.com</a>).
\tStudying Mathematics-Statistics & Economics at <a href="https://www.columbia.edu/">Columbia</a> (expected 2019) with some IR/politics.`;

var unformatted_intro = `Hi! I'm Kevin Wei. I'm a <span class="special">political organizer</span> and <span class="special">policy researcher</span> with a technical background.
Type <span class="special">hello</span> below to learn more about me. Try <span class="special">?</span> or <span class="special">help</span> to see more commands.`;

var help = [{
  name: buildSpecialText("help"),
  description: "Display all commands"
}, {
  name: buildSpecialText("hello"),
  description: "Display introduction message"
}, {
  name: buildSpecialText("social"),
  description: "Displays links to social media"
}, {
  name: buildSpecialText("portfolio"),
  description: "Displays links to projects, articles, and more"
}, {
  name: buildSpecialText("contact"),
  description: "Display my contact info"
}, {
  name: buildSpecialText("cats"),
  description: "Display ascii art of cats ;)"
}, {
  name: buildSpecialText("cls"),
  description: "Clear the screen"
}];

var social = `<a href="https://www.linkedin.com/in/kevinlwei/">LinkedIn</a>
\t<a href="https://twitter.com/kevinlwei">Twitter</a>
\t<a href="https://angel.co/kevinwei">AngelList</a>`;

var portfolio = `<a href="https://github.com/kevinlwei">GitHub</a>
\t<a href="https://medium.com/@kevinwei">Medium</a>`;

var contact = `If there's a project I can help you with or if you just want to grab some #covfefe, feel free to reach out at <a href="mailto:public@kevinlwei.com">public@kevinlwei.com</a>.`;

var cats = [
"                        _\n" +
"                       | |\n" +
"                       | \\\n" +
"                       | |\n" +
"  |\                   | |\n" +
" /, ~\                / /\n" +
"X     `-.....-------./ /\n" +
" ~-. ~  ~              |\n" +
"    \             /    |\n" +
"     \  /_     ___\   /\n" +
"     | /\ ~~~~~   \ |\n" +
"     | | \        || |\n" +
"     | |\ \       || )\n" +
"    (_/ (_/      ((_/\n",
"                        _\n" +
"                       | \\\n" +
"                       | |\n" +
"                       | |\n" +
"  |\                   | |\n" +
" /, ~\                / /\n" +
"X     `-.....-------./ /\n" +
" ~-. ~  ~              |\n" +
"    \             /    |\n" +
"     \  /_     ___\   /\n" +
"     | /\ ~~~~~   \ |\n" +
"     | | \        || |\n" +
"     | |\ \       || )\n" +
"    (_/ (_/      ((_/",
"                      _\n" +
"                      \`*-.\n" +
"                       )  _`-.\n" +
"                      .  : `. .\n" +
"                      : _   '  \\\n" +
"                      ; *` _.   `*-._\n" +
"                      `-.-'          `-.\n" +
"                        ;       `       `.\n" +
"                        :.       .        \\\n" +
"                        . \  .   :   .-'   .\n" +
"                        '  `+.;  ;  '      :\n" +
"                        :  '  |    ;       ;-.\n" +
"                        ; '   : :`-:     _.`* ;\n" +
"               [bug] .*' /  .*' ; .*`- +'  `*'\n" +
"                     `*-*   `*-*  `*-*'",
"                                     ,\n" +
"              ,-.       _,---._ __  / \\\n" +
"             /  )    .-'       `./ /   \\\n" +
"            (  (   ,'            `/    /|\n" +
"             \  `-'             \'\   / |\n" +
"              `.              ,  \ \ /  |\n" +
"               /`.          ,'-`----Y   |\n" +
"              (            ;        |   '\n" +
"              |  ,-.    ,-'         |  /\n" +
"              |  | (   |        hjw | /\n" +
"              )  |  \  `.___________|/\n" +
"              `--'   `--'"
];

var invalid = `That's not a valid command! Type <span class='special'>help</span> for a list of commands.`;

var prompts = {
	help: help,
  unformatted_intro: unformatted_intro,
  intro: intro,
  social: social,
  portfolio: portfolio,
  contact: contact,
  cats: cats,
	invalid: invalid
};
