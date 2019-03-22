import React from 'react';
import Cookies from 'universal-cookie';
import "./EndScreen.scss";
import Review from "./Review";

const EndScreen = (props) => {
    const cookies = new Cookies();
    let topScore = cookies.get("oonTopScore") || 0;

    let body = [
        <p class="score">Your score: {props.score}</p>,
        <p>Your high score: {topScore}</p>
    ];

    if(topScore < props.score){
        topScore = props.score;
        cookies.set("oonTopScore", topScore, { path: '/' });
        body = [
            <p>NEW HIGH SCORE</p>,
            <p className="high-score">You scored: {props.score}!</p>            
        ]
    }

    return(
        <div className="end-screen">

            <div className="gg">
            <h2>GG!</h2>
            {body}
            <button onClick={props.click}>Try again</button>
            </div>

            <div className="review-wrapper">
                <Review rounds={props.rounds}/>
            </div>
        </div>
    );
}

export default EndScreen;