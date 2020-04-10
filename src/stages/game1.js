import React from "react";
import Board from "../components/board";

export default class Game1 extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }], 
            currentStep: 0,
            isXNext: true,
        };
    }

    handleSquareClick(i) {
        const history = this.state.history.slice(0, this.state.currentStep + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if(squares[i] || winner)
            return;
        squares[i] = this.state.isXNext ? 'X' : 'O';
        this.setState({ 
            isXNext: !this.state.isXNext, 
            history: history.concat([{ squares: squares}]), 
            currentStep: this.state.currentStep + 1
        });
    }

    jump(move) {
        console.log(move);
        const isXNext = move %  2 === 0 ? true : false; 
        this.setState({ isXNext: isXNext, currentStep: move});
    }

    render() {
        const history = this.state.history;
        const squares = history[this.state.currentStep].squares;
        const winner = calculateWinner(squares);
        let status;
        if(winner) {
            status = "Winner : " + winner;
        } else {
            status = "Next: " + (this.state.isXNext ? 'X' : 'O');
        }
        
        const move = history.map( (step, move) => { 
            // const desc = move ? "Go to Move #" + move : "Go to start";
            return (
                <button key = {move} onClick={() => this.jump(move)}> History # { move } </button>
            );
        })

        return (
            <React.Fragment> 
                <div id="game">
                    <Board
                        squares = {this.state.history[this.state.currentStep].squares} 
                        handleSquareClick = { i => this.handleSquareClick(i) }
                        />
                </div>
                <div id="game-info"> 
                    <div id="game-status"> 
                        {status}
                    </div>
                    <div>
                        {move}
                    </div>
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
