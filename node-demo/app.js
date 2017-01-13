var express = require('express');
var ejs = require('ejs');
var app = express();
var bodyParser = require('body-parser');

var router = require('./routes/index');

app.set('views', __dirname + '/public/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

//这种就是要将.html文件修改为.ejs
// app.set('views', __dirname + '/public/views');// 设置存放模板文件的目录
// app.set('view engine', 'ejs');// 设置模板引擎为 ejs
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname +'/public'));

app.use('/',router);

app.post('/data',function (req, res) {
    console.log(req.body);
    console.log(req.body.getData == 'true');
    if (req.body.getData == 'true') {
        res.send('sendback data sucess!');
    }
});

var server = app.listen(2121, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});
