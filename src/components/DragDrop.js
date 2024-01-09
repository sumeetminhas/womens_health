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
      content: (
        <Draggable className="cervix" id="cervix">
          <img src={cervix} alt='cervix' />
      </Draggable>
      )
    },
    {
      id: "ft_left",
      content: (
        <Draggable className="ft_left" id="ft_left">
          <img src={ft_left} alt='ft' />
        </Draggable>
      )
    },
  ]);

  // const draggableMarkup = [(
  //   <Draggable className="cervix" id="cervix">
  //     <img src={cervix} alt='cervix' />
  //   </Draggable>
  // ),
  // ( <Draggable className="ft_left" id="ft_left">
  //     <img src={ft_left} alt='ft' />
  //   </Draggable>
  // )];

  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
      const updateItems = draggableItems.filter(item => item.id !== event.active.id)
      console.log("event.active.id", event.active.id)
      setDraggableItems(updateItems);
    }
  }
  
    return (
      <DndContext onDragEnd={handleDragEnd}>
      {/* {!isDropped ? draggableItems : null} */}
      {draggableItems.map(item => item.content)}
      <Droppable>
        {isDropped ? draggableItems.content : (<div className="custom-box"></div>)}
      </Droppable>
    </DndContext>
    )

} 

