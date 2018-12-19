import React, { Component } from 'react';
import Controls from './components/Controls/Controls';
import Display from './components/Display/Display';
import Button from './components/Button/Button';
import AudioSrc from './media/BeepSound.wav';
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
    breakSeconds: defaultBreak * 60,
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
      this.sessionInterval = setInterval(this.sessionTimer, 1000)
    }
    if(prevState.play !== this.state.play && !this.state.play) {
      clearInterval(this.sessionInterval);
    }
    
    if(prevState.sessionLength !== this.state.sessionLength) {
      /*Every time i click on controls to change the values of session, change the respective seconds to display the correct time on Display*/
      this.setState({
        sessionSeconds: this.state.sessionLength * 60
      })
    }

    if(prevState.breakLength !== this.state.breakLength) {
      /*Every time i click on controls to change the values of break, change the respective seconds to display the correct break on Display*/
      this.setState({
        breakSeconds: this.state.breakLength * 60
      })
    }

    if(prevState.sessionSeconds !== this.state.sessionSeconds && this.state.sessionSeconds === 0) {
      clearInterval(this.sessionInterval);
      this.setState({
        mode: 'break',
        sessionSeconds: this.state.sessionLength * 60
      });
      this.breakInterval = setInterval(this.breakTimer, 1000);

      this.audio.play();
    }

    if(prevState.breakSeconds !== this.state.breakSeconds && this.state.breakSeconds === 0) {
      clearInterval(this.breakInterval);
      this.setState({
        mode: 'session',
        breakSeconds: this.state.breakLength * 60
      });
      this.sessionInterval = setInterval(this.sessionTimer, 1000);
    }
    
  }

  sessionTimer = () => {
    this.setState(prevState => ({
      sessionSeconds: prevState.sessionSeconds - 1
    }));
  }

  breakTimer = () => {
    this.setState(prevState => ({
      breakSeconds: prevState.breakSeconds - 1
    }));
  }
  
  changeLengthValues = (e, id) => {
    if(this.state.play) {
      return;
    }
    switch(id) {
      case 'break-decrement':
       if(this.state.breakLength > 1) {
        this.setState(prevState => ({
          breakLength: prevState.breakLength - 1
        }));
       }
      break;

      case 'break-increment':
       if(this.state.breakLength < 60) {
        this.setState(prevState => ({
          breakLength: prevState.breakLength + 1
        }));
       }
      break;

      case 'session-decrement':
       if(this.state.sessionLength > 1) {
        this.setState(prevState => ({
          sessionLength: prevState.sessionLength - 1
        }));
       }
      break;

      case 'session-increment':
       if(this.state.sessionLength < 60) {
        this.setState(prevState => ({
          sessionLength: prevState.sessionLength + 1
        }));
       }
      break;
    }
  }

  resetHandler = () => {
    clearInterval(this.breakInterval);
    this.setState({
      breakLength: defaultBreak,
      sessionLength: defaultSession,
      sessionSeconds: defaultSession * 60,
      breakSeconds: defaultBreak * 60,
      mode: 'session',
      play: false
    });
  }
  render() {
    return (
      <div className="App">
       <h1 className="app-title">Pomodoro Clock</h1>
       <div className="Controls-Wrapper">
        <Controls click={this.changeLengthValues} label="break" value={this.state.breakLength}/>
        <Controls click={this.changeLengthValues} label="session" value={this.state.sessionLength}/>
       </div>
       <Display 
          mode={this.state.mode} 
          seconds={this.state.mode === 'session' ? this.state.sessionSeconds : this.state.breakSeconds}/>
       <Button type="start_stop" toggleTimer={this.toggleTimer}><FontAwesomeIcon icon={this.state.play ? 'pause' : 'play'} /></Button>
       <Button type="reset" onReset={this.resetHandler}>RESET</Button>

       <audio id="beep" src={AudioSrc} ref={(audio) => this.audio = audio}></audio>
      </div>
    );
  }
}

export default App;
