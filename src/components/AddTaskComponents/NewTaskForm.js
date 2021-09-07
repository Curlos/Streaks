import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './addTaskForm.css'
import HeaderTasks from './HeaderTasks'
import GeneralPresetTasks from './PresetTasks/GeneralPresetTasks'
import HealthPresetTasks from './PresetTasks/HealthPresetTasks'
import EatPresetTasks from './PresetTasks/EatPresetTasks'
import TimedPresetTasks from './PresetTasks/TimedPresetTasks'
import NegativePresetTasks from './PresetTasks/NegativePresetTasks'
import GeneralConfirmationScreen from './ConfirmationScreen/GeneralConfirmationScreen'
import MeasurementDurationScreen from './ConfirmationScreen/TaskListScreens/MeasurementDurationScreen'

const NewTaskForm = ({ toggleModal }) => {

  const [displayConfirmationScreen, setDisplayConfirmationScreen] = useState(false)
  const [displayMeasurementDurationScreen, setDisplayMeasurementDurationScreen] = useState(false)
  const [displayTaskDaysScreen, setDisplayTaskDaysScreen] = useState(false)
  const [selectedTaskType, setSelectedTaskType] = useState('customTask')
  const [selectedTask, setSelectedTask] = useState({title: '', icon: ''})

  
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

  const handleNewDisplay = (title, icon, displayType) => {

    switch(displayType) {
      case 'Daily Task':
        setDisplayConfirmationScreen(false)
        setDisplayMeasurementDurationScreen(true)
        break
      case 'Task Days':
        setDisplayConfirmationScreen(false)
        setDisplayTaskDaysScreen(true)
        break
      default:
        setDisplayConfirmationScreen(true)
        setSelectedTask({title, icon })
        break
    }
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

  const ScreenToDisplay = () => {
    if (displayConfirmationScreen) {
      return (
        <GeneralConfirmationScreen title={selectedTask.title} icon={selectedTask.icon}/>
      )
    } 
  }
  
  return (
    <Router>
      <div className="newTaskForm">
        form
        <div id="myModal" className="modal">

          <div className="modal-content">
            <Switch>
              <Route path="/" exact>
                <span>
                  <div className="addTaskHeader">
                  <span className="close" onClick={toggleModal}>&times;</span>
                    <p className="addTaskTitle">Add Task</p>
                  </div>
                  <HeaderTasks clickHandler={handleTaskHeaderClick} selectedTaskType={selectedTaskType}/>
                  {getPresetTasks(selectedTaskType)}
                </span>
              </Route>

              <Route path="/confirmation-screen" exact>
                <GeneralConfirmationScreen title={selectedTask.title} icon={selectedTask.icon}/>
              </Route>

              <Route path="/measurement-duration" exact>
                <MeasurementDurationScreen title={selectedTask.title} icon={selectedTask.icon}/>
              </Route>
            </Switch>
            
          </div>

        </div>
      </div>
    </Router>
  )
}

export default NewTaskForm;