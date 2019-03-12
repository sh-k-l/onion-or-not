import React, {Component} from 'react';


import LoadingScreen from "../LoadingScreen";
import EndScreen from "../EndScreen";
import Round from "./Round";

import "./Game.scss";



class Game extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            endGame:false,
            topScore:props.topScore,
            currentScore:0,
            rounds:[]
        };
        this.baseState = this.state;
    }




    retrievePost = (subreddit) => {
        return fetch(`https://www.reddit.com/r/${subreddit}/random.json`)
        .then(res => res.text())
        .then(body => {
            body = JSON.parse(body);
            const post = {
                title: body[0].data.children[0].data.title,
                score: body[0].data.children[0].data.score,
                url: body[0].data.children[0].data.url
            }
            if(post.score >= 5) return post;            
            return this.retrievePost(subreddit);
        });
    }

    generateRound = () => {
        return Promise.all([
            this.retrievePost("nottheonion"),
            this.retrievePost("theonion")
        ])
        .then((res) => {
            const round = {
                true: res[0],
                false: res[1],
                selected: null
            };
            let newArr = [...this.state.rounds];
            newArr.push(round);
            this.setState({rounds: newArr});      
        });
    }

    componentWillMount = () => this.generateRound();
     

    handleAnswer = (event) => {       
        if(this.state.rounds[this.state.currentScore].true.title === event.target.innerHTML){
                
            this.setState({
                currentScore: this.state.currentScore+1
            });
            this.generateRound();
        }else{
            this.setState({
                endGame: true
            });
        }        
    }

    restartHandler = () => {
        this.setState(this.baseState);
        this.generateRound();
    }

    render(){
        if(!this.state.rounds[this.state.currentScore]) return <LoadingScreen/>;
        if(this.state.endGame) return <EndScreen topScore={this.props.topScore} score={this.state.currentScore} click={this.restartHandler}/>;
        return (
            <div className="game">
                <p className="score">Score: {this.state.currentScore}</p>
                <Round answerHandler={this.handleAnswer} data={this.state.rounds[this.state.currentScore]}/>
            </div>
        );
    }

}

export default Game;