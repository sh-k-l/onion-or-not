import React from 'react';
import "./SplashScreen.scss";

function SplashScreen(props){
    
    return(
        <div className="splash-screen">
            <div className="splash-screen-content">
                <h2>Onion Or Not</h2>
                <p>Your high score: {props.topScore}</p>
                <button onClick={props.click}>GO!</button>
                <div className="info">
                    <p>How to play:</p>
                    <p>The game gets two random headlines, one from <a href="www.reddit.com/r/nottheonion">/r/nottheonion</a> and one from <a href="www.reddit.com/r/theonion">/r/theonion</a>.</p>
                    <p>You need to decide which is the real headline (the post from <a href="www.reddit.com/r/nottheonion">/r/nottheonion</a>)</p>
                    <p>How many can you get in a row?</p>
                </div>
            </div>
        </div>
    );
}

export default SplashScreen;