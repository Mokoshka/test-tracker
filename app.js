var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.get('/', jsonParser, function (req, res) {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
