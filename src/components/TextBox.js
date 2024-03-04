import React from "react";
import "./Textbox.css"

export const TextBox = ({answer, setAnswer, onKeyDown, correct, className, system }) => {


  return (
      <input 
        className={`form-answer ${correct && "correct"} ${className} ${system}`}
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