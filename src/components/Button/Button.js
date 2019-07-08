import React from 'react'

export default function Button(props) {
    const { type, handler } = props;

  return (
    <button 
        id={type} 
        className={type}
        onClick={handler}>{props.children}</button>
  );
}
