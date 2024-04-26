// export const incNumber = () => {
//   return {
//     type: "INCREMENT",
//     payload:3
//   };
// };
// export const decNumber = () => {
//   return {
//     type: "DECREMENT",
//     payload:6
//   };
// };

import { v4 as uuidv4 } from 'uuid'; // Generate unique IDs

export const addTask = (task) => ({
    type: "ADD_TASK",
    // payload: { id: uuidv4(), ...task },
    payload: task
});

export const deleteTask = (id) => ({
    type: "DELETE_TASK",
    payload: id,
});

export const cancelTask = () => ({
    type: "CANCEL_TASK",
    payload: null
});

export const updateTask = (task) => ({
    type: "UPDATE_TASK",
    // payload: { id: uuidv4(), ...task },
    payload: task
});

export const editTask = (task) => ({
    type: "EDIT_TASK",
    payload: task,
});

export const toggleTaskCompletion = (id) => ({
    type: "TOGGLE_COMPLETION",
    payload: id,
});

export const filterTasksByStatus = (status) => ({
    type: "FILTER_TASKS_BY_STATUS",
    payload: status,
});

