import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import Recette from './Recette.js';
import BackgroundColor from './BackgroundColor.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Recettes de cuisine</h1>
          <Clock></Clock>
        </header>
        
        <p className="App-intro">
            Hi {this.props.name}
        </p>
        <div className="App-content">
            <BackgroundColor/>
        </div>
        <Recette title="Pâtes carbo" ingredients={['a','b','c']} />
        
        <footer className="App-footer">
            <h1 className="App-title">Test de footer</h1>
        </footer>
      </div>
    );
  }
}

export default App;
