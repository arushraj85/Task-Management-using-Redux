// const initialState = 70;

// const changeTheNumber = (state=initialState,action) => {
//  switch(action.type){
//     case "INCREMENT" : return state+action.payload;
//     case "DECREMENT" : return state- action.payload;
//     default : return state
//  }
// }

// export default changeTheNumber;

// import { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETION, FILTER_TASKS_BY_STATUS } from './actions/tasks';

const initialState = {
  tasks: [],
  editingTask: null,
  filteredStatus: "all",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "EDIT_TASK":
      return { ...state, editingTask: action.payload };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        editingTask: null,
      };
    case "TOGGLE_COMPLETION":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, status: !task.status } : task
        ),
      };
    case "FILTER_TASKS_BY_STATUS":
      return {
        ...state,
        filteredStatus: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
