import React from 'react'
import Square from './square'

export default function Board(props) {
    if(props.squares.length === 9) {
        const squares = props.squares;
        let row_array=[];
        for(var row = 0; row < 3; row++) {
            let row_squares = squares.slice(row * 3, row * 3 + 3);
            row_array.push(row_squares);
        }
        return (
            <React.Fragment>
                <div className = "board-row">
                    <Square value= {props.squares[0]} handleClick={ () => { props.handleSquareClick(0) } }></Square>
                    <Square value= {props.squares[1]} handleClick={ () => { props.handleSquareClick(1) } }></Square>
                    <Square value= {props.squares[2]} handleClick={ () => { props.handleSquareClick(2) } }></Square>
                </div>
                <div className = "board-row">
                    <Square value= {props.squares[3]} handleClick={ () => { props.handleSquareClick(3) } }></Square>
                    <Square value= {props.squares[4]} handleClick={ () => { props.handleSquareClick(4) } }></Square>
                    <Square value= {props.squares[5]} handleClick={ () => { props.handleSquareClick(5) } }></Square>
                </div>
                <div className = "board-row">
                    <Square value= {props.squares[6]} handleClick={ () => { props.handleSquareClick(6) } }></Square>
                    <Square value= {props.squares[7]} handleClick={ () => { props.handleSquareClick(7) } }></Square>
                    <Square value= {props.squares[8]} handleClick={ () => { props.handleSquareClick(8) } }></Square>
                </div>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <div className = "board-row">
                <Square value= {props.squares[0]} handleClick={ () => { props.handleSquareClick(0) } }></Square>
                <Square value= {props.squares[1]} handleClick={ () => { props.handleSquareClick(1) } }></Square>
                <Square value= {props.squares[2]} handleClick={ () => { props.handleSquareClick(2) } }></Square>
                <Square value= {props.squares[3]} handleClick={ () => { props.handleSquareClick(3) } }></Square>
                <Square value= {props.squares[4]} handleClick={ () => { props.handleSquareClick(4) } }></Square>
            </div>
            <div className = "board-row">
                <Square value= {props.squares[5]} handleClick={ () => { props.handleSquareClick(5) } }></Square>
                <Square value= {props.squares[6]} handleClick={ () => { props.handleSquareClick(6) } }></Square>
                <Square value= {props.squares[7]} handleClick={ () => { props.handleSquareClick(7) } }></Square>
                <Square value= {props.squares[8]} handleClick={ () => { props.handleSquareClick(8) } }></Square>
                <Square value= {props.squares[9]} handleClick={ () => { props.handleSquareClick(9) } }></Square>
            </div>
            <div className = "board-row">
                <Square value= {props.squares[10]} handleClick={ () => { props.handleSquareClick(10) } }></Square>
                <Square value= {props.squares[11]} handleClick={ () => { props.handleSquareClick(11) } }></Square>
                <Square value= {props.squares[12]} handleClick={ () => { props.handleSquareClick(12) } }></Square>
                <Square value= {props.squares[13]} handleClick={ () => { props.handleSquareClick(13) } }></Square>
                <Square value= {props.squares[14]} handleClick={ () => { props.handleSquareClick(14) } }></Square>
            </div>
            <div className = "board-row">
                <Square value= {props.squares[15]} handleClick={ () => { props.handleSquareClick(15) } }></Square>
                <Square value= {props.squares[16]} handleClick={ () => { props.handleSquareClick(16) } }></Square>
                <Square value= {props.squares[17]} handleClick={ () => { props.handleSquareClick(17) } }></Square>
                <Square value= {props.squares[18]} handleClick={ () => { props.handleSquareClick(18) } }></Square>
                <Square value= {props.squares[19]} handleClick={ () => { props.handleSquareClick(19) } }></Square>
            </div>
            <div className = "board-row">
                <Square value= {props.squares[20]} handleClick={ () => { props.handleSquareClick(20) } }></Square>
                <Square value= {props.squares[21]} handleClick={ () => { props.handleSquareClick(21) } }></Square>
                <Square value= {props.squares[22]} handleClick={ () => { props.handleSquareClick(22) } }></Square>
                <Square value= {props.squares[23]} handleClick={ () => { props.handleSquareClick(23) } }></Square>
                <Square value= {props.squares[24]} handleClick={ () => { props.handleSquareClick(24) } }></Square>
            </div>
        </React.Fragment>
    );
}

