import React, {useEffect, useState} from "react";
import GameIteration from "./GameIteration";
import lake from "./lake.jpg";
import GameOver from "./GameOver";

function App({inputWord}) {
    const [counter, setCounter] = useState(1);
    const [wordArray, setWordArray] = useState([inputWord]);
    const [targetWord, setTargetWord] = useState("water");
    const [displayGameOver, setDisplayGameOver] = useState(false);

    const onGameIteration = (upcomingWord) => {
        setCounter(counter + 1);
        setWordArray([...wordArray, upcomingWord]);
    };

    useEffect(() => {
        // check if game is over
        const gameOver = wordArray[wordArray.length - 1].toLocaleUpperCase() === targetWord.toLocaleUpperCase();
        if (gameOver) {
            setDisplayGameOver(true)
        }
    }, [wordArray, targetWord]);

    return (
        <>
            {displayGameOver && <GameOver score={counter}/>}
            {!displayGameOver && <div
                style={{
                    display: "flex",
                    textAlign: "center",
                    flexDirection: "column",
                    position: "relative",
                }}
            >
                <h1>
                    Connect "{wordArray[0].toLocaleUpperCase()}" to "{targetWord.toLocaleUpperCase()}" with the least
                    amount
                    of
                    steps!
                </h1>

                <div style={{textAlign: "left", fontSize: 40, position: "fixed"}}>
                    Steps: {counter}
                </div>

                <button style={{fontSize: 20, position: "fixed", right: 0, cursor: 'pointer'}} onClick={() => {
                    setDisplayGameOver(true)
                }}>
                    I give up! 😢
                </button>


                {[...Array(counter)].map(() => {
                    return (
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <GameIteration
                                onClick={onGameIteration}
                                input={wordArray[counter - 1]}
                            />
                        </div>
                    );
                })}

                <div
                    style={{
                        position: "absolute",
                        bottom: 300,
                        textAlign: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        fontSize: 30,
                    }}
                >
                    {targetWord.toLocaleUpperCase()}
                </div>

                <img src={lake} alt="lake"/>


            </div>}
        </>
    )
        ;
}

export default App;
