import React, {Component} from 'react';
import Cookies from 'universal-cookie';

import IntroScreen from "./IntroScreen";
import Game from "./game/Game";


class Start extends Component{
    constructor(props){
        const cookies = new Cookies();
        super(props);
        this.state = {
            renderIntroScreen: true,
            topScore: cookies.get("oonTopScore") || 0
        };
    }

    handleStart = () => {
        this.setState({renderIntroScreen: false});
    }

    render(){
        if(this.state.renderIntroScreen){
            return <IntroScreen click={this.handleStart} topScore={this.state.topScore}/>;
        }
        return <Game topScore={this.state.topScore}/>;        
    }

}

export default Start;