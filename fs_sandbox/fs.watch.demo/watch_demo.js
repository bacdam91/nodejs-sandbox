const fs = require("fs");

let executionCounter = 0;

module.exports = function(dir) {
	fs.watch(
		dir,
		{ encoding: "utf8", persistent: true, recursive: true },
		function(eventType, filename) {
			executionCounter++;
			console.log(`${executionCounter}. Event type: ${eventType}`);
			if (filename) {
				console.log(`Filename provided: ${filename}`);
			} else {
				console.log("Filename not provided");
			}
		}
	);
};
