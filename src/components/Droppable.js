import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

// import React, { useState } from "react";
// import { useDroppable } from "@dnd-kit/core";

// export function Droppable(props) {
//   const [droppedItem, setDroppedItem] = useState(null);
//   const { isOver, setNodeRef } = useDroppable({
//     id: 'droppable',
//   });
//   const style = {
//     color: isOver ? 'green' : undefined,
//   };

  // function handleDrop(event) {
  //   // Update the dropped item position
  //   setDroppedItem({
  //     id: event.active.id,
  //     position: {
  //       x: event.active.coordinates.x,
  //       y: event.active.coordinates.y,
  //     }
  //   });
  // }

//   return (
//     <div className="droppable-box" ref={setNodeRef} style={style} >
//       {props.children}
//       {droppedItem && (
//         <div
//           style={{
//             position: 'absolute',
//             left: droppedItem.position.x,
//             top: droppedItem.position.y,
//           }}
//         >
//           {props.children.find(child => child.props.id === droppedItem.id)}
//         </div>
//       )}
//     </div>
//   );
// }
