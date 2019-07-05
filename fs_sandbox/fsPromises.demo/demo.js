const fs = require("fs");
const path = require("path");
// const PDFDocument = require("pdfkit");
// const doc = new PDFDocument();
// doc.pipe(fs.createWriteStream(outputDir));
const fsPromises = fs.promises;
const outputDir = path.join(__dirname, "output/output.pdf");
const resourcesDir = path.join(__dirname, "./resources");

module.exports.demo_01 = function() {
	fsPromises
		.open(path.join(resourcesDir, "fileToOpen.txt"), "r")
		.then(handler => handler.readFile({ encoding: "utf8" }))
		.then(data => {
			doc.text(data);
		})
		.catch(err => console.log("Error: ", err));
};

let content = [];

module.exports.demo_02 = function() {
	fsPromises.readdir(resourcesDir, { withFileTypes: true }).then(files => {
		files.forEach(function(file, index, files) {
			const filePath = path.join(resourcesDir, file.name);
			fsPromises
				.open(filePath, "r")
				.then(handler => handler.readFile({ encoding: "utf8" }))
				.then(data => {
					content.push(data);
				})
				.finally(() => {
					console.log(content);
				})
				.catch(err => console.log("Error: ", err));
		});
	});
};
