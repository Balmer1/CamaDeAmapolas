var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('index.html');
} );

app.listen(process.env.PORT || 3000);
