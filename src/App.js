import React, { useState } from 'react'
import Tasks from './components/Tasks'
import AddNewTaskButton from './components/AddTaskComponents/AddNewTaskButton'
import NewTaskForm from './components/AddTaskComponents/NewTaskForm'
import './style.css';

const App = () => {

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
  const [showNewTaskForm, setShowNewTaskForm] = useState(true)

  const toggleModal = () => {
    setShowNewTaskForm(!showNewTaskForm)
  }

  const handleNewTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      Streaks App
      <Tasks />
      <AddNewTaskButton toggleModal={toggleModal}/>
      {showNewTaskForm ? <NewTaskForm toggleModal={toggleModal} handleNewTaskFormSubmit={handleNewTaskFormSubmit}/> : null}
    </div>
  );
}

export default App;
