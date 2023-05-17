import './App.css';
import generateMatrix from "./utils/generateMatrix";
import {useCallback, useEffect, useState} from "react";
import cloneArray from "./utils/cloneArray";
import toggleValue from "./utils/toggleValue";
import nextTick from "./utils/game/nextTick";

function App() {
    const [rows, columns] = [50, 50];
    const [matrix, setMatrix] = useState(generateMatrix(rows, columns));
    const [isGameOn, setGameOn] = useState(false);
    const [iteration, setIteration] = useState(0)

    const onBoxClick = (a, b) => {
        const matrixCopy = cloneArray(matrix);
        matrixCopy[a][b] = toggleValue(matrix[a][b])
        setMatrix(matrixCopy);
    }

    const iterateGame = useCallback(() => {
        if (isGameOn) {
            setMatrix(m => nextTick(m));
            setTimeout(() => setIteration(i => i + 1), 50);
        }
    }, [isGameOn]);

    useEffect(() => {
        isGameOn && iterateGame();
    }, [iteration, isGameOn, iterateGame]);

    return (
        <div className="wrapper">
            <div className="header">
                <h1>Game of Life - Iteration: {iteration} </h1>
                <button
                    onClick={() => {
                        setGameOn((g) => !g);
                    }}
                >{isGameOn ? 'Stop' : 'Start'}
                </button>
            </div>
            <div className="app-wrapper">
                <div
                    className="App"
                    style={{
                        gridTemplateColumns: `repeat(${columns}, 15px)`
                    }}
                >
                    {matrix.map((rows, i) =>
                        rows.map((cols, ix) =>
                            <div
                                key={`$row{i}col${ix}`}
                                className="App__box"
                                onClick={() => onBoxClick(i, ix)}
                                style={{
                                    backgroundColor: matrix[i][ix] ? "gray" : "white"
                                }}
                            >
                            </div>))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
