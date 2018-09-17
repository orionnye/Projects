import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Block(props) {
  return (
    <button className="square">
      {props.value}
    </button>
  );
}
class Square extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <button className="square">
            {this.props.value}
        </button>
        )
    }
}

//========================================

ReactDOM.render(
  <Square value=''/>,
  document.getElementById('root')
);