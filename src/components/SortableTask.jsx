// SortableTask.jsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Task from "./Task";

export default function SortableTask({ task, setColumns, columns, columnId }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <Task task={task} setColumns={setColumns} columns={columns} columnId={columnId} />
    </div>
  );
}
