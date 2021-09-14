import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import './addTaskForm.css'
import HeaderTasks from '../HeaderTasks/HeaderTasks'
import GeneralPresetTasks from '../PresetTasks/GeneralPresetTasks'
import HealthPresetTasks from '../PresetTasks/HealthPresetTasks'
import GeneralConfirmationScreen from '../Confirmation/ConfirmationScreens/GeneralConfirmationScreen'

import MeasurementDurationScreen from '../Confirmation/ConfirmationScreens/FinalConfirmScreens/MeasurementDurationScreen'
import TaskDaysScreen from '../Confirmation/ConfirmationScreens/FinalConfirmScreens/TaskDaysScreen'
import StartWeekOnScreen from '../Confirmation/ConfirmationScreens/FinalConfirmScreens/StartWeekOnScreen'
import ColorScreen from '../Confirmation/ConfirmationScreens/FinalConfirmScreens/ColorScreen'

const AddTaskHeader = styled.div`
  border-radius: 20px 20px 0 0;
  background-color: #202020;
  padding: 5px;
`

const NewTaskForm = ({ toggleModal, automaticColor, handleSaveTask }) => {

  const [selectedTaskType, setSelectedTaskType] = useState('customTask')
  const defaultTask = {
    id: nanoid(),
    title: '',
    icon: '',
    color: {
      type: 'automatic',
      color: automaticColor,
      taskColorTypes: {
        automatic: {
          checked: true,
          color: automaticColor
        },
        customColor: {
          checked: false,
          color: automaticColor
        }
      }
    },
    measurementDuration: {
      type: 'daily',
      iconName: 'calendar-day',
    },
    daily: {
      specificDaysOfWeek: {
        checked: true,
        days: {
          sunday: true,
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true
        }
      },
      numOfDaysPerWeek: {
        checked: false,
        frequency: 7
      },
      numOfDaysPerFortnight: {
        checked: false,
        frequency: 7
      },
      numOfDaysPerMonth: {
        checked: false,
        frequency: 7
      },
      everyXDays: {
        checked: false,
        frequency: 2
      },
      frequency: 1
    },
    weekly: {
      startWeekOn: {
        sunday: true,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
      },
      frequency: 1,
    },
    monthly: {
      frequency: 1,
    },
    currentStreak: 0,
    completed: false,
  }

  const [currentTask, setCurrentTask] = useState(defaultTask)

  console.log(currentTask)

  const handleTaskChange = (newTask) => {
    setCurrentTask(newTask)
  }

  const revertTaskSettingsToDefault = () => {
    setCurrentTask(defaultTask)
  }

  const handleSave = () => {
    handleSaveTask(currentTask)
    revertTaskSettingsToDefault()
    toggleModal()
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
                  <GeneralPresetTasks chosenColor={currentTask.color.color} currentTask={currentTask} handleTaskChange={handleTaskChange}/>
                </span>
              </Route>

              <Route path="/health-task" exact>
                <span>
                  <TaskSelectorHeader />
                  <HealthPresetTasks currentTask={currentTask} automaticColor={automaticColor} />
                </span>
              </Route>

              <Route path="/confirm" exact>
                <GeneralConfirmationScreen title={currentTask.title} icon={currentTask.icon} selectedTaskType={selectedTaskType} currentTask={currentTask} handleTaskChange={handleTaskChange} chosenColor={currentTask.color.color} handleSave={handleSave} revertTaskSettingsToDefault={revertTaskSettingsToDefault}/>
              </Route>

              <Route path="/confirm/measurement-duration" exact>
                <MeasurementDurationScreen currentTask={currentTask} handleTaskChange={handleTaskChange} chosenColor={currentTask.color.color}/>
              </Route>

              <Route path="/confirm/task-days" exact>
                <TaskDaysScreen currentTask={currentTask} handleTaskChange={handleTaskChange} chosenColor={currentTask.color.color}/>
              </Route>

              <Route path="/confirm/start-week-on" exact>
                <StartWeekOnScreen currentTask={currentTask} handleTaskChange={handleTaskChange} chosenColor={currentTask.color.color}/>
              </Route>

              <Route path="/confirm/color" exact>
                <ColorScreen currentTask={currentTask} handleTaskChange={handleTaskChange} chosenColor={currentTask.color.color} automaticColor={automaticColor}/>
              </Route>

            </Switch>
            
          </div>

        </div>
      </div>
    </Router>
  )
}

export default NewTaskForm;