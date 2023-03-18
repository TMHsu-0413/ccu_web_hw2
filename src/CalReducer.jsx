import React from "react";

export const InitialState = {
  prevNum: null,
  curNum: null
}

export const ACTIONS = {
  ADD_DIGIT: "ADD_DIGIT",
  CLEAR: "CLEAR",
  DEL_DIGIT: "DEL_DIGIT",
}


export const CalReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        curNum:payload.curNum
      }

    case ACTIONS.CLEAR:
    return {
        ...state,
        prevNum:payload.prevNum,
        curNum:payload.curNum
      }
    case ACTIONS.DEL_DIGIT:
    return {
        ...state,
        curNum:payload.curNum
      }
      
    default:
      return state
  }
}

