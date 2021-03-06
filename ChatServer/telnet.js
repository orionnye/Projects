const net = require('net')

let args = process.argv.slice(2)

if (args.length < 2)
{
    console.log("Usage:\n\n    telnet.js HOST PORT")
    return
}

let host = args[0]
let port = parseInt(args[1])
const socket = net.createConnection(port, host)
socket.on('close', () => {
    process.exit()
})
console.log(`Connected to ${host} port ${port}`)
socket.pipe(process.stdout)
process.stdin.pipe(socket)
//socket.on('data', (buffer) => process.stdout.write(buffer))
//process.stdin.on('data', (buffer) => socket.write(buffer))