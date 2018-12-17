import React from 'react'

export default function Button(props) {
    const { type } = props;

  return (
    <button id={type} className={type}>{props.children}</button>
  );
}
