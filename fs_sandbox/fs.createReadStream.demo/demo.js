const fs = require("fs");

function openFileToRead(fileName) {
	return fs.createReadStream(fileName, { encoding: "utf8" });
}

module.exports.runCreateReadStreamDemo01 = function() {
	const stream = openFileToRead(
		"./fs_sandbox/fs.createReadStream.demo/resources/lyrics.txt"
	);

	stream.on("close", err => {
		if (err) throw err;
		console.log("Stream is closed.");
	});

	stream.on("data", chunk => {
		console.log("From data listener.");
		console.log(`Received ${chunk.length} bytes of data`);
		console.log(chunk);
	});

	stream.on("end", err => {
		if (err) throw err;
		console.log("Stream has ended.");
	});

	stream.on("readable", function() {
		console.log("From readable listener.");

		let data;

		while ((data = this.read())) {
			console.log(data);
		}
	});
};
