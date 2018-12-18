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


const defaultBreak = 5;
const defaultSession = 25;
class App extends Component {

  state = {
    breakLength: defaultBreak,
    sessionLength: defaultSession,
    sessionSeconds: defaultSession * 60,
    mode: 'session',
    play: false
  }

  toggleTimer = () => {
    this.setState({
      play: !this.state.play
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.play !== this.state.play && this.state.play) {
      this.interval = setInterval(this.timer, 1000)
    }
    if(prevState.play !== this.state.play && !this.state.play) {
      clearInterval(this.interval);
    }
    
  }

  timer = () => {
    this.setState(prevState => ({
      sessionSeconds: prevState.sessionSeconds -= 1
    }));
  }
  
  render() {
    return (
      <div className="App">
       <h1 className="app-title">Pomodoro Clock</h1>
       <div className="Controls-Wrapper">
        <Controls label="break" value={this.state.breakLength}/>
        <Controls label="session" value={this.state.sessionLength}/>
       </div>
       <Display mode={this.state.mode} seconds={this.state.sessionSeconds}/>
       <Button type="start_stop" toggleTimer={this.toggleTimer}><FontAwesomeIcon icon={this.state.play ? 'pause' : 'play'} /></Button>
       <Button type="reset" onReset={this.resetHandler}>RESET</Button>
      </div>
    );
  }
}

export default App;
