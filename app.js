var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
