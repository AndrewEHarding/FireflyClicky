(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Mal",img:"https://vignette.wikia.nocookie.net/firefly/images/3/39/Mal.jpg/revision/latest/scale-to-width-down/250?cb=20080301061839",click:!1},{id:2,name:"Zo\xeb",img:"https://vignette.wikia.nocookie.net/firefly/images/1/10/Zoe.jpg/revision/latest/scale-to-width-down/250?cb=20080301064448",click:!1},{id:3,name:"Wash",img:"https://vignette.wikia.nocookie.net/firefly/images/f/fa/Wash.jpg/revision/latest/scale-to-width-down/250?cb=20080301062346",click:!1},{id:4,name:"Book",img:"https://vignette.wikia.nocookie.net/firefly/images/e/e2/Book.jpg/revision/latest/scale-to-width-down/250?cb=20080301063245",click:!1},{id:5,name:"Jayne",img:"https://vignette.wikia.nocookie.net/firefly/images/d/d0/Jayne.jpg/revision/latest/scale-to-width-down/250?cb=20080301065044",click:!1},{id:6,name:"Simon",img:"https://vignette.wikia.nocookie.net/firefly/images/6/63/Simon2.jpg/revision/latest/scale-to-width-down/250?cb=20080308044029",click:!1},{id:7,name:"River",img:"https://vignette.wikia.nocookie.net/firefly/images/2/2c/River.jpg/revision/latest/scale-to-width-down/250?cb=20080301023737",click:!1},{id:8,name:"Inara",img:"https://vignette.wikia.nocookie.net/firefly/images/c/c3/Inara02.jpg/revision/latest/scale-to-width-down/250?cb=20080301063009",click:!1},{id:9,name:"Kaylee",img:"https://vignette.wikia.nocookie.net/firefly/images/5/55/Kaylee.jpg/revision/latest/scale-to-width-down/250?cb=20100426173058",click:!1}]},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(2),o=a.n(n),r=a(3),s=a(4),l=a(7),m=a(5),h=a(8),d=a(6),f=(a(14),function(e){return c.a.createElement("div",{className:"container"},e.children)}),k=function(e){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"display-4"},"Firefly Clicky Game"),c.a.createElement("h2",null,"You Can't Take the Sky From Me..."),c.a.createElement("p",{className:"lead"},"Welcome to the Firefly Clicky Game! The object of the game is to click the portrait of each character once. The trick is that every time you click a portrait, they\u2019re all randomized. Memory is key if you want a high score. Good luck!"),c.a.createElement("hr",{className:"my-4"}),c.a.createElement("p",null,"Current Score: ",e.score," Top Score: ",e.topScore))},g=(a(16),function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("img",{alt:e.name,src:e.img})))}),p=(a(18),function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={characters:d,score:0,topScore:0,clicked:[]},a.shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=[e[a],e[t]];e[t]=i[0],e[a]=i[1]}return e},a.newGame=function(){a.setState({score:0}),a.shuffle(a.state.characters)},a.cardClick=function(e){e.click?a.state.score>a.state.topScore&&a.setState({topScore:a.state.score}):(e.click=!1,a.setState({score:a.state.score+1}),a.setState({characters:a.shuffle(a.state.characters)}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(f,null,c.a.createElement(k,{score:this.state.score,topScore:this.state.topScore}),this.state.characters.map(function(e){return c.a.createElement(g,{img:e.img,name:e.name,key:e.id})}))}}]),t}(c.a.Component));o.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.384dbed7.chunk.js.map