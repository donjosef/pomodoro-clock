import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMinus);

export default function (props) {
  const {label, value} = props;

  let decrementId;
  let incrementId;
  let labelId;
  let valueId;
  if(label === 'break') {
    decrementId = 'break-decrement';
    incrementId = 'break-increment';
    labelId = 'break-label';
    valueId = 'break-length';
  } 
  if(label === 'session') {
      decrementId = 'session-decrement';
      incrementId = 'session-increment';
      labelId = 'session-label';
      valueId = 'session-length';
  }

  return (
    <div className="Controls">
      <p id={labelId}>{label} length</p>
      <button id={decrementId}><FontAwesomeIcon icon="minus" /></button>
      <span id={valueId}>{value}</span>
      <button id={incrementId}><FontAwesomeIcon icon="plus" /></button>
    </div>
  );
}
