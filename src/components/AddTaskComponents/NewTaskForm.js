import React, { useState } from 'react'
import './addTaskForm.css'
import Task from '../Task'
import FormTasks from './FormTasks'
import GeneralPresetTasks from './PresetTasks/GeneralPresetTasks'
import HealthPresetTasks from './PresetTasks/HealthPresetTasks'
import EatPresetTasks from './PresetTasks/EatPresetTasks'
import TimedPresetTasks from './PresetTasks/TimedPresetTasks'
import NegativePresetTasks from './PresetTasks/NegativePresetTasks'
import GeneralConfirmationScreen from './ConfirmationScreen/GeneralConfirmationScreen'

const NewTaskForm = ({ toggleModal }) => {

  const [displayConfirmationScreen, setDisplayConfirmationScreen] = useState(false)
  const [selectedTaskType, setSelectedTaskType] = useState('customTask')

  
  const handleTaskHeaderClick = (e) => {
    const newSelectedTaskType = e.target.attributes[0].nodeValue

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

  const handleNewDisplay = () => {
    setDisplayConfirmationScreen(true)
  }

  const getPresetTasks = (selectedTaskType) => {
    const taskTypes = {
      'customTask': <GeneralPresetTasks handleNewDisplay={handleNewDisplay}/>,
      'healthTask': <HealthPresetTasks handleNewDisplay={handleNewDisplay}/>,
      'eatTask': <EatPresetTasks handleNewDisplay={handleNewDisplay}/>,
      'timedTask': <TimedPresetTasks handleNewDisplay={handleNewDisplay}/>,
      'negativeTask': <NegativePresetTasks handleNewDisplay={handleNewDisplay}/>
    }

    return taskTypes[selectedTaskType]
  }
  
  return (
    <div className="newTaskForm">
      form
      <div id="myModal" className="modal">

        <div className="modal-content">

          {displayConfirmationScreen ? <GeneralConfirmationScreen /> : 
          
          <span>
            <div className="addTaskHeader">
            <span className="close" onClick={toggleModal}>&times;</span>
              <p className="addTaskTitle">Add Task</p>
            </div>
            <FormTasks clickHandler={handleTaskHeaderClick} selectedTaskType={selectedTaskType}/>
            {getPresetTasks(selectedTaskType)}
          </span>}
          
        </div>

      </div>
    </div>
  )
}

export default NewTaskForm;