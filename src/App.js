import React from 'react';
import { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { incNumber,decNumber } from './actions/index';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
// import './App.css';

const App = () => {
  const [isAddTaskFormVisible, setIsAddTaskFormVisible] = useState(false);

  const tasks= useSelector((state)=>state.taskReducer.tasks)
  const filteredStatus= useSelector((state)=>state.taskReducer.filteredStatus)
  // console.log(tasks)
  // console.log(filteredStatus)

  const toggleAddTaskForm = () => {
      setIsAddTaskFormVisible(true);
  };

  const handleSubmit = ()=>{
    setIsAddTaskFormVisible(false)
  }

  const handleCancel = () =>{
    setIsAddTaskFormVisible(false)
  }

  return (
      
          <div className="App">
              <h1>Task Management App</h1>
              <button onClick={toggleAddTaskForm}>Add Task</button>
              {isAddTaskFormVisible && <AddTaskForm visible={true} onSubmit={handleSubmit} onCancel= {handleCancel} />}
              <TaskList tasks={tasks} filteredStatus={filteredStatus} isAddTaskFormVisible={isAddTaskFormVisible} setIsAddTaskFormVisible={setIsAddTaskFormVisible}/>
          </div>
      
  );
};
export default App