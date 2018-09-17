"use strict"
//INTERFACES
const net = require('net')
const server = net.createServer((socket) => {
    socket.write("YOU BASTARD")
    startStreamInterface(socket, socket)
})
const readline = require('readline')

function alphabetizeNames(arrayOfNames) {
    // init
    let alphabetizedNames = []
    arrayOfNames.forEach(element => {
        alphabetizedNames.push(element.trim())
    });
    // evaluation
    let apple = alphabetizedNames.sort()
    //return
    return apple
}

function startStreamInterface(input, output) {
    const rl = readline.createInterface({
        input: input
        // output: output
    })
    rl.on('line', (input) => {
        let nameList = alphabetizeNames(input.split(','))
        output.write(nameList.toString() + "\n")
    })
}

// RETURN STATEMENTS
console.log(
`Usage:
    node nameList.js [list of names]
ie:
    node invasionCalc.js john,april,maggie`)

startStreamInterface(process.stdin, process.stdout)
const port = 666
server.listen(port)
console.log(`listening on port: ${port}`)