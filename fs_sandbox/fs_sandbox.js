const fs = require("fs");

module.exports.unlink_demo = function() {
	fs.unlink("./fs_sandbox/resources/test.txt", err => {
		if (err) throw err;
		console.log("Deleted test file.");
	});
};

module.exports.stat_demo = function() {
	fs.stat("./fs_sandbox/resources/test.txt", (err, stats) => {
		if (err) throw err;
		console.log(`stats: ${JSON.stringify(stats)}`);
	});
};

module.exports.rename_demo = function() {
	fs.rename(
		"./fs_sandbox/resources/test.txt",
		"./fs_sandbox/resources/test_01.txt",
		err => {
			if (err) throw err;
			console.log("Rename successful.");
		}
	);
};
