import React from 'react'

export default function Button(props) {
    const { type, toggleTimer, onReset } = props;

  return (
    <button 
        id={type} 
        className={type}
        onClick={type === 'start_stop' ? toggleTimer : onReset}>{props.children}</button>
  );
}
