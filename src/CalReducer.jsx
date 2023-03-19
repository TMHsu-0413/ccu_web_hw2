import React from "react";

export const InitialState = {
  prevNum: null,
  curNum: null,
  prev_op: "",
  clear: false
}

export const ACTIONS = {
  ADD_DIGIT: "ADD_DIGIT",
  CLEAR: "CLEAR",
  DEL_DIGIT: "DEL_DIGIT",
  Math_op:"Math_op", // sin cos sqrt ...
  Math_basic:"Math_basic", // + - * /
  EQUAL: "EQUAL"
}


export const CalReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        curNum:payload.curNum,
        clear:payload.clear
      }

    case ACTIONS.CLEAR:
    return {
        ...state,
        prevNum:payload.prevNum,
        curNum:payload.curNum,
        prev_op: payload.prev_op,
        clear: payload.clear
      }
    case ACTIONS.DEL_DIGIT:
    return {
        ...state,
        curNum:payload.curNum
      }

    case ACTIONS.Math_op:
      return {
        clear: false,
        prev_op: "",
        prevNum:payload.prevNum,
        curNum:payload.curNum
      }
    case ACTIONS.Math_basic:
      return {
        ...state,
        prevNum:payload.prevNum,
        prev_op:payload.prev_op,
        clear:payload.clear
      }
    case ACTIONS.EQUAL:
      return {
        ...state,
        prevNum:payload.prevNum,
        curNum:payload.curNum,
        prev_op:payload.prev_op,
        clear:payload.clear,
      }
    default:
      return state
  }
}

