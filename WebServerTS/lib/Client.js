"use strict";
exports.__esModule = true;
var net = require("net");
var client = net.createConnection({ port: 80 }, function () {
    console.log('connected to server!');
    client.write('world!\r\n');
});
client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});
client.on('end', function () {
    console.log('disconnected from server');
});
//# sourceMappingURL=Client.js.map