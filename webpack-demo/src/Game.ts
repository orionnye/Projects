declare var require: any

import Board, {Token} from "./Board"

let board = new Board(10, 10)
board.placeMines(10)

console.log('KAABOOM!...game over')
board.render()