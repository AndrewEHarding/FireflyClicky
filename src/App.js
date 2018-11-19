import React from 'react';
import characters from "./characters";
import Wrapper from "./components/Wrapper";
import Header from './components/Header';
import Card from "./components/Card";
import "./App.css";

class App extends React.Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    clicked: []
  }

  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  newGame = () => {
    this.setState({score: 0});
    this.shuffle(this.state.characters);
  }

  cardClick = (event) => {
    if(!event.click){
      event.click = false;
      this.setState({score: this.state.score + 1});
      this.setState({characters: this.shuffle(this.state.characters)});
    }
    else{
      if(this.state.score > this.state.topScore){
        this.setState({topScore: this.state.score});
      }
      // newGame();
    }
  }



  render() {
    return (
      <Wrapper>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {this.state.characters.map(character => (
          <Card
            img={character.img}
            name={character.name}
            key={character.id}
            // onClick={this.shuffle(this.state.characters)}
            // onClick={this.cardClick()}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
