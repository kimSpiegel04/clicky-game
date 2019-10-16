import React from 'react';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import Game from '../src/components/Game';
import Footer from '../src/components/Footer';
import pokemon from './pokemon';

class App extends React.Component {

  state = {
    score: {},
    topScore: {},
    pokemon: pokemon,
    arr: {}
  };

  // when user clicks on an image, add to the array to check
  // addToArray = (key) => {
  //   const arr = { ...this.state.arr };
  //   arr[key] = arr[key] + 1 || 1;
  //   this.setState({ arr });
  // };

  render(){
    return (
      <div className="game">
        <Header />
        <Banner />
        <Game 
          pokemon={this.state.pokemon}
          // addToArray={this.addToArray}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
