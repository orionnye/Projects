const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const net = require('net')
const socket = net.createConnection({port: 80})
socket.on('data', (data) => {
  console.log(data.toString())
})

rl.on('line', (input) => {
  socket.write(input + "\r\n")
})

//How to manually connect to server
// telnet localhost 80