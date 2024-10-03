import { useState } from 'react';
import './game.styles.css';
import Board from '../board/board.component';

function Game() {
    const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xIsNext = currentMove % 2 === 0
    const currentSquares: string[] = history[currentMove];

    function handlePlay(nextSquare: string[]){
        const nextHistory = [...history.slice(0, currentMove+1), nextSquare];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);      
    }

    function jumpTo(nextMove: number){
        setCurrentMove(nextMove);
    }

    const moves = history.map((item, index) => {
        let description;

        if(index > 0){
            description = `Go to move #${index}`;
        }else{
            description = `Go to start`
        }

        return (
            <li key={index}>
                <button onClick={() => jumpTo(index)}>{description}</button>
            </li>
        )
    })

    return (
        <div className="game">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

export default Game