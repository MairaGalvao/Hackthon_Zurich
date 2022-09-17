import React, {useEffect, useState} from "react";
import GameIteration from "./GameIteration";

function App() {

    const [counter, setCounter] = useState(1)
    const [wordArray, setWordArray] = useState(['water'])
    const [targetWord, setTargetWord] = useState("target")

    const onGameIteration = (upcomingWord) => {
        setCounter(counter + 1)
        setWordArray([...wordArray, upcomingWord])
    }

    useEffect(() => {
        // check if game is over
        const gameOver = wordArray[wordArray.length - 1] === targetWord
        if (gameOver) {
            console.log("GAME OVER")
        }
    }, [wordArray, targetWord])

    return (
        <div>
            {[...Array(counter)].map(() => {
                return <div style={{display: 'flex', justifyContent: 'center'}}>
                    <GameIteration onClick={onGameIteration} input={wordArray[counter - 1]}/>
                </div>
            })}
            <div>
                {targetWord}
            </div>

        </div>
    );
}

export default App;
