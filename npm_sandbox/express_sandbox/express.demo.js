const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "api")));

app.set("views", "./npm_sandbox/express_sandbox/views");
app.set("view engine", "pug");

app.get("/about", (req, res) => {
	res.render("about");
});

module.exports.runDemo = function() {
	app.listen(PORT, err => {
		if (err) throw err;
		console.log(`Listening on port ${PORT}...`);
	});
};
