const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const indexRouter = require("./routes/index");

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
