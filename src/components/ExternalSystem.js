import React, { useState, useEffect} from "react";
import external from "./anatomy_pictures/external.png"
import { TextBox } from "./TextBox";
import "./ExternalSystem.css";
// import debounce from "lodash/debounce"

const ExternalAnswers = ["labia majora", "labia minora", "bartholin's gland","anus","vaginal opening","urethra","clitoris","mons pubis"]

export const ExternalSystem = () => {

  // const debounceValidate = useRef()
  const [ answers, setAnswers ] = useState(new Array(8).fill(""))
  const [ rightAnswer, setRightAnswer ] = useState(new Array(8).fill(false))
  const [ animatedText, setAnimatedText ] = useState(null)

  const validateAnswers = (index) => {
    const newRightAnswers = [...rightAnswer]
    newRightAnswers[index] = ExternalAnswers[index] === answers[index]

    if (!newRightAnswers[index]) {
      setAnimatedText(index)

      setTimeout(() => {
        setAnimatedText(null)
      }, 1000)

    }
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
            className={i === animatedText ? 'animate' : ''}
            answer={a}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                validateAnswers(i)
                console.log("entered wrong", i)
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