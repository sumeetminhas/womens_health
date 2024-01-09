import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });


  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : {
    transform: `translate3d(${props.position.x}px, ${props.position.y}px, 0)`
  };

  const testMouse = (e) => {
    console.log("testMouse", e.target.getBoundingClientRect())
  }

  return (
    <div>
    <button className="thing" ref={setNodeRef} style={style} {...listeners} {...attributes} onMouseUp={testMouse}>
      {props.children}
    </button>
    </div>
  )
}