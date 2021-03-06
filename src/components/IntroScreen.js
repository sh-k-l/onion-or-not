import React from 'react';
import "./IntroScreen.scss";

function IntroScreen(props){
    
    return(
        <div className="intro-screen">
            <div className="intro-screen-content">
                <h2>Onion Or Not</h2>
                <p>Your high score: {props.topScore}</p>
                <button onClick={props.click}>GO!</button>
                <div className="info">
                    <p>How to play:</p>
                    <ul>
                        <li>The game gets two random headlines, one from <a href="http://www.reddit.com/r/nottheonion">/r/nottheonion</a> (real headlines) and one from <a href="www.reddit.com/r/theonion">/r/theonion</a> (fake headlines).</li>
                        <li>You need to click on the real headline (the post from <a href="http://www.reddit.com/r/nottheonion">/r/nottheonion</a>).</li>
                        <li>How many can you get in a row?</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default IntroScreen;