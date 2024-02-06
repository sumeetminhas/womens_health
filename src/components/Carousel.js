import React, { useState, useRef, useEffect } from "react";
import "./Carousel.css";
import { BlogPost } from "./BlogPost";


export const Carousel = ({children}) => {
  const [position, setPosition] = useState(0)
  const content = useRef()

  useEffect(() => {
    if (content.current) {
      [...content.current.children].forEach((el) => {
        console.log("el", el)
        el.classList.add("square")
      })
    }
  }, [])
  
  const style = {
    transform: ` translateX(${position * 325}px) `,
    transition: `all 2s`
  }

  return (
    <div className="carousel">
      <div className="carousel__left" onClick={() => setPosition(position - 1)}></div>
      
      <div className="carousel__inner" ref={content} style={style}>
        {children}
        {/* <BlogPost /> */}
        {/* <div className="square" style={{backgroundColor:'green'}}></div>
        <div className="square"></div>
        <div className="square" style={{backgroundColor: 'blue'}}></div> */}
      </div>
      
      <div className="carousel__right" onClick={() => setPosition(position + 1)}></div>

    </div>
  )
}