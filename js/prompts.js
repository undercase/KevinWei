/*
Commands:

help: display a list of available commands
hello: display introduction message again
links: display a list of relevant links
contact: display contact info
cats: display ascii art of cats ;)
*invalid*: text to display when no valid command is entered
*/

var intro = `Right now, I'm the Digital Director for NY Assemblymember <a href="https://danquart.com/" target="_blank">Dan Quart</a>'s re-election & Manhattan District Attorney campaigns. I'm also a Consultant for <a href="https://digitalocean.com" target="_blank">DigitalOcean</a>, where I'm scaling out our education access and startup programs. Check out <a href="https://www.digitalocean.com/the-spin-up/" target="_blank">the Spin Up</a>, DigitalOcean and a16z's new program to expand computer science education to historically underrepresented communities!
\t 
\tPreviously, I was a <a href="https://fiveboroughfuture.com/fellows" target="_blank">Five Borough Future Fellow</a>, a Fellow at the <a href="https://www.neted.org/" target="_blank">Internet Education Foundation</a>, and a 2018 Beto Senate campaign staffer. I've also worked in the Office of Nancy Pelosi & the <a href="https://www.cfr.org/" target="_blank">Council of Foreign Relations</a>. When time permits, I'm an avid Overwatch player (TeSPA) and science fiction fan (reviewer at <a href="http://www.fantasyliterature.com/" target="_blank">FantasyLiterature.com</a>). Formerly Math-Stat + Economics @ Columbia, now CS grad student @ Georgia Tech (OMSCS). 
\t 
\t To learn more about me, type <span class="special">social</span> to find me around the interwebs, <span class="special">portfolio</span> to see my past work, or <span class="special">contact</span> to reach out to me.`;

var unformatted_intro = `Hey there! I'm <span class="special" >Kevin Wei</span> - <span class="special">digital strategist</span>, <span class="special">policy advocate</span>, and <span class="special">data scientist</span>. I work on education, economic + racial equity, tech policy, LGBTQ+ rights, and other key issues. Currently <a href="https://danquart.com/" target="_blank">Dan Quart</a>'s Digital Director, a Consultant for <a href="https://digitalocean.com" target="_blank">DigitalOcean</a>, and a member of the <a href="https://victoryfund.org/" target="_blank">LGBTQ+ Victory Fund</a> Endorsements Board & <a href="https://myd.nyc/" target="_blank">Manhattan Young Democrats</a> Board. Also compsci @ Georgia Tech and proudly based in NYC! Shoot me a message at hi@kevinlwei.com :)
\t
Type <span class="special">hello</span> below to learn more about me, or try <span class="special">?</span> or <span class="special">help</span> to see more commands.`;

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
  description: "Displays links to my past work"
}, {
  name: buildSpecialText("contact"),
  description: "Display my contact info"
}, {
  name: buildSpecialText("cats"),
  description: "Display ASCII art of cats"
}, {
  name: buildSpecialText("cls"),
  description: "Clear the screen"
}];

var social = `<a href="https://twitter.com/kevinlwei" target="_blank">Twitter</a>
\t<a href="https://www.linkedin.com/in/kevinlwei/" target="_blank">LinkedIn</a>
\t 
\t Type <span class = "special">help</span> for more commands.`;

var portfolio = `<a href="https://www.fcc.gov/ecfs/filing/10717079873938" target="_blank">Net Neutrality Comment</a> (2017): here's internet infrastructure startup DigitalOcean's comment to the FCC in support of net neutrality, which I wrote back in 2017
\t<a href="https://fbnewsroomus.files.wordpress.com/2019/06/oversight-board-consultation-report-appendix.pdf" target="_blank">Facebook Global Oversight Board Comment</a> (2019): here's my personal comment to Facebook on their proposed structure for a "Supreme Court" of content moderation (pgs. 36-37)
\t<a href="http://www.fantasyliterature.com/author-interviews/n-k-jemisin/" target="_blank">N.K. Jemisin Interview</a> (2016): here's me interviewing NYT-bestselling fantasy author N.K. Jemisin about her Broken Earth trilogy
\t<a href="https://github.com/kevinlwei" target="_blank">GitHub</a>: my code snippets :)
\t 
\t Type <span class = "special">help</span> for more commands.`;

var contact = `Feel free to reach out at <a href="mailto:hi@kevinlwei.com" target="_blank">hi@kevinlwei.com</a>. I'm always down to grab some #covfefe, collaborate on projects, or provide feedback on what you're working on.
\t 
\t Type <span class = "special">help</span> for more commands.`;

var cats = [
"            _,'|             _.-''``-...___..--';)\n" +
"           /_ \\'.      __..-' ,      ,--...--'''\n" +
"          <\\    .`--'''       `     /'\n" +
"           `-';'               ;   ; ;\n" +
"     __...--''     ___...--_..'  .;.'\n" +
"    (,__....----'''       (,..--'",
"              __..--''``---....___   _..._    __\n" +
"    /// //_.-'    .-/'';  `        ``<._  ``.''_ `. / // /\n" +
"   ///_.-' _..--.'_    \\                    `( ) ) // //\n" +
"   / (_..-' // (< _     ;_..__               ; `' / ///\n" +
"    / // // //  `-._,_)' // / ``--...____..-' /// / //",
"                      /^--^\\     /^--^\\     /^--^\\\n" +
"                      \\____/     \\____/     \\____/\n" +
"                     /      \\   /      \\   /      \\\n" +
"                    |        | |        | |        |\n" +
"                     \\__  __/   \\__  __/   \\__  __/\n" +
"|^|^|^|^|^|^|^|^|^|^|^|^\\ \\^|^|^|^/ /^|^|^|^|^\\ \\^|^|^|^|^|^|^|^|^|^|^|^|\n" +
"| | | | | | | | | | | | |\\ \\| | |/ /| | | | | | \\ \\ | | | | | | | | | | |\n" +
"########################/ /######\\ \\###########/ /#######################\n" +
"| | | | | | | | | | | | \\/| | | | \\/| | | | | |\\/ | | | | | | | | | | | |\n" +
"|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_",
"             *     ,MMM8&&&.            *\n" +
"                  MMMM88&&&&&    .\n" +
"                 MMMM88&&&&&&&\n" +
"     *           MMM88&&&&&&&&\n" +
"                 MMM88&&&&&&&&\n" +
"                 'MMM88&&&&&&'\n" +
"                   'MMM8&&&'      *\n" +
"          |\\___/|\n" +
"         =) ^Y^ (=            .              '\n" +
"          \\  ^  /\n" +
"           )=*=(       *\n" +
"          /     \\\n" +
"          |     |\n" +
"         /| | | |\\\n" +
"         \\| | |_|/\\\n" +
"  jgs_/\\_//_// ___/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_\n" +
"  |  |  |  | \\_) |  |  |  |  |  |  |  |  |  |\n" +
"  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n" +
"  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n" +
"  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n" +
"  |  |  |  |  |  |  |  |  |  |  |  |  |  |  ",
"                _                       \n" +
"                \\`*-.                   \n" +
"                 )  _`-.                \n" +
"                .  : `. .               \n" +
"                : _   '  \\              \n" +
"                ; *` _.   `*-._         \n" +
"                `-.-'          `-.      \n" +
"                  ;       `       `.    \n" +
"                  :.       .        \\   \n" +
"                  . \\  .   :   .-'   .  \n" +
"                  '  `+.;  ;  '      :  \n" +
"                  :  '  |    ;       ;-.\n" +
"                  ; '   : :`-:     _.`* ;\n" +
"         [bug] .*' /  .*' ; .*`- +'  `*'\n" +
"               `*-*   `*-*  `*-*'       ",
"                       ;\\\n" +
"                      _' \\_\n" +
"                    ,' '  '`.\n" +
"                   ;,)       \\\n" +
"                  /          :\n" +
"                  (_         :\n" +
"                   `--.       \\\n" +
"                      /        `.\n" +
"                     ;           `.\n" +
"                    /              `.\n" +
"                   :                 `.\n" +
"                   :                   \\\n" +
"                    \\\\                  \\\n" +
"                     ::                 :\n" +
"                     || |               |\n" +
"                     || |`._            ;\n" +
"                    _;; ; __`._,       (________\n" +
"                  ((__/(_____(______,'______(___) SSt",
"                               __\n" +
"                         _,-;''';`'-,.\n" +
"                      _/',  `;  `;    `\\\n" +
"      ,        _..,-''    '   `  `      `\\\n" +
"     | ;._.,,-' .| |,_        ,,          `\\\n" +
"     | `;'      ;' ;, `,   ; |    '  '  .   \\\n" +
"     `; __`  ,'__  ` ,  ` ;  |      ;        \\\n" +
"     ; (6_);  (6_) ; |   ,    \\        '      |       /\n" +
"    ;;   _,' ,.    ` `,   '    `-._           |   __//_________\n" +
"     ,;.=..`_..=.,' -'          ,''        _,--''------''''\n" +
"_pb__\\,`''=,,,==''',___,,,-----'''----'_'_'_''-;''\n" +
"-----------------------''''''\\ \\'''''   )   /'\n" +
"                              `\\`,,,___/__/'_____,\n" +
"                                `--,,,--,-,'''\\\n" +
"                               __,,-' /'       `\n" +
"                             /'_,,--''\n" +
"                            | (\n" +
"                             `'",
"                                     ,\n" +
"              ,-.       _,---._ __  / \\\n" +
"             /  )    .-'       `./ /   \\\n" +
"            (  (   ,'            `/    /|\n" +
"             \\  `-''             \\'\\   / |\n" +
"              `.              ,  \\ \\ /  |\n" +
"               /`.          ,'-`----Y   |\n" +
"              (            ;        |   '\n" +
"              |  ,-.    ,-'         |  /\n" +
"              |  | (   |        hjw | /\n" +
"              )  |  \\  `.___________|/\n" +
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
