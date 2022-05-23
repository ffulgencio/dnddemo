import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function DraggableItem({title,id, index}) {
  return (
      <Draggable draggableId={id} index={index}>
           { 
           provided =>(

               
               <div
                {...provided.draggableProps}
                ref={provided.innerRef}
                {...provided.dragHandleProps}
               >{title}
               </div>
               )
            }
      </Draggable>
  )
}
