const express = require("express");
const bodyParser = require("body-parser");

const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/", function (req, res) {
  res.redirect(
    "https://codeforces.com/problemset?tags=" +
      req.body.filterfrom +
      "-" +
      req.body.filterto
  );
});

const port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server has started successfully!");
});
