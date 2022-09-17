import React, {useState} from "react";

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
            <div>
                <span style={{fontSize:25}}>💧{currentWord.toLocaleUpperCase()}💧</span>
            </div>
            <div>
                <button disabled={isRhymePicked} onClick={onClickSynonym} style={{borderColor: isSynonymPicked ? 'red' : 'grey'}}>synonym
                </button>
                <button disabled={isSynonymPicked} onClick={onClickRhyme} style={{borderColor: isRhymePicked ? 'red' : 'grey'}}>rhyme</button>
            </div>
        </div>
    );
}

export default GameIteration;
