import React from 'react';
import Cookies from 'universal-cookie';
// import "./EndScreen.scss";

function EndScreen(props){
    const cookies = new Cookies();
    let topScore = cookies.get("oonTopScore") || 0;
    if(topScore < props.score){
        topScore = props.score;
        cookies.set("oonTopScore", topScore, { path: '/' });
    }

    return(
        <div className="end-screen">
            <div className="splash-screen-content">
                <h2>GG!</h2>
                <p>Your score: {props.score}</p>
                <p>Your high score: {topScore}</p>
                <button onClick={props.click}>Try again</button>
            </div>
        </div>
    );
}

export default EndScreen;