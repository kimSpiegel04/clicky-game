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
    pokemon: pokemon
  };

  render(){
    return (
      <div className="game">
        <Header />
        <Banner />
        <Game 
          pokemon={this.state.pokemon}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
