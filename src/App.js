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
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
