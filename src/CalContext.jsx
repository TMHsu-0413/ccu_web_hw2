import React, { useReducer, createContext } from "react";
import { InitialState, CalReducer, ACTIONS } from './CalReducer';

export const CalContext = createContext(InitialState)

export const CalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CalReducer, InitialState)

  const addDigit = (digit) => {
    var newNum = state.curNum;
    var curState = state.clear;

    if (curState !== false){
      newNum = digit;
      curState = false;
    }
    // null的狀態下直接按小數點
    else if (newNum === null && digit === '.')
      newNum = '0.'
    // 不能有2個小數點
    else if ( digit === '.' && newNum.includes('.'))
      return newNum;
    // null的狀態下一直按0
    else if ( digit === '0' && newNum === '0')
      return newNum;
    // 是0的情況下按其他數字
    else if ( newNum === '0' && digit !== '.')
      newNum = digit;
    else if (newNum === null)
      newNum = digit;
    else
      newNum += digit;

    dispatch({
      type: ACTIONS.ADD_DIGIT,
      payload: {
        curNum: newNum,
        clear: curState
      }
    })
  }

  const clear = () => {
    dispatch({
      type: ACTIONS.CLEAR,
      payload: {
        prevNum : null,
        curNum : null,
        prev_op: "",
        clear: false
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

  const exp = () => {
    var prevNum = "exp(" + state.curNum + ')'
    var curNum = state.curNum;
    if (curNum === null)
      return curNum;
    else{
      curNum = Math.exp(parseFloat(curNum));
    }
    
    dispatch({
      type: ACTIONS.Math_op,
      payload: {
        prevNum: prevNum,
        curNum: curNum.toString()
      }
    })
  }

  const log = () => {
    var prevNum = "log(" + state.curNum + ')'
    var curNum = state.curNum;
    if (curNum === null)
      return curNum;
    else{
      curNum = Math.log10(parseFloat(curNum));
    }
    
    dispatch({
      type: ACTIONS.Math_op,
      payload: {
        prevNum: prevNum,
        curNum: curNum.toString()
      }
    })
  }

  const sqrt = () => {
    var prevNum = "sqrt(" + state.curNum + ')'
    var curNum = state.curNum;
    if (curNum === null)
      return curNum;
    else{
      curNum = Math.sqrt(parseFloat(curNum));
    }
    
    dispatch({
      type: ACTIONS.Math_op,
      payload: {
        prevNum: prevNum,
        curNum: curNum.toString()
      }
    })

  }
  const sin = () => {
    var prevNum = "sin(" + state.curNum + ')'
    var curNum = state.curNum;
    if (curNum === null)
      return curNum;
    else{
      curNum = Math.sin(parseFloat(curNum));
    }
    
    dispatch({
      type: ACTIONS.Math_op,
      payload: {
        prevNum: prevNum,
        curNum: curNum.toString()
      }
    })
  }

  const cos = () => {
    var prevNum = "cos(" + state.curNum + ')'
    var curNum = state.curNum;
    if (curNum === null)
      return curNum;
    else{
      curNum = Math.cos(parseFloat(curNum));
    }
    
    dispatch({
      type: ACTIONS.Math_op,
      payload: {
        prevNum: prevNum,
        curNum: curNum.toString()
      }
    })
  }
  const tan = () => {
    var prevNum = "tan(" + state.curNum + ')'
    var curNum = state.curNum;
    if (curNum === null)
      return curNum;
    else{
      curNum = Math.tan(parseFloat(curNum));
    }
    
    dispatch({
      type: ACTIONS.Math_op,
      payload: {
        prevNum: prevNum,
        curNum: curNum.toString()
      }
    })
  }

  const get_curNum = () => {
    var curNum = "";
    if (state.clear === true)
      return state.prevNum.slice(0,-2)
    if (state.prev_op !== ""){
      switch(state.prev_op){
        case '+':
          curNum = parseFloat(state.prevNum.slice(0,-1)) + parseFloat(state.curNum);
          break;
        case '-':
          curNum = parseFloat(state.prevNum.slice(0,-1)) - parseFloat(state.curNum);
          break;
        case 'x':
          curNum = parseFloat(state.prevNum.slice(0,-1)) * parseFloat(state.curNum);
          break;
        case '÷':
          curNum = parseFloat(state.prevNum.slice(0,-1)) / parseFloat(state.curNum);
          break;
        default:
          break;
      }
      return curNum.toString()
    }
    return state.curNum
  }

  const add = () => {
    var curNum = get_curNum()
    var prevNum = curNum + ' +';
    dispatch({
      type:ACTIONS.Math_basic,
      payload:{
        prevNum: prevNum,
        prev_op: '+',
        clear: true
      }
    })
  }

  const sub = () => {
    var curNum = get_curNum()
    var prevNum = curNum + ' -';
    dispatch({
      type:ACTIONS.Math_basic,
      payload:{
        prevNum: prevNum,
        prev_op: '-',
        clear: true
      }
    })
  }

  const mul = () => {
    var curNum = get_curNum()
    var prevNum = curNum + ' x';
    dispatch({
      type:ACTIONS.Math_basic,
      payload:{
        prevNum: prevNum,
        prev_op: 'x',
        clear: true
      }
    })
  }

  const div = () => {
    var curNum = get_curNum()
    var prevNum = curNum + ' ÷';
    dispatch({
      type:ACTIONS.Math_basic,
      payload:{
        prevNum: prevNum,
        prev_op: '÷',
        clear: true
      }
    })
  }
  const equal = () => {
    var curNum = get_curNum();
    var prevNum = state.prevNum + " " + state.curNum + " =";

    dispatch({
      type:ACTIONS.EQUAL,
      payload:{
        prevNum: prevNum,
        curNum: curNum,
        clear: false,
        prev_op: ""
      }
    })
  }
  const value = {
    prevNum: state.prevNum,
    curNum: state.curNum,
    addDigit,
    clear,
    delDigit,
    exp,
    log,
    sqrt,
    sin,
    cos,
    tan,
    add,
    sub,
    mul,
    div,
    equal
  }
  return <CalContext.Provider value={value}>{children}</CalContext.Provider>
}
