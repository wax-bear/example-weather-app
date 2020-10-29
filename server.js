const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/home.route"));
app.use("/current", require("./routes/current.route"));

app.listen(4000, function () {
  console.log("Example app listening on port 4000!");
});
