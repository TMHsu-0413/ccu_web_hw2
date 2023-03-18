import React, {useContext} from 'react';
import {CalContext} from '../CalContext'
import './Button.css'

const DigitButton = ({digit}) => {
  const {addDigit} = useContext(CalContext);

  return <button style={{ "gridColumn" : digit === "0"? "span 2" : null}} onClick={() => {
    addDigit(digit);
  }}>{digit}</button>
}

export default DigitButton;
