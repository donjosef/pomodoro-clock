import React, { Component } from 'react';
import Controls from './components/Controls/Controls';
import Display from './components/Display/Display';
import Button from './components/Button/Button';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faPause);



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
       <Button type="start_stop"><FontAwesomeIcon icon="play" /></Button>
       <Button type="reset">RESET</Button>
      </div>
    );
  }
}

export default App;
