import React, {useEffect, useState} from "react";
import GameIteration from "./GameIteration";
import lake from './lake.jpg'


function App() {

    const [counter, setCounter] = useState(1)
    const [wordArray, setWordArray] = useState(['water'])
    const [targetWord, setTargetWord] = useState("waste")

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
        <div style={{display: 'flex', textAlign: 'center', flexDirection: 'column', position: 'relative'}}>

            <h1>Connect "{wordArray[0]}" to "{targetWord}" with the least amount of steps!</h1>

            <div style={{textAlign: 'left', fontSize: 40, position:'fixed'}}>Steps: {counter}</div>

            {[...Array(counter)].map(() => {
                return <div style={{display: 'flex', justifyContent: 'center'}}>
                    <GameIteration onClick={onGameIteration} input={wordArray[counter - 1]}/>
                </div>
            })}

            <div style={{
                position: 'absolute', bottom: 300, textAlign: 'center', marginLeft: 'auto',
                marginRight: 'auto', left: 0, right: 0, fontSize: 30
            }}>
                {targetWord.toLocaleUpperCase()}
            </div>

            <img src={lake} alt="lake"/>

        </div>
    );
}

export default App;
