import React, { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable"; // Ensure this is imported
import Column from "./components/Column";
import { initialData } from "./data/data";

export default function App() {
  const [columns, setColumns] = useState(initialData);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return; // Exit if dropped in the same spot

    const activeTaskId = active.id;
    const overTaskId = over.id;

    setColumns((prevColumns) => {
      let newColumns = [...prevColumns];

      // Find source and target columns
      const sourceColumn = newColumns.find((col) =>
        col.tasks.some((task) => task.id === activeTaskId)
      );
      const targetColumn = newColumns.find(
        (col) => col.id === overTaskId || col.tasks.some((task) => task.id === overTaskId)
      );

      if (!sourceColumn || !targetColumn) return prevColumns;

      // Find task being dragged
      const task = sourceColumn.tasks.find((t) => t.id === activeTaskId);
      const sourceIndex = sourceColumn.tasks.findIndex((t) => t.id === activeTaskId);
      const targetIndex = targetColumn.tasks.findIndex((t) => t.id === overTaskId);

      if (!task) return prevColumns; // Exit if no task is found

      if (sourceColumn.id === targetColumn.id) {
        // Reorder within the same column
        const updatedTasks = arrayMove(sourceColumn.tasks, sourceIndex, targetIndex);
        return newColumns.map((col) =>
          col.id === sourceColumn.id ? { ...col, tasks: updatedTasks } : col
        );
      } else {
        // Move task to a different column
        sourceColumn.tasks.splice(sourceIndex, 1);
        targetColumn.tasks.splice(targetIndex === -1 ? targetColumn.tasks.length : targetIndex, 0, {
          ...task,
          columnId: targetColumn.id,
        });

        return newColumns.map((col) =>
          col.id === sourceColumn.id
            ? { ...col, tasks: sourceColumn.tasks }
            : col.id === targetColumn.id
            ? { ...col, tasks: targetColumn.tasks }
            : col
        );
      }
    });
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="flex flex-wrap mt-16 gap-4 p-4 overflow-auto">
        {columns.map((column) => (
          <Column key={column.id} column={column} setColumns={setColumns} columns={columns} />
        ))}
      </div>
    </DndContext>
  );
}
