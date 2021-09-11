import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import './addTaskForm.css'
import HeaderTasks from '../HeaderTasks/HeaderTasks'
import GeneralPresetTasks from '../PresetTasks/GeneralPresetTasks'
import HealthPresetTasks from '../PresetTasks/HealthPresetTasks'
import GeneralConfirmationScreen from '../Confirmation/ConfirmationScreens/GeneralConfirmationScreen'

const AddTaskHeader = styled.div`
  border-radius: 20px 20px 0 0;
  background-color: #202020;
  padding: 5px;
`

const NewTaskForm = ({ toggleModal, automaticColor }) => {

  const [selectedTaskType, setSelectedTaskType] = useState('customTask')

  const [currentTask, setCurrentTask] = useState({
    title: '',
    icon: '',
    color: 'automatic',
    measurementDuration: {
      type: 'daily',
      iconName: 'calendar-day',
    },
    daily: {
      taskDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      frequency: 1,

    },
    weekly: {
      startWeekOn: 'Sunday',
      frequency: 1,
    },
    monthly: {
      frequency: 1,
    },
    currentStreak: 0,
    completed: false,
  })

  const handleTaskChange = (newTask) => {
    console.log(currentTask)
    setCurrentTask(newTask)
  }

  const handleTaskHeaderClick = (e) => {
    const newSelectedTaskType = e.target.attributes[0].nodeValue

    console.log(newSelectedTaskType)

    if (newSelectedTaskType.includes("Task")) {
      setSelectedTaskType(newSelectedTaskType)
      console.log(newSelectedTaskType)
    } else if (newSelectedTaskType.includes("sc-gsTEea ")){
      // If the task circle is clicked then get the taskName which is two children below the current element (the task circle)
      const newSelectedTaskType = e.target.firstElementChild.firstElementChild.attributes[0].nodeValue
      setSelectedTaskType(newSelectedTaskType)
      console.log(newSelectedTaskType)
    }
  }

  const TaskSelectorHeader = () => {
    return (
      <span>
        <AddTaskHeader>
        <span className="close" onClick={toggleModal}>&times;</span>
          <p className="addTaskTitle">Add Task</p>
        </AddTaskHeader>
        <HeaderTasks clickHandler={handleTaskHeaderClick} />
      </span>
    )
  }
  
  return (
    <Router>
      <div className="newTaskForm">
        <div id="myModal" className="modal">

          <div className="modal-content">
            <Switch>
              <Route path="/" exact>
                <span>
                  <TaskSelectorHeader />
                  <GeneralPresetTasks automaticColor={automaticColor} currentTask={currentTask} handleTaskChange={handleTaskChange}/>
                </span>
              </Route>

              <Route path="/health-task" exact>
                <span>
                  <TaskSelectorHeader />
                  <HealthPresetTasks currentTask={currentTask} automaticColor={automaticColor} />
                </span>
              </Route>

              <Route path="/confirm" exact>
                <GeneralConfirmationScreen title={currentTask.title} icon={currentTask.icon} selectedTaskType={selectedTaskType} currentTask={currentTask} handleTaskChange={handleTaskChange} automaticColor={automaticColor}/>
              </Route>

            </Switch>
            
          </div>

        </div>
      </div>
    </Router>
  )
}

export default NewTaskForm;