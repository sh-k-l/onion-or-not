(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=(n(17),n(2)),s=n(3),i=n(5),u=n(4),d=n(7),m=n(6);n(18);var h=function(e){return r.a.createElement("div",{className:"intro-screen"},r.a.createElement("div",{className:"intro-screen-content"},r.a.createElement("h2",null,"Onion Or Not"),r.a.createElement("p",null,"Your high score: ",e.topScore),r.a.createElement("button",{onClick:e.click},"GO!"),r.a.createElement("div",{className:"info"},r.a.createElement("p",null,"How to play:"),r.a.createElement("ul",null,r.a.createElement("li",null,"The game gets two random headlines, one from ",r.a.createElement("a",{href:"http://www.reddit.com/r/nottheonion"},"/r/nottheonion")," (real headlines) and one from ",r.a.createElement("a",{href:"www.reddit.com/r/theonion"},"/r/theonion")," (fake headlines)."),r.a.createElement("li",null,"You need to click on the real headline (the post from ",r.a.createElement("a",{href:"http://www.reddit.com/r/nottheonion"},"/r/nottheonion"),")."),r.a.createElement("li",null,"How many can you get in a row?")))))},E=n(10),f=(n(19),function(){return r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("div",{className:"loader"}))});n(20),n(21);var p=function(e){var t=e.rounds.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.true.url},e.true.title)),r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.false.url},e.false.title)))});return r.a.createElement("div",{className:"review"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"/r/nottheonion ",r.a.createElement("p",null,"(real headline)")),r.a.createElement("th",null,"/r/theonion ",r.a.createElement("p",null,"(false headline)")))),r.a.createElement("tbody",null,t)))},w=function(e){var t=new m.a,n=t.get("oonTopScore")||0,a=[r.a.createElement("p",{class:"score"},"Your score: ",e.score),r.a.createElement("p",null,"Your high score: ",n)];return n<e.score&&(n=e.score,t.set("oonTopScore",n,{path:"/"}),a=[r.a.createElement("p",null,"NEW HIGH SCORE"),r.a.createElement("p",{className:"high-score"},"You scored: ",e.score,"!")]),r.a.createElement("div",{className:"end-screen"},r.a.createElement("div",{className:"gg"},r.a.createElement("h2",null,"GG!"),a,r.a.createElement("button",{onClick:e.click},"Try again")),r.a.createElement("div",{className:"review-wrapper"},r.a.createElement(p,{rounds:e.rounds})))},S=(n(22),function(e){return r.a.createElement("div",{className:"choice"},r.a.createElement("p",{onClick:e.click},e.text))}),v=(n(23),function(e){return Math.random()>=.5?r.a.createElement("div",{className:"round"},r.a.createElement(S,{click:e.answerHandler,text:e.data.true.title}),r.a.createElement(S,{click:e.answerHandler,text:e.data.false.title})):r.a.createElement("div",{className:"round"},r.a.createElement(S,{click:e.answerHandler,text:e.data.false.title}),r.a.createElement(S,{click:e.answerHandler,text:e.data.true.title}))}),g=(n(24),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).retrievePost=function(e){return fetch("https://www.reddit.com/r/".concat(e,"/random.json")).then(function(e){return e.text()}).then(function(t){var a={title:(t=JSON.parse(t))[0].data.children[0].data.title,score:t[0].data.children[0].data.score,url:t[0].data.children[0].data.url};return a.score>=5?a:n.retrievePost(e)})},n.generateRound=function(){return Promise.all([n.retrievePost("nottheonion"),n.retrievePost("theonion")]).then(function(e){var t={true:e[0],false:e[1],selected:null},a=Object(E.a)(n.state.rounds);a.push(t),n.setState({rounds:a})})},n.componentWillMount=function(){return n.generateRound()},n.handleAnswer=function(e){n.state.rounds[n.state.currentScore].true.title===e.target.innerHTML?(n.setState({currentScore:n.state.currentScore+1}),n.generateRound()):n.setState({endGame:!0})},n.restartHandler=function(){n.setState(n.baseState),n.generateRound()},n.state={endGame:!1,topScore:e.topScore,currentScore:0,rounds:[]},n.baseState=n.state,n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.endGame?r.a.createElement(w,{rounds:this.state.rounds,topScore:this.props.topScore,score:this.state.currentScore,click:this.restartHandler}):r.a.createElement("div",{className:"game"},r.a.createElement("p",{className:"score"},"Score: ",this.state.currentScore),this.state.rounds[this.state.currentScore]?r.a.createElement(v,{answerHandler:this.handleAnswer,data:this.state.rounds[this.state.currentScore]}):r.a.createElement(f,null))}}]),t}(a.Component)),k=function(e){function t(e){var n;Object(l.a)(this,t);var a=new m.a;return(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleStart=function(){n.setState({renderIntroScreen:!1})},n.state={renderIntroScreen:!0,topScore:a.get("oonTopScore")||0},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.renderIntroScreen?r.a.createElement(h,{click:this.handleStart,topScore:this.state.topScore}):r.a.createElement(g,{topScore:this.state.topScore})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.a7e3cc5c.chunk.js.map