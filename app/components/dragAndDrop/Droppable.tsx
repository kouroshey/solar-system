import { useDroppable } from '@dnd-kit/core';
import { FC } from 'react';

type DroppableProps = {
  children: React.ReactNode,
  id: string
}

export const Droppable: FC<DroppableProps> = ({ children, id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id
  });

  return (
    <div ref={setNodeRef} className={`${isOver ? 'container-over' : ''}`}>
      {children}
    </div>
  );
}