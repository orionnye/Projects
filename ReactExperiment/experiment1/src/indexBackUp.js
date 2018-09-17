import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function BombProximityAssignment(grid, bombX, bombY){
    if(bombY !== 0){
        grid[bombY - 1][bombX] = <Square value='1'/>//upper
        if(bombX !== 0){
            grid[bombY - 1][bombX - 1] = <Square value='1'/>//upper left
            grid[bombY][bombX - 1] = <Square value='1'/>//left
        }
        if(bombX !== grid[bombY].length){
            grid[bombY - 1][bombX + 1] = <Square value='1'/>//upper right
            grid[bombY][bombX + 1] = <Square value='1'/>//right
        }
    }
    if(bombY !== grid.length){
        grid[bombY + 1][bombX] = <Square value='1'/>//lower
        if(bombX !== 0){
            grid[bombY + 1][bombX + 1] = <Square value='1'/>//lower right
            grid[bombY][bombX + 1] = <Square value='1'/>//right again
        }
        if(bombX !== grid[bombY].length){
            grid[bombY + 1][bombX - 1] = <Square value='1'/>//lower left
            grid[bombY][bombX - 1] = <Square value='1'/>//left again
        }
    }

}
class Square extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
        }
    }
    render(props){
        return (
            //onClick={() => this.setState({value: 'YO'})}
            <button className="square">
                {this.props.value}
            </button>
        )
    }
}

class Grid {
    constructor(width, height){
        this.width = width
        this.height = height
        this.grid = []
        let squareTotal = width * height
        let mineTotal = 10;

        //fill array
        for (let y = 0; y < this.height; y++){
            let row = []
            for (let x = 0; x < this.width; x++){
                row.push(<Square value={0}/>)
            }
            row.push(<div className="grid-row"></div>)
            this.grid.push(row)
        }
        //place mines
        for (let m = 0; m < mineTotal; m++){
            let volunteers = Math.floor(Math.random() * height)
            let tribute = Math.floor(Math.random() * width)
            this.grid[volunteers][tribute] = <Square value={'💣'}/>
            //set surrounding values
            BombProximityAssignment(this.grid, volunteers, tribute)
        }
    }
    render() {
        return(this.grid)
    }
}

let model = new Grid(10, 10);

//========================================

ReactDOM.render(model.render(), document.getElementById('root'))