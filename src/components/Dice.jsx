import React, { useRef,useContext } from "react";
import { CalContext } from "../CalContext";
import './Dice.css'

const Dice = () => {
  const imgRef = useRef();
  const btnRef = useRef();
  const {addDigit} = useContext(CalContext);

  const playAudio = () => {
    const Audio = document.createElement("audio");
    Audio.src = require('../image/die.mp3');
    Audio.play();
  }

  const rolling = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(1);
      },3000)
    })
  }
  return <div className="dice_container">
    <div className='dice' id="dice_pic">
      <img src={require('../image/die_pic/1.png')} ref={imgRef} width="150" height="150" alt="dice" />
    </div>

    <button className="dice_button" ref={btnRef} onClick={async() => {
      btnRef.current.disabled = true;
      const roll = require("../image/roll_die.gif");
      imgRef.current.src = roll

      playAudio();
      await rolling()

      var num = Math.floor(Math.random()*6) + 1;
      const newSrc = require("../image/die_pic/" + num + ".png");
      addDigit(num.toString())
      btnRef.current.disabled = false;
      imgRef.current.src = newSrc;

    }}>擲骰子</button>
  </div>
}

export default Dice

