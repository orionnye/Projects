"use strict"

let clients = []
const net = require('net')
let statement = ""
const server = net.createServer((socket) => {
    socket.write("WELCOME TO THE SERVER!!!")
    clients.push(socket)

    socket.on('data', (data) =>{
        statement += data.toString()
        if (statement.includes('\r\n')){
            console.log('received:', statement.trim())
            socket.write('Server:' + statement)
            statement = ""
        }
    })
    socket.on('end', () => {
        console.log("Socket.end")
    })
})

server.on('error', (err) => {
    console.log("server.error", err)
})

server.listen(80,() => {
    console.log('opened server on', server.address())
});