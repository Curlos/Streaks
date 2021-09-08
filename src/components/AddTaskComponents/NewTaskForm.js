import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './addTaskForm.css'
import HeaderTasks from './HeaderTasks'
import GeneralPresetTasks from './PresetTasks/GeneralPresetTasks'
import HealthPresetTasks from './PresetTasks/HealthPresetTasks'
import EatPresetTasks from './PresetTasks/EatPresetTasks'
import TimedPresetTasks from './PresetTasks/TimedPresetTasks'
import NegativePresetTasks from './PresetTasks/NegativePresetTasks'
import GeneralConfirmationScreen from './ConfirmationScreens/GeneralConfirmationScreen'
import MeasurementDurationScreen from './ConfirmationScreens/TaskListScreens/MeasurementDurationScreen'
import TaskDaysScreen from './ConfirmationScreens/TaskListScreens/TaskDaysScreen'
import StartWeekOnScreen from './ConfirmationScreens/TaskListScreens/StartWeekOnScreen'
import ColorScreen from './ConfirmationScreens/TaskListScreens/ColorScreen'

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

  const TaskSelectorHeader = () => {
    return (
      <span>
        <div className="addTaskHeader">
        <span className="close" onClick={toggleModal}>&times;</span>
          <p className="addTaskTitle">Add Task</p>
        </div>
        <HeaderTasks clickHandler={handleTaskHeaderClick} selectedTaskType={selectedTaskType}/>
      </span>
    )
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
                  <TaskSelectorHeader />
                  <GeneralPresetTasks handleNewDisplay={handleNewDisplay}/>
                </span>
              </Route>

              <Route path="/health-task" exact>
                <span>
                  <TaskSelectorHeader />
                  <HealthPresetTasks handleNewDisplay={handleNewDisplay}/>
                </span>
              </Route>

              <Route path="/eat-task" exact>
                <span>
                  <TaskSelectorHeader />
                  <EatPresetTasks handleNewDisplay={handleNewDisplay}/>
                </span>
              </Route>

              <Route path="/timed-task" exact>
                <span>
                  <TaskSelectorHeader />
                  <TimedPresetTasks handleNewDisplay={handleNewDisplay}/>
                </span>
              </Route>

              <Route path="/negative-task" exact>
                <span>
                  <TaskSelectorHeader />
                  <NegativePresetTasks handleNewDisplay={handleNewDisplay}/>
                </span>
              </Route>

              <Route path="/confirm" exact>
                <GeneralConfirmationScreen title={selectedTask.title} icon={selectedTask.icon} selectedTaskType={selectedTaskType}/>
              </Route>

              <Route path="/confirm/measurement-duration" exact>
                <MeasurementDurationScreen title={selectedTask.title} icon={selectedTask.icon}/>
              </Route>

              <Route path="/confirm/task-days" exact>
                <TaskDaysScreen title={selectedTask.title} icon={selectedTask.icon}/>
              </Route>

              <Route path="/confirm/task-days" exact>
                <TaskDaysScreen title={selectedTask.title} icon={selectedTask.icon}/>
              </Route>

              <Route path="/confirm/start-week-on" exact>
                <StartWeekOnScreen title={selectedTask.title} icon={selectedTask.icon}/>
              </Route>

              <Route path="/confirm/color" exact>
                <ColorScreen title={selectedTask.title} icon={selectedTask.icon}/>
              </Route>
            </Switch>
            
          </div>

        </div>
      </div>
    </Router>
  )
}

export default NewTaskForm;