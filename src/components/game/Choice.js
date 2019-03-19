import React from 'react';

import "./Choice.scss";

const Choice = (props) => (
    <div className="choice">
        <p onClick={props.click}>{props.text}</p>
    </div>
);

export default Choice;