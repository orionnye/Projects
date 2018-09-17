let express = require('express');
let app = express();
let port = 80;

app.get('/', function (req, res) {
    console.log('here');
    res.send('Hello World?');
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '?');
});