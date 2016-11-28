var express = require('express');
var app = express();

app.use('/static', express.static('public/test'));

app.get('/',function(req, res) {
    res.send('Hello World!');
});
app.get('/about', function (req, res) {
    res.send('about page!');
});
var server = app.listen(2121, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});
