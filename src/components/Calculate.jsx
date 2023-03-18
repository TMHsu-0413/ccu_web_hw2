import React, { useContext } from 'react'
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import './Calculate.css'
import { CalContext } from '../CalContext';

const Calculate = () => {
  const {prevNum,curNum,clear,delDigit} = useContext(CalContext)
  return (
    <div className="Container">

      <div className="Output">
        <div>{prevNum}</div>
        <div>{curNum}</div>
      </div>

      <OperationButton Operate="AC" func={clear} />
      <OperationButton Operate="BS" func={delDigit}>BS</OperationButton>
      <button>exp</button>
      <button>log</button>
      <button>÷</button>

      <DigitButton digit="7" />
      <DigitButton digit="8" />
      <DigitButton digit="9" />
      <button>√</button>
      <button>x</button>

      <DigitButton digit="4" />
      <DigitButton digit="5" />
      <DigitButton digit="6" />
      <button>sin</button>
      <button>-</button>

      <DigitButton digit="1" />
      <DigitButton digit="2" />
      <DigitButton digit="3" />
      <button>cos</button>
      <button>+</button>

      <DigitButton digit="0" />
      <DigitButton digit="." />
      <button>tan</button>
      <button>=</button>
    </div>
  )
}

export default Calculate;

