import React, { Component } from 'react';
import './App.css';
import FoodLandingpage from "./containers/landingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
       <FoodLandingpage/>
      </div>
    );
  }
}

export default App;
