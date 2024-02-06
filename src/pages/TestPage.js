import React, { useState, useRef, useEffect, useCallback } from 'react'
const TOP = '-200px'
const BOTTOM = '150vh'

export default function TestPage () {

  const container = useRef()
  const thing = useRef()
  const [thingTop, setThingTop] = useState(TOP)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const setup = useIntersectionObserver()
  
  const handleThingClick = () => {
    console.log('handle thing click')
    if (thingTop === TOP) {
      setThingTop(BOTTOM)
      thing.current.style.transform = `translateY(${BOTTOM})`
    } else {
      setThingTop(TOP)
      thing.current.style.transform = `translateY(${TOP})`

    }
  }

  const observerHandler = (entries) => {
    entries.forEach((entry) => {
      console.log('entry is', entry)
    })
  }
  useEffect(() => {
    setup(container.current, thing.current, observerHandler)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '200vh' }}>
      <div ref={container} style={{
        position: 'relative',
        top: '100vh',
        width: '100%',
        height: '200px',
        backgroundColor: isIntersecting ? 'yellow' : 'blue'
      }}>
        <div
          ref={thing}
          onClick={handleThingClick}
          style={{
            position: 'relative',
            // marginLeft: '100px',
            left: '40px',
            width: '50px',
            height: '100px',
            backgroundColor: 'green',
            transition: 'all 3s',
            // transform: `translateY(${thingTop})`
            // top:thingTop
          }}
        >
          thing
        </div>
      </div>
    </div>
  )
}

const useIntersectionObserver = () => {
  const observer = useRef()

  const setUpIntersectionObserver = useCallback((root, target, handler) => {
    observer.current = new IntersectionObserver(handler, {
      root,
      threshold: 1,
      rootMargin: '10px 10px 10px 10px'
    })
    observer.current.observe(target)

    return () => {
      observer.current.disconnect()
    }
  }, [])

  return setUpIntersectionObserver
}