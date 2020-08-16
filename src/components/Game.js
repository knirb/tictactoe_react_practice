import React from 'react';
import Board from './Board'

class Game extends React.Component {
  state = {
    squares : [
      {id: 0, value:null},
      {id: 1, value:null},
      {id: 2, value:null},
      {id: 3, value:null},
      {id: 4, value:null},
      {id: 5, value:null},
      {id: 6, value:null},
      {id: 7, value:null},
      {id: 8, value:null}
    ],
    nextSymbol : 'X'
  }
  handleClick = (square) => {
    console.log(square);
    let squares = [...this.state.squares];
    const index = squares.indexOf(square);
    let nextSymbol = this.state.nextSymbol;
    if (squares[index].value === null && winner !== null){
      squares[index].value = nextSymbol;
      if (nextSymbol === 'X'){nextSymbol = 'O'}
      else{nextSymbol = 'X'};
      this.setState({squares,nextSymbol});
      var winner = this.calculateWinner(squares)
      if (winner !== null)
        console.log(`${winner} has won!`)
    }
  };

  calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
      return squares[a].value;
    }
  }
  return null;
  }


  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares = {this.state.squares} onClick = {this.handleClick}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default Game;
