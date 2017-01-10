var express = require('express');
var ejs = require('ejs');
var app = express();
var router = require('./routes/index');

app.set('views', __dirname + '/public/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

//这种就是要将.html文件修改为.ejs
// app.set('views', __dirname + '/public/views');// 设置存放模板文件的目录
// app.set('view engine', 'ejs');// 设置模板引擎为 ejs

app.use('/static', express.static('public'));

app.use('/',router);

// 将router部分提取到routes目录中
// app.get('/',function(req, res) {
//     // res.send('Hello World!<a href="/static/index.html">index</a>');
//     res.render('index');
// });
// app.get('/about', function (req, res) {
//     res.send('about page!');
// });

var server = app.listen(2121, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});
