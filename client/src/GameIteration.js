import React, {useState} from "react";

function GameIteration({onClick, input}) {
    const [wordArray, setWordArray] = useState([]);
    const [currentWord, setCurrentWord] = useState(input);

    function handleChange(event) {
        setCurrentWord(event.target.value);
    }

    const onClickSynonym = () => {
        setWordArray([...wordArray, currentWord])
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
        fetch(`http://127.0.0.1:5000/rhyme?input=${currentWord}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => onClick(data['output']))

    };

    return (
        <>
            <input onChange={handleChange} value={currentWord}></input>
            <button onClick={onClickSynonym}>synonym</button>
            <button onClick={onClickRhyme}>rhyme</button>
        </>
    );
}

export default GameIteration;
