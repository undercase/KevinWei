$(document).ready(function() {
	var jqconsole = $("#console").jqconsole("", "kevin> ");
  jqconsole.Write(prompts['unformatted_intro'] + '\n\n', 'jqconsole-output', false);

	var process = (input) => {
		var parsed = input.split(" ");
		var commands = [
			[["help", "?", "ls"], buildLambda("help")],
			[["hello", "kevin", "hi", "mission", "description", "why", "intro"], buildLambda("intro")],
			[["links", "info"], buildLambda("links")],
			[["contact"], buildLambda("contact")],
			[["clear", "cls"], function() { jqconsole.Clear(); return "\r"; }],
      [["cats", "cat"], function() {
        return '\n' + prompts['cats'][Math.floor(Math.random()*prompts['cats'].length)] + '\n\n';
      }]
		];
		var response = null;
		commands.forEach(function(key, index, commands) {
			key[0].forEach(function(term, tindex) {
				if (term === parsed[0]) {
					response = key[1]();
				}
			});
		});
		if (response) {
			return response;
		} else {
			var commands_list = [];
			commands.forEach(function(key, index, commands) {
				key[0].forEach(function(term, tindex) {
					if (term !== "qt") {
						commands_list.push({
							"command": term,
							"callback": key[1]
						});
					}
				})
			});
			var results = search(commands_list, parsed[0]);
			if (results.length > 0) {
				response = "\nThat command doesn't exist. Did you mean ";
				results.forEach(function(result, index) {
					if (index === results.length - 1 && results.length == 2) {
						response = response.substring(0, response.length - 2);
						response += " or " + buildSpecialText(result["item"]["command"]) + ", ";
					} else if (index === results.length - 1 && results.length > 1) {
						response = response.substring(0, response.length - 2);
						response += ", or " + buildSpecialText(result["item"]["command"]) + ", ";
					} else {
						response += buildSpecialText(result["item"]["command"]) + ", ";
					}
				});
				response = response.substring(0, response.length - 2);
				response += "?\n\n";
				return response;
			} else {
				return "\nThat command doesn\"t exist. Here is a list of commands you can use:\n" + format("help");
			}
		}
	};

	var processQuery = (input) => {
		if (input) {
			jqconsole.Write(process(input),"jqconsole-output",false);
		} else {
			jqconsole.Write("\n Here is a list of commands:\n" + format("help"), "jqconsole-output", false);
		}
		startPrompt();
	};

	var startPrompt = () => {
		jqconsole.Prompt(true, processQuery);
	};

	startPrompt();
});
