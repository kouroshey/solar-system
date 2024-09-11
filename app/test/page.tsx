'use client'

import React, { useState } from 'react'
import { useDraggable, useDroppable, DndContext, DragStartEvent, DragEndEvent } from '@dnd-kit/core';
import { FC } from 'react';

type DraggablePorps = {
  children: React.ReactNode,
  id: string
}

const Draggable: FC<DraggablePorps> = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}

type DroppableProps = {
  children: React.ReactNode,
  id: string
}

const Droppable: FC<DroppableProps> = ({ children, id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id
  });
  const style = {
    color: isOver ? "green" : undefined
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

const TestPage = () => {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
  }

  const handleDragStart = (even: DragStartEvent) => {
    console.log(event);

  }

  return (
    <div className='w-full bg-blue-300'>
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        {parent === null ? draggableMarkup : null}
        <div className='flex w-full justify-between'>
          <div>
            <Droppable id={containers[0]}>
              {parent === containers[0] ? draggableMarkup : 'Drop here'}
            </Droppable>
          </div>
          <div>
            <Droppable id={containers[1]}>
              {parent === containers[1] ? draggableMarkup : 'Drop here'}
            </Droppable>
          </div>
          <div>
            <Droppable id={containers[2]}>
              {parent === containers[2] ? draggableMarkup : 'Drop here'}
            </Droppable>
          </div>
        </div>
      </DndContext>
    </div>
  )
}

export default TestPage