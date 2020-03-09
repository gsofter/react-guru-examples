import React from 'react';

import Square from './square'
export default class Board extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    handleSquareClick(i) {
        const squares = this.state.squares.slice();
        const winner = calculateWinner(squares);
        if( winner || squares[i] )
            return;
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({ 
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square 
                value = { this.state.squares[i] } 
                handleClick = { () => { this.handleSquareClick(i) } }/>
        );
    }

    render() {
        const next = this.state.xIsNext ? 'X' : 'O';
        const winner = calculateWinner(this.state.squares);
        let status;
        if(winner) {
            status = "Winner : " + winner;
        } else {
            status = "Next turn : " + next;
        }

        return (
            <React.Fragment>
                { status }
                <div className = "row"> 
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className = "row"> 
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className = "row"> 
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>
            </React.Fragment>
        );
    }
}

function calculateWinner(squares) {
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
}
