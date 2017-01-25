var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello You!');
});

app.listen(3000);
