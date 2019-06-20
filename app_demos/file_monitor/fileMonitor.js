const fs = require("fs");

function printFileToConsole(dir) {
	const readStream = fs.createReadStream(dir, "utf8");

	readStream.on("readable", function() {
		let data;
		while ((data = this.read())) {
			console.log(data);
		}
	});

	readStream.on("error", function() {
		console.log("Something has gone wrong.");
	});
}

module.exports.startResourcesWatcher = function(dir) {
	fs.watch(
		dir,
		{
			encoding: "utf8",
			persistent: true,
			recursive: true
		},
		(eventType, filename) => {
			printFileToConsole(dir + "/" + filename);
		}
	);
};
