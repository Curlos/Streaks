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
                  <GeneralPresetTasks currentTask={currentTask} handleTaskChange={handleTaskChange}/>
                </span>
              </Route>

              <Route path="/health-task" exact>
                <span>
                  <TaskSelectorHeader />
                  <HealthPresetTasks currentTask={currentTask} handleTaskChange={handleTaskChange}/>
                </span>
              </Route>

              <Route path="/eat-task" exact>
                <span>
                  <TaskSelectorHeader />
                  <EatPresetTasks currentTask={currentTask} handleTaskChange={handleTaskChange}/>
                </span>
              </Route>

              <Route path="/timed-task" exact>
                <span>
                  <TaskSelectorHeader />
                  <TimedPresetTasks currentTask={currentTask} handleTaskChange={handleTaskChange}/>
                </span>
              </Route>

              <Route path="/negative-task" exact>
                <span>
                  <TaskSelectorHeader />
                  <NegativePresetTasks currentTask={currentTask} handleTaskChange={handleTaskChange}/>
                </span>
              </Route>

              <Route path="/confirm" exact>
                <GeneralConfirmationScreen title={currentTask.title} icon={currentTask.icon} selectedTaskType={selectedTaskType} currentTask={currentTask} handleTaskChange={handleTaskChange}/>
              </Route>

              <Route path="/confirm/measurement-duration" exact>
                <MeasurementDurationScreen title={currentTask.title} icon={currentTask.icon} currentTask={currentTask} handleTaskChange={handleTaskChange}/>
              </Route>

              <Route path="/confirm/task-days" exact>
                <TaskDaysScreen title={currentTask.title} icon={currentTask.icon} currentTask={currentTask} handleTaskChange={handleTaskChange}/>
              </Route>

              <Route path="/confirm/start-week-on" exact>
                <StartWeekOnScreen title={currentTask.title} icon={currentTask.icon} currentTask={currentTask} handleTaskChange={handleTaskChange}/>
              </Route>

              <Route path="/confirm/color" exact>
                <ColorScreen title={currentTask.title} icon={currentTask.icon}/>
              </Route>
            </Switch>
            
          </div>

        </div>
      </div>
    </Router>
  )
}

export default NewTaskForm;