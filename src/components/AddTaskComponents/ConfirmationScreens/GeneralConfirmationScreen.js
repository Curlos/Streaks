import React, { useState, useEffect } from 'react'
import ListElem from '../ListElem' 
import { GroupedTasks } from '../../StyledComponents/StyledPresetTask'
import { ConfirmTaskTitle, ConfirmTaskHeader, ConfirmTaskBody } from '../../StyledComponents/StyledConfirmTask'
import Task from '../../Task'
import { Link } from 'react-router-dom'

const ConfirmationScreen = ({ title, icon, selectedTaskType, currentTask, handleTaskChange }) => {

  useEffect(() => {
    handleTaskChange({...currentTask, title: title, icon: icon})
  }, [])

  const changeMeasurementDuration = (newMeasurementDuration) => {
    handleTaskChange({...currentTask, measurementDuration: newMeasurementDuration})
  }

  const changeFrequency = (numChange) => {

    switch (currentTask.measurementDuration.type) {
      case 'daily':
        const newDaily = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        handleTaskChange({...currentTask, daily: newDaily})
        break
      case 'weekly':
        const newWeekly = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        handleTaskChange({...currentTask, daily: newWeekly})
        break
      case 'monthly':
        const newMonthly = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        handleTaskChange({...currentTask, daily: newMonthly})
        break
      default:
        break
    }
  }

  const changeTaskDays = (newTaskDays) => {
    const newDaily = {...currentTask.daily, taskDays: newTaskDays}
    handleTaskChange({...currentTask, daily: newDaily})
  }

  const changeStartWeekOn = (newStartDay) => {
    const newWeekly = {...currentTask.weekly, startWeekOn: newStartDay}
    handleTaskChange({...currentTask, weekly: newWeekly})
  }

  const changeColor = (newColor) => {
    handleTaskChange({...currentTask, color: newColor})
  }

  const getTaskDuration = () => {
    const taskDuration = {
      daily: 'day',
      weekly: 'week',
      monthly: 'month'
    }

    return taskDuration
  }

  const getTaskFrequency = () => {
    return currentTask[currentTask.measurementDuration.type].frequency
  }

  const getLinkURL = (selectedTaskType) => {
    const LinkTypes = {
      'customTask': '/',
      'healthTask': '/health-task',
      'eatTask': '/eat-task',
      'timedTask': '/timed-task',
      'negativeTask': '/negative-task'
    }

    return LinkTypes[selectedTaskType]
  }

  const measurementTitle = `${currentTask.measurementDuration.type[0].toUpperCase() + currentTask.measurementDuration.type.slice(1,).toLowerCase()} Task`
  const measurementIconName = currentTask.measurementDuration.iconName

  console.log(currentTask.measurementDuration)


  return (
    <div>
      <ConfirmTaskHeader>
        <Link to={getLinkURL(selectedTaskType)}>
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ConfirmTaskTitle>Confirm Task</ConfirmTaskTitle>
        <Task name={title} icon={icon} theme="mediumForm"/>
      </ConfirmTaskHeader>

      <ConfirmTaskBody>
        <div>Title:</div>
        <GroupedTasks>
          <Link to="/confirm/measurement-duration">
            <ListElem name={measurementTitle} icon={<i value="customTask" className={`fas fa-${measurementIconName} fa-2x`}></i>} displayType="Daily Task" changeMeasurementDuration={changeMeasurementDuration} currentTask={currentTask}/>
          </Link>

          {currentTask.measurementDuration.type === 'daily' ? 
          (<Link to="/confirm/task-days">
            <ListElem name="Task Days" icon={<i value="customTask" className="fas fa-calendar fa-2x"></i>} changeTaskDays={changeTaskDays} currentTask={currentTask}/>
          </Link>) : null
          }

          <ListElem name={`${getTaskFrequency()}/${getTaskDuration()}`} icon={<i value="customTask" className="far fa-circle fa-2x"></i>} buttonType="plusMinusForm" changeFrequency={changeFrequency} currentTask={currentTask}/>

          {currentTask.measurementDuration.type === 'weekly' ? 
          (<Link to="/confirm/start-week-on">
            <ListElem name="Start Week On" icon={<i value="customTask" className="fas fa-calendar fa-2x"></i>} changeStartWeekOn={changeStartWeekOn} currentTask={currentTask} />
          </Link>) : null
          }
        </GroupedTasks>

        <GroupedTasks>
          <Link to="/confirm/color">
            <ListElem name="Color" icon={<i value="customTask" className="fas fa-palette fa-2x"></i>} changeColor={changeColor} currentTask={currentTask} />
          </Link>
        </GroupedTasks>
      </ConfirmTaskBody>
    </div>
  )
}

export default ConfirmationScreen;