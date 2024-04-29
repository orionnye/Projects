const net = require('net');
const server = net.createServer((socket) => {
    socket.on('data', (data) =>{
        console.log(data.toString());
    })
    socket.write(
`HTTP/1.0 200 OK
Orion: Moderate
Chase: Fine

<B>Hello</B>`
);
    socket.end();
}).on('error', (err) => {
    throw err;
});

server.listen(80,() => {
    console.log('opened server on', server.address());
});
