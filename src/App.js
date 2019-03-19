import React, { Component } from 'react';
import './App.css';
import Navigation from './features/Navigation';
import Header from './features/Header';

class App extends Component {
  render() {
    return (
      <div>
      <section>
        <Navigation />;
        <Header aboutme = 'Bennett Benedict Bahara'/>
      </section> 
    </div>
    );
  }
}

export default App;
