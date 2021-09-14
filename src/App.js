import React, { useState } from 'react'
import styled from 'styled-components'
import Tasks from './components/Tasks/Tasks'
import Footer from './components/Tasks/Footer'
import NewTaskForm from './components/AddTaskForm/NewTaskForm/NewTaskForm'
import defaultTasks from './components/Tasks/Helpers/defaultTasks'
import './style.css';

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 30px);
`

const LoginButton = styled.span`
  float:right
`

const FooterBottom = styled.span`
  margin-top: auto;
`

const App = () => {

  const [automaticColor, setAutomaticColor] = useState('#F58220')
  const [showSettings, setShowSettings] = useState(false)
  const [showNewTaskForm, setShowNewTaskForm] = useState(false)
  const [tasks, setTasks] = useState(defaultTasks)

  const handlePickColor = (e) => {
    const newAutomaticColor = e.target.attributes.color.value
    setAutomaticColor(newAutomaticColor)
  }

  const toggleShowSettings = () => {
    setShowSettings(!showSettings)
  }

  const toggleModal = () => {
    setShowNewTaskForm(!showNewTaskForm)
  }

  const handleSaveTask = (newTask) => {
    setTasks({...tasks, [newTask.id]: newTask})

    console.log(tasks)
    console.log({...tasks, [newTask.id]: newTask})
  }

  const handleEditTask = () => {

  }

  const toggleCompleteTask = (completedTask) => {
    
    setTasks({...tasks, [completedTask.id]: completedTask})
  }

  return (
    <AppBody>
      <div>
        <span>Streaks App</span>
        <LoginButton>
          <i class="fas fa-user"></i>
        </LoginButton>
      </div>
      <Tasks chosenColor={automaticColor} showSettings={showSettings} toggleModal={toggleModal} taskObjs={tasks} toggleCompleteTask={toggleCompleteTask}/>
      <FooterBottom>
        <Footer handlePickColor={handlePickColor} chosenColor={automaticColor} toggleShowSettings={toggleShowSettings}/>
      </FooterBottom>

      {showNewTaskForm ? <NewTaskForm toggleModal={toggleModal} automaticColor={automaticColor} handleSaveTask={handleSaveTask}/> : null}
    </AppBody>
  );
}

export default App;
