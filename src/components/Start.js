import React, {Component} from 'react';
import Cookies from 'universal-cookie';

import SplashScreen from "./SplashScreen";
import Game from "./game/Game";


class Start extends Component{
    constructor(props){
        const cookies = new Cookies();
        super(props);
        this.state = {
            renderSplashScreen: true,
            topScore: cookies.get("oonTopScore") || 0
        };
    }

    handleStart = () => {
        this.setState({renderSplashScreen: false});
    }

    render(){
        if(this.state.renderSplashScreen){
            return <SplashScreen click={this.handleStart} topScore={this.state.topScore}/>;
        }
        return <Game topScore={this.state.topScore}/>;        
    }

}

export default Start;