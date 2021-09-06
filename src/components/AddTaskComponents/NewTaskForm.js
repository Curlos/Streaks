import React, { useState } from 'react'
import './addTaskForm.css'
import Task from '../Task'
import FormTasks from './FormTasks'
import GeneralPresetTasks from './PresetTasks/GeneralPresetTasks'
import HealthPresetTasks from './PresetTasks/HealthPresetTasks'
import EatPresetTasks from './PresetTasks/EatPresetTasks'
import TimedPresetTasks from './PresetTasks/TimedPresetTasks'
import NegativePresetTasks from './PresetTasks/NegativePresetTasks'
import ConfirmationScreen from './ConfirmationScreen/ConfirmationScreen'

const NewTaskForm = ({ toggleModal }) => {

  const [displayConfirmationScreen, setDisplayConfirmationScreen] = useState(false)

  const handleNewDisplay = () => {
    setDisplayConfirmationScreen(true)
  }
  
  return (
    <div className="newTaskForm">
      form
      <div id="myModal" className="modal">

        <div className="modal-content">
          <div className="addTaskHeader">
            <span className="close" onClick={toggleModal}>&times;</span>
            <p className="addTaskTitle">Add Task</p>
          </div>

          {displayConfirmationScreen ? ConfirmationScreen : 
          
          <span>
            <FormTasks />
            <TimedPresetTasks handleNewDisplay={handleNewDisplay} />
          </span>}
          
        </div>

      </div>
    </div>
  )
}

export default NewTaskForm;