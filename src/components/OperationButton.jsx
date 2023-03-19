import React from "react";
import './Button.css'

const OperationButton = ({ Operate, func }) => {
  const playAudio = () => {
    const Audio = document.createElement("audio");
    if (Operate === 'AC')
      Audio.src = require('../image/clear.mp3')
    else
      Audio.src = require('../image/button.mp3');

    Audio.play();
  }
  return <button onClick={() => {
    playAudio();
    func();
  }}>
    {Operate}
  </button>
}

export default OperationButton;
