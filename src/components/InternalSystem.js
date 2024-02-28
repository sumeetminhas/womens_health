import React, { useState, useEffect } from "react";
import { TextBox } from "./TextBox";
import internal from "./anatomy_pictures/internal.jpg";
import "./InternalSystem.css"

const InternalAnswers = ["fallopian tube", "ovary", "uterus", "cervix", "vagina", "hymen"]

export const InternalSystem = () => {
  
  const [ answers, setAnswers ] = useState(new Array(6).fill(""))
  const [ rightAnswer, setRightAnswer ] = useState(new Array(6).fill(false))
  const [ animatedText, setAnimatedText ] = useState(null)


  const validateAnswers = (index) => {
    const newRightAnswers = [...rightAnswer]
    newRightAnswers[index] = InternalAnswers[index] === answers[index]

    if (!newRightAnswers[index]) {
      setAnimatedText(index)

      setTimeout(() => {
        setAnimatedText(null)
      }, 1000)

    }
    setRightAnswer(newRightAnswers)
  }

  useEffect(() => {
    console.log("right answer changed", rightAnswer)
  }, [rightAnswer])

  return (
    <div>
      <h1>Internal Anatomy</h1>
      <div className="internal-anatomy-container">
        <img src={internal} alt="internal"></img>

        {answers.map((a, i) => (
          <TextBox
            key={i}
            correct={rightAnswer[i]}
            className={i === animatedText ? "animate" : ""}
            answer={a}
            onKeyDown={(e) => {
              if (e.key == 'Enter') {
                validateAnswers(i)
                console.log("wrong", i)
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