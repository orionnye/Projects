"use strict"
//INTERFACES
const net = require('net')
const server = net.createServer((socket) => {
    socket.write("YOU BASTARD")
    startStreamInterface(socket, socket)
})
const readline = require('readline')

//OBJECT CONSTRUCTORS
//Player Object
class Character {
    constructor(level) {
        this.level = level
        this.weapon
    }
}
//Area Object
class Area {
    constructor(name, averageLevel, population){
        this.name = name
        this.averageLevel = averageLevel
        this.population = population//int later converted into a percentage
        this.difficulty = "0-3"
    }
}
//Invasion Object
class Invasion {
    constructor(character){
        this.range = character.level.toString() + "-" + maxPlayerLevel.toString()
        this.sites = []
        for(let i = 0; i < areas.length; i++){
            if(character.level <= areas[i].averageLevel)
                this.sites.push(areas[i].name)
        }
    }
    toString() {
        return(
`Invasion Range:
    ${this.range}
Invasion Sites:
    ${this.sites.join('\n    ')}`
        )
    }
}

//VARIABLE DECLARATION
let args = process.argv.slice(2)
//Constant Variables
const maxPlayerLevel = 713
const myLevel = args[0]
const areas = [
    new Area("Undead Burg", 10, 90),
    new Area("Undead Parish", 15, 90),
    new Area("Lower Undead Burg", 20, 80),
    new Area("Depths", 25, 75),
    new Area("Blightown", 30, 80),
    new Area("Sens Fortress", 35, 90),
    new Area("Anor Londo", 55, 90),
    new Area("Demon Ruins", 70, 33),
    new Area("Lost Izalith", 80, 40),
    new Area("Dukes Archives", 70, 40),
    new Area("Crystal Cave", 80, 40),
    new Area("Catacombs", 25, 33),
    new Area("Tomb of The Giants", 70, 40),
    new Area("New Londo Ruins", 70, 45),
    new Area("Kiln of The First Flame", 713, 100),
    new Area("Sanctuary Garden", 70, 70),
    new Area("Royal Wood", 70, 60),
    new Area("Chasm of the Abyss", 80, 50)
]
function startStreamInterface(input, output) {
    const rl = readline.createInterface({
        input: input
        //output: output
    })
    rl.on('line', (input) => {
        let newPlayer = new Character(input)
        let newInvasion= new Invasion(newPlayer)
        output.write(newInvasion.toString() + "\n")
    })
}

//RETURN STATEMENTS
if (args.length < 1){
    console.log(
`Usage:
    invasionCalc.js SoulLevel
ie:
    node invasionCalc.js 50`)

    startStreamInterface(process.stdin, process.stdout)
    const port = 666
    server.listen(port)
    console.log(`listening on port: ${port}`)
} else {
    //Player Based Variables
    let myPlayer = new Character(myLevel)
    let myInvasion = new Invasion(myPlayer)
    console.log(myInvasion.toString())
}