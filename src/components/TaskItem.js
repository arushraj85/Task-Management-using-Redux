import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion,editTask } from '../actions/index';
import './TaskItem.css';

const TaskItem = ({ task, isAddTaskFormVisible, setIsAddTaskFormVisible }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    const handleToggleCompletion = () => {
        dispatch(toggleTaskCompletion(task.id));
    };

    const handleEdit = (task)=>{
        dispatch(editTask(task))
        setIsAddTaskFormVisible(true)
    }

    const completedStyle = task.status ? 'task-completed' : '';
    // console.log(task.status)

    return (
        <li className={`task-item ${completedStyle}`}>

            <label className={task.status ? 'complete' : 'Incomplete'} >
                {task.status ? 'Mark as Incomplete' : 'Mark as Complete'}
                </label>
            <input
                type="checkbox"
                checked={task.status}
                onChange={handleToggleCompletion}
            />
           
            <span>{task.title}</span>
            <span className="task-description">{task.description}</span>
            <span className="task-due-date">{task.dueDate}</span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleEdit(task)}>Edit</button>
        </li>
    );
};

export default TaskItem;
