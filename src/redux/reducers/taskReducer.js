const initialState = {
  tasks: [],
  filter: "all", // possible values: "all", "done", "notDone"
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };


      case "DELETE_TASK":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
        case "EDIT_TASK":
          return {
            ...state,
            tasks: state.tasks.map((task) =>
              task.id === action.payload.taskId
                ? { ...task, description: action.payload.newDescription }
                : task
            ),
          };


    default:
      return state;
  }
};

export default taskReducer;
