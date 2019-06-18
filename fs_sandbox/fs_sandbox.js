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

module.exports.open_demo = function(fileDir) {
	fs.open(fileDir, "r", (err, fileDescriptor) => {
		if (err) throw err;
		console.log(fd);
	});
};

module.exports.readdir_demo = function(fileDir) {
	fs.readdir(
		fileDir,
		{ encoding: "utf8", withFileTypes: true },
		(err, files) => {
			if (err) throw err;
			files.forEach(file => {
				if (file.isFile()) {
					console.log(`${file.name} is a file.`);
				} else if (file.isDirectory()) {
					console.log(`${file.name} is a directory.`);
				}
			});
		}
	);
};
