import React from 'react';
import Choice from "./Choice";

import "./Round.scss";

const Round = (props) => {
    if(Math.random() >= 0.5){
        return(
            <div className="round">
                <Choice click={props.answerHandler} text={props.data.true.title}/>            
                <Choice click={props.answerHandler} text={props.data.false.title}/>            
            </div>
        );
    }else{
        return(
            <div className="round">
                <Choice click={props.answerHandler} text={props.data.false.title}/>            
                <Choice click={props.answerHandler} text={props.data.true.title}/>                    
            </div>
        );
    }  

}

export default Round;