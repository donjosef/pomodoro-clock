import React from 'react'

export default function Display(props) {
  const {mode, seconds} = props;

  const mins = Math.floor(seconds / 60);
  const remainingSecs = Math.floor(seconds % 60);

  return (
    <div className="Display">
      <p id="timer-label">{mode}</p>
      <div id="time-left">
      {mins < 10 ? '0' + mins : mins}:{remainingSecs < 10 ? '0' + remainingSecs : remainingSecs}
      </div>
    </div>
  );
}
