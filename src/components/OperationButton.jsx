import React from "react";
import './Button.css'

const OperationButton = ({ Operate, func }) => {
  return <button onClick={() => {
    func();
  }}>
    {Operate}
  </button>
}

export default OperationButton;
