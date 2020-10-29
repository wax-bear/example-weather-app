const express = require("express");
const { port } = require("./configs");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/home.route"));
app.use("/current", require("./routes/current.route"));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
