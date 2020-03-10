import React from 'react'
import Square from './square'

export default function Board(props) {
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

