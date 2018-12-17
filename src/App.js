import React, { Component } from 'react';
import Controls from './components/Controls/Controls';
import './App.css';

class App extends Component {

  state = {
    breakLength: 5,
    sessionLength: 25
  }
  render() {
    return (
      <div className="App">
       <div className="Controls-Wrapper">
        <Controls label="break" value={this.state.breakLength}/>
        <Controls label="session" value={this.state.sessionLength}/>
       </div>
      </div>
    );
  }
}

export default App;
