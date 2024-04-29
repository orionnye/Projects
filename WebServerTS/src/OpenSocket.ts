const net = require('net');
// we create a server to listen on a port
// we pass it a function which accepts a socket
// the server will call our function with the new socket
// which represents the clients connection to us
const server = net.createServer((socket) => {
    socket.on('data', (data) =>{
        console.log(data.toString());
    })
    socket.write(
`HTTP/1.0 200 OK
Orion: Moderate
Chase: Fine

<B>Hello</B> HTML`
);
}).on('error', (err) => {
    throw err;
});

server.listen(80,() => {
    console.log('opened server on', server.address());
});
