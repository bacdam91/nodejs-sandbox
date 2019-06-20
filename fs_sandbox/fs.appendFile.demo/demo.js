const fs = require("fs");

module.exports = (dir, data) => {
	fs.appendFile(dir, data, "utf8", err => {
		if (err) throw err;
		console.log("Write successful.");
	});
};
