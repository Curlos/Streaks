import React, { useState } from 'react'
import Tasks from './components/Tasks'
import AddNewTaskButton from './components/AddNewTaskButton'
import NewTaskForm from './components/NewTaskForm'
import './style.css';

function App() {

  const [tasks, setTasks] = useState([{
    title: '',
    icon: '',
    color: '',
    measurementDuration: '',
    taskDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    numberOfDaysPerWeek: 7,
    timesADay: 1,
    timesDoneToday: 0,
    currentStreak: 0,
    completed: false,
  }])
  const [showNewTaskForm, setShowNewTaskForm] = useState(false)

  const handleAddNewTask = () => {
    setShowNewTaskForm(true)
  }

  const handleNewTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      Streaks App
      <Tasks />
      <AddNewTaskButton handleAddNewTask={handleAddNewTask}/>
      {showNewTaskForm ? <NewTaskForm handleNewTaskFormSubmit={handleNewTaskFormSubmit}/> : null}
    </div>
  );
}

export default App;
