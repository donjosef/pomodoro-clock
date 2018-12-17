import React from 'react'

export default function Display(props) {
  const {mode} = props;
  return (
    <div className="Display">
      <p id="timer-label">{mode}</p>
      <div id="time-left">25000</div>
    </div>
  );
}
