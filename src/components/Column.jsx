// Column.jsx
import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableTask from "./SortableTask";
import { v4 as uuidv4 } from "uuid";
import Homepage from "./Homepage";

export default function Column({ column, setColumns, columns }) {
  const { setNodeRef } = useDroppable({ id: column.id });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const addTask = () => {
    if (!newTaskTitle.trim()) return; // Prevent empty tasks

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      description: newTaskDescription || "No description",
    };

    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === column.id ? { ...col, tasks: [...col.tasks, newTask] } : col
      )
    );

    // Reset input fields and close modal
    setNewTaskTitle("");
    setNewTaskDescription("");
    setIsModalOpen(false);
  };

  return (
    <>
    <Homepage/>
    
    <div ref={setNodeRef} className="bg-black text-white  p-4 mx-auto  rounded-lg border border-whiye w-64 min-h-[400px]">
      <h2 className="font-bold text-2xl mb-6">{column.title}</h2>

      <SortableContext items={column.tasks.map((task) => task.id)} strategy={verticalListSortingStrategy}>
        {column.tasks.map((task) => (
          <SortableTask
            key={task.id}
            task={task}
            setColumns={setColumns}
            columns={columns}
            columnId={column.id}
             // Pass the column id here!
          />
        ))}
      </SortableContext>

      {/* "Add Task" Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-2 bg-white cursor-pointer text-black px-3 py-1 rounded-md w-full"
      >
        + Add Task
      </button>

      {/* Task Creation Modal */}
      {isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    onClick={() => setIsModalOpen(false)}
  >
    <div
      className="bg-black text-white p-4 rounded-lg shadow-lg w-96 border border-white"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-bold mb-2">New Task</h2>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-2 w-full mb-2 rounded-md"
        required
      />
      <textarea
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        placeholder="Task Description"
        className="border p-2 w-full mb-2 rounded-md"
        required
      />

     

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-white cursor-pointer text-black px-3 py-1 rounded-md"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (!newTaskTitle || !newTaskDescription) {
              alert("Please fill in both fields before saving.");
              return;
            }
            addTask();
          }}
          className="bg-white cursor-pointer text-black px-3 py-1 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}

    </div>
    </>
  );
}
