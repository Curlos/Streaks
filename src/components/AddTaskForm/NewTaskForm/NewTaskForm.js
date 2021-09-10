import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './addTaskForm.css'
import HeaderTasks from '../HeaderTasks/HeaderTasks'
import GeneralPresetTasks from '../PresetTasks/GeneralPresetTasks'

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
        <div className="addTaskHeader">
        <span className="close" onClick={toggleModal}>&times;</span>
          <p className="addTaskTitle">Add Task</p>
        </div>
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
                  <GeneralPresetTasks automaticColor={automaticColor}/>
                </span>
              </Route>

            </Switch>
            
          </div>

        </div>
      </div>
    </Router>
  )
}

export default NewTaskForm;