import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask, editTask } from "../redux/actions/taskActions";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEditTask = () => {
    dispatch(editTask(task.id, editedDescription));
    setEditMode(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {editMode ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEditTask}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
            {task.description}
          </span>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;
