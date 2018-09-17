var http = require('http')

//object we pass in to the request function
var options = {
    host: 'www.wikipedia.org',
    path: '/'
}

var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    })
    res.on('end', function (e) {
        console.log(data.toString())
    })
})
request.on('error', function (e) {
    console.log(e.message.toString())
})
request.end()