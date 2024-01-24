import React, { useState, useRef, useEffect } from "react";
import "./Carousel.css";


export const Carousel = () => {
  const [position, setPosition] = useState(0)
  const content = useRef()

  useEffect(() => {
    
  }, [])
  
  const style = {
    transform: ` translateX(${position * 250}px) `,
    transition: `all 2s`
  }

  return (
    <div className="carousel">
      <div className="carousel__left" onClick={() => setPosition(position - 1)}></div>
      
      <div className="carousel__inner" ref={content} style={style}>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      
      <div className="carousel__right" onClick={() => setPosition(position + 1)}></div>

    </div>
  )
}