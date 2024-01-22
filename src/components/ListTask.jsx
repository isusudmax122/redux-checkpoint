import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/actions/taskActions";
// import Task from "../components/Task";

import "./ListTask.css";
import Task from "../components/Task";

const ListTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return filter === "done" ? task.isDone : !task.isDone;
  });

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("done"))}>Done</button>
        <button onClick={() => dispatch(setFilter("notDone"))}>Not Done</button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
