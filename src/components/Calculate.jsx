import React, { useContext } from 'react'
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import './Calculate.css'
import { CalContext } from '../CalContext';

const Calculate = () => {
  const {prevNum,curNum,clear,delDigit,exp,log,sqrt,sin,cos,tan,add,sub,mul,div,equal} = useContext(CalContext)
  return (
    <div className="Container">

      <div className="Output">
        <div>{prevNum}</div>
        <div>{curNum}</div>
      </div>

      <OperationButton Operate="AC" func={clear} />
      <OperationButton Operate="BS" func={delDigit} />
      <OperationButton Operate="exp" func={exp} />
      <OperationButton Operate="log" func={log} />
      <OperationButton Operate="÷" func={div} />

      <DigitButton digit="7" />
      <DigitButton digit="8" />
      <DigitButton digit="9" />
      <OperationButton Operate="√" func={sqrt} />
      <OperationButton Operate="x" func={mul} />

      <DigitButton digit="4" />
      <DigitButton digit="5" />
      <DigitButton digit="6" />
      <OperationButton Operate="sin" func={sin} />
      <OperationButton Operate="-" func={sub} />

      <DigitButton digit="1" />
      <DigitButton digit="2" />
      <DigitButton digit="3" />
      <OperationButton Operate="cos" func={cos} />
      <OperationButton Operate="+" func={add} />

      <DigitButton digit="0" />
      <DigitButton digit="." />
      <OperationButton Operate="tan" func={tan} />
      <OperationButton Operate="=" func={equal} />
    </div>
  )
}

export default Calculate;

