import React, { useReducer, createContext } from "react";
import { InitialState, CalReducer, ACTIONS } from './CalReducer';

export const CalContext = createContext(InitialState)

export const CalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CalReducer, InitialState)

  const addDigit = (digit) => {
    var newNum = state.curNum;
    if (newNum === null)
      newNum = digit;
    else
      newNum += digit;

    dispatch({
      type: ACTIONS.ADD_DIGIT,
      payload: {
        curNum: newNum,
      }
    })
  }

  const clear = () => {
    state.preNum = null;
    state.curNum = null;

    dispatch({
      type: ACTIONS.CLEAR,
      payload: {
        prevNum : state.preNum,
        curNum : state.curNum
      }
    })
  }

  const delDigit = () => {
    var curNum = state.curNum;
    if (curNum === null)
      return curNum
    if (curNum.length === 1){
      curNum = null
    }
    else if(curNum.length > 1)
      curNum = curNum.slice(0,-1)

    dispatch({
      type:ACTIONS.DEL_DIGIT,
      payload:{
        curNum:curNum
      }
    })
  }

  const value = {
    prevNum: state.prevNum,
    curNum: state.curNum,
    addDigit,
    clear,
    delDigit
  }
  return <CalContext.Provider value={value}>{children}</CalContext.Provider>
}
