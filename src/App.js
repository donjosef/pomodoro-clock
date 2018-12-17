import React, { Component } from 'react';
import Controls from './components/Controls/Controls';
import './App.css';
import Display from './components/Display/Display';

class App extends Component {

  state = {
    breakLength: 5,
    sessionLength: 25,
    mode: 'session'
  }
  render() {
    return (
      <div className="App">
       <h1 className="app-title">Pomodoro Clock</h1>
       <div className="Controls-Wrapper">
        <Controls label="break" value={this.state.breakLength}/>
        <Controls label="session" value={this.state.sessionLength}/>
       </div>
       <Display mode={this.state.mode}/>
      </div>
    );
  }
}

export default App;
