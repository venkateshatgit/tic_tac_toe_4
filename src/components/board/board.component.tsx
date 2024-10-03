import { useEffect, useState } from 'react';
import Square from '../square/squares.component';
import './board.styles.css';
import { calFunction } from '../../utility/utility';

interface Props{
    xIsNext: boolean,
    squares: string[],
    onPlay: (nextSquare: string[]) => void
}

function Board({xIsNext, squares, onPlay}: Props) {
    const [winner, setWinner] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    useEffect(() => {
        setStatus(`Next player: ${xIsNext ? 'X' : 'O'} `)
    }, [])
 
    const handleClick = (index: number) => {
        if(squares[index] || winner)
            return;

        const newSquares = squares.slice();
        newSquares[index] = xIsNext ? 'X': 'O';

        const calWinner = calFunction(newSquares);
        if(calWinner){
            setStatus(`Winner: ${calWinner}`);
            setWinner(calWinner);
        }
        else
            setStatus(`Next player: ${!xIsNext ? 'X' : 'O'} `);

        onPlay(newSquares)
    }   

    return (
        <div className="gameBoard">
            <div>{status}</div>
            <div className='board'>
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
                </div>

            </div>
        </div>
        
    )
}

export default Board