import { React, useState} from "react";
import "./DragDrop.css";
import { Draggable } from "./Draggable";
import {DndContext} from '@dnd-kit/core';
import {Droppable} from './Droppable';
import cervix from "./anatomy_pictures/cervix.png";
import ft_left from "./anatomy_pictures/fallopian_tube_left.png";


// import ft_right from "./anatomy_pictures/fallopian_tube_right.png";
// import ovary_left from "./anatomy_pictures/ovary_left.png";
// import ovary_right from "./anatomy_pictures/ovary_right.png";
// import uterus from "./anatomy_pictures/uterus.png";
// import vagina from "./anatomy_pictures/vagina.png";


export const DragDrop = () => {

  const [isDropped, setIsDropped] = useState(false);
  const [draggableItems, setDraggableItems] = useState([
    {
      id: "cervix",
      src: cervix,
      position: {x: 0, y: 0}
    },
    {
      id: "ft_left",
      src: ft_left,
      position: {x: 0, y: 0}
    },
  ]);


  function handleDragEnd(event) {
    console.log("event", event.activatorEvent.target.getBoundingClientRect())
    const newState = {
      id: event.active.id,
      src: draggableItems.find((item) => item.id === event.active.id).src,
      position: {x: event.delta.x, y: event.delta.y}
    }

    setDraggableItems([
      ...draggableItems.filter((item) => item.id !== event.active.id),
      newState
    ])

    // if (event.over && event.over.id === 'droppable') {
    //   setIsDropped(true);
    //   // const updateItems = draggableItems.filter(item => item.id !== event.active.id)
    //   // console.log("event.active.id", event.active.id)
    //   // setDraggableItems(updateItems);
    //   setDraggableItems(prevItems => prevItems.filter(item => item.id !== event.active.id))
    // }
  }
  
    return (
      <DndContext onDragEnd={handleDragEnd}>
        {/* {!isDropped ? draggableItems : null} */}
        {draggableItems.map(item => (
          <Draggable key={item.id} id={item.id}  position={item.position}>
            <img src={item.src} alt={item.id} />
          </Draggable>
          )
        )}
        <Droppable>
          {/* {isDropped ? draggableItems.content : (<div className="custom-box"></div>)} */}
          {isDropped ? null : <div className="custom-box"></div>}
        </Droppable>
      </DndContext>
    )

} 

