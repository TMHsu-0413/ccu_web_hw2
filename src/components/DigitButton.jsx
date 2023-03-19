import React, {useContext} from 'react';
import {CalContext} from '../CalContext'
import './Button.css'

const DigitButton = ({digit}) => {
  const {addDigit} = useContext(CalContext);
  const playAudio = () => {
    const Audio = document.createElement("audio");
    Audio.src = require('../image/button.mp3');
    Audio.play();
  }

  return <button style={{ "gridColumn" : digit === "0"? "span 2" : null}} onClick={() => {
    playAudio();
    addDigit(digit);
  }}>{digit}</button>
}

export default DigitButton;
