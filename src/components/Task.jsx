import React, { useState, useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";

export default function Task({ task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : {};

  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskDescription, setTaskDescription] = useState(task.description || "No description");

  useEffect(() => {
    setTaskTitle(task.title);
    setTaskDescription(task.description || "No description");
  }, [task]);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="bg-black text-white p-2 border border-white rounded-md shadow-md mb-4 cursor-pointer flex flex-col"
    >
      <div className="m-2">
        <h3 className="font-bold underline">{taskTitle}</h3>
        <p className="text-sm bg-black text-white">{taskDescription}</p>
      </div>
    </div>
  );
}
