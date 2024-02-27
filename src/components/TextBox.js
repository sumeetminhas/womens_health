import React from "react";
import "./Textbox.css"

export const TextBox = ({answer, setAnswer, onKeyDown, correct, className }) => {


  return (
      <input 
        className={`form-answer ${correct && "correct"} ${className}`}
        disabled={correct}
        type="text"
        onKeyDown={onKeyDown} 
        value={answer} 
        onChange={(e) => {
          setAnswer(e.target.value)
          console.log("set answer gives me", e.target.value)
        }}
      />
  )
}