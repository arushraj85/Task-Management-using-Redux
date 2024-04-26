import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addTask,editTask,updateTask } from '../actions/index';
import './AddTaskForm.css'; // Add CSS for styling

const AddTaskForm = ({ visible,onSubmit,onCancel }) => {
   
    const dispatch = useDispatch();
    const tasks= useSelector(state => state.taskReducer.tasks)
    console.log(tasks)
    const editingTask = useSelector(state => state.taskReducer.editingTask);
    console.log(editingTask?.title)

    const [title, setTitle] = useState(editingTask ? editingTask.title : '');
    const [description, setDescription] = useState(editingTask ? editingTask.description : '');
    const [dueDate, setDueDate] = useState(editingTask ? editingTask.dueDate : '');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = {};
        if (!title) {
            validationErrors.title = 'Title is required';
        }
        if (!description) {
            validationErrors.description = 'Description is required';
        }

        // Enhanced due date validation using Date object
        if (!dueDate) {
            validationErrors.dueDate = 'Due date is required';
        } else {
            try {
                const taskDate = new Date(dueDate);
                if (taskDate < new Date()) {
                    validationErrors.dueDate = 'Due date must be in the future';
                }
            } catch (error) {
                validationErrors.dueDate = 'Invalid due date format';
            }
        }

        setErrors(validationErrors);
        
        const newTask = {
            id: tasks.length+1,
            title,
            description,
            dueDate
          };

        if (Object.keys(validationErrors).length === 0) {
            if(editingTask){
                dispatch(updateTask(newTask))
            }
            else{
            dispatch(addTask(newTask));
            }
            setTitle('');
            setDescription('');
            setDueDate('');
            onSubmit();
        }
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}  style={{ display: visible ? 'block' : 'none' }}>
            <h2>Add Task</h2>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={errors.title ? 'error-input' : ''} // Add error class
                />
                {errors.title && <span className="error-message">{errors.title}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && <span className="error-message">{errors.description}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="dueDate">Due Date:</label>
                <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className={errors.dueDate ? 'error-input' : ''} // Add error class
                />
                {errors.dueDate && <span className="error-message">{errors.dueDate}</span>}
            </div>
            <button  type="submit">{editingTask ? 'Update' : 'Add'}</button>
            <button onClick={()=>onCancel()} >Cancel</button>
        </form>
    );
};

export default AddTaskForm;
