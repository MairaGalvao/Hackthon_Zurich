import React, {useState} from "react";
import Drop from "./Drop";

function GameIteration({onClick, input}) {
    const [wordArray, setWordArray] = useState([]);
    const [currentWord, setCurrentWord] = useState(input);
    const [isSynonymPicked, setIsSynonymPicked] = useState(false);
    const [isRhymePicked, setIsRhymePicked] = useState(false);

    const onClickSynonym = () => {
        setWordArray([...wordArray, currentWord])
        setIsSynonymPicked(true)
        fetch(`http://127.0.0.1:5000/synonym?input=${currentWord}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => onClick(data['output']))

    };

    const onClickRhyme = () => {
        setWordArray([...wordArray, currentWord])
        setIsRhymePicked(true)
        fetch(`http://127.0.0.1:5000/rhyme?input=${currentWord}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => onClick(data['output']))

    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Drop word={currentWord}/>
            <div style={{marginTop: 40}}>
                <button disabled={isRhymePicked} onClick={onClickSynonym} style={{
                    borderColor: isSynonymPicked ? 'red' : 'grey',
                    borderRadius: '50%', height: 70, width: 70, cursor: 'pointer'
                }}>🤝 synonym
                </button>
                <button disabled={isSynonymPicked} onClick={onClickRhyme}
                        style={{
                            borderColor: isRhymePicked ? 'red' : 'grey',
                            borderRadius: '50%',
                            height: 70,
                            width: 70,
                            cursor: 'pointer'
                        }}>👂 rhyme
                </button>
            </div>

        </div>
    );
}

export default GameIteration;
