import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';

// const profSkills = ["40","40","40","50","50","50","60","60","70"]
// const persSkills = ["20","20","20","20",]


export default function Skills(props) {
    const [parent, setParent] = useState(null);

    const draggable = (
      <Draggable id="draggable">
        {props.name}
      </Draggable>
    );
  
    return (
      <DndContext onDragEnd={handleDragEnd}>
        {!parent ? draggable : null}
        <Droppable id="droppable">
          {parent === "droppable" ? draggable : 'Drop here'}
        </Droppable>
      </DndContext>
    );
  
    function handleDragEnd({over}) {
      setParent(over ? over.id : null);
    }
  }