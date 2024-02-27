import React, { useState, useEffect, useRef } from "react";
import external from "./anatomy_pictures/external.png"
import { TextBox } from "./TextBox";
import "./ExternalSystem.css";
// import debounce from "lodash/debounce"

const ExternalAnswers = ["labia majora", "labia minora", "bartholin's gland","anus","vaginal opening","urethra","clitoris","mons pubis"]

export const ExternalSystem = () => {

  // const debounceValidate = useRef()
  const [ answers, setAnswers ] = useState(new Array(8).fill(""))
  const [ rightAnswer, setRightAnswer ] = useState(new Array(8).fill(false))
  
  const validateAnswers = () => {
    const newRightAnswers = ExternalAnswers.map((e, i) => {
      return e === answers[i]
    })

    setRightAnswer(newRightAnswers)
  }

  // useEffect(() => {
  //   if (debounceValidate.current) {
  //     debounceValidate.current.cancel()
  //   }
  //   debounceValidate.current = debounce(validateAnswers, 1000)

  //   debounceValidate.current()
  // }, [answers])

  useEffect(() => {
    console.log("right answer changed", rightAnswer)
  }, [rightAnswer])

  return (
    <div>
    <h1>External Anatomy</h1>

      <div className="external-anatomy-container">
        <img src={external} alt="external"></img>

        {answers.map((a, i) => (
          <TextBox 
            key={i}
            correct={rightAnswer[i]} 
            answer={a}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                validateAnswers()
                console.log("entered enter", i)
              }
            }} 
            setAnswer={(value) => {
              setAnswers((previous) => {
                return previous.toSpliced(i, 1, value)
              })
            }} 
          />
        ))}
      </div>

    </div>
  )
}