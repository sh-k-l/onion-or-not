import React from 'react';

import "./Choice.scss";

function Choice(props){
    return(
        <div className="choice">
            <p onClick={props.click}>{props.text}</p>
        </div>
    );
}

export default Choice;