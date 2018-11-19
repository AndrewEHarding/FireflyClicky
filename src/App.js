import React from 'react';
import Wrapper from "./components/Wrapper";

class App extends React.Component {
  state = {
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
      <Wrapper />
    );
  }
}

export default App;
