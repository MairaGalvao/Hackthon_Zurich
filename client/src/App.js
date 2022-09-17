import React, {useState} from "react";
import GameIteration from "./GameIteration";

function App() {

    const [counter, setCounter] = useState(1)
    const [wordArray, setWordArray] = useState(['water'])

    const onClick = (upcomingWord) => {
        setCounter(counter + 1)
        setWordArray([...wordArray, upcomingWord])
    }

    return (
        <>
            {[...Array(counter)].map(() => {
                return <div>
                    <GameIteration onClick={onClick} input={wordArray[counter - 1]}/>
                </div>
            })}

        </>
    );
}

export default App;
