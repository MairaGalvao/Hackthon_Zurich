import React from "react";
import "./index.css";
import social from "./social.png";

function GameOver({score}) {
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <p>GAME OVER</p>
                <h2>You made it in *{score}* steps</h2>
                <h1>
                    Challenge your friends to beat your score
                </h1>
                <h1>
                    And raise awareness for water waste.
                </h1>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <img src={social} alt="social" style={{width: 350}}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameOver;
