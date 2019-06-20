const fs = require("fs");

let executionCounter = 0;

function watchDemo(dir, watcherName) {
	return fs.watch(
		dir,
		{ encoding: "utf8", persistent: true, recursive: true },
		function(eventType, filename) {
			//We'll use a counter to keep track of the execeuted event
			executionCounter++;
			console.log(`Watcher name: ${watcherName}`);
			console.log(`${executionCounter}. Event type: ${eventType}`);

			//On some OS, the file name may not be supplied
			//We'll check for this
			if (filename) {
				console.log(`Filename provided: ${filename}`);
			} else {
				console.log("Filename not provided");
			}
		}
	);
}

module.exports.runWatcherDemo01 = function() {
	//Calling fs.watch successfully will return a fs.FSWatch object
	const watcher_01 = watchDemo(
		"./fs_sandbox/fs.watch.demo/resources",
		"watcher 01"
	);
	const watcher_02 = watchDemo("./fs_sandbox", "watcher 02");

	//Calling fs.FSWatcher.close() will emit the 'close' event
	//We'll register a listener for such event and output a prompt
	watcher_01.on("close", err => {
		if (err) throw err;
		console.log("Watcher 01 has been closed.");
	});

	watcher_01.close();
};
