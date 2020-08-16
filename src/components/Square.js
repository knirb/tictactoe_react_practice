import React from 'react'
function Square(props) {
    return (
      <button className="square" onClick = {() => props.onClick(props.square)}>
        {props.square.value}
      </button>
    );
}

export default Square
