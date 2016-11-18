const express = require('express');
const app = express();
const port = 8880;
const options = {

};

app.use('/', express.static(__dirname + '/public', options));
app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
