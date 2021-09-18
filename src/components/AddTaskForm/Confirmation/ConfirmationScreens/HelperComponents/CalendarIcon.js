import React, { useState } from 'react'
import styled from 'styled-components'
import { completeTask, missTask, skipTask } from '../Helpers/taskCompletion'

const taskContainerWidth = 70
const taskContainerHeight = 70

const TaskContainer = styled.span`

`
const TaskIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  width: ${taskContainerWidth}px;
  height: ${taskContainerHeight}px;
  margin: 20px;
  margin-bottom: 0px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const TaskIconFont = styled.div`
  font-size: ${taskContainerWidth / 2}px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const TaskIconSkipped = styled(TaskIconContainer)`
  opacity: 0.5;
`

const TaskIconX = styled.div`
  font-size: ${taskContainerWidth}px;
  color: gray;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const getTaskCompletion = (currentTask, currentDate) => {
  if (Object.keys(currentTask.completedDays).includes(currentDate)) {
    return 'complete' // complete
  } else if (Object.keys(currentTask.missedDays).includes(currentDate)) {
    return 'missed' // missed
  }

  return 'skipped' // skipped
}

const CalendarIcon = ({ currentTask, handleTaskChange, dayNum, currentMonth, currentYear }) => {
  const currentDateStr = new Date(currentYear, currentMonth, dayNum).toISOString().split('T')[0]

  const [dateStatus, setDateStatus] = useState(getTaskCompletion(currentTask, currentDateStr))

  const toggleIcon = () => {
    if (dateStatus === 'skipped') {
      // If the task is completed
      handleCompleteTask(currentDateStr)
    } else if (dateStatus === 'complete') {
      // If the task is missed
      handleMissTask(currentDateStr)
    } else {
      // If the task is skipped
      handleSkipTask(currentDateStr)
    }
  }

  const handleCompleteTask = (currentDateStr) => {
    setDateStatus('complete')
    completeTask(currentDateStr, currentTask, currentYear, currentMonth, dayNum, handleTaskChange)
    
  }

  const handleMissTask = (currentDateStr) => {
    setDateStatus('missed')
    missTask(currentDateStr, currentTask, currentYear, currentMonth, dayNum, handleTaskChange)
    
  }

  const handleSkipTask = (currentDateStr) => {
    setDateStatus('skipped')
    skipTask(currentDateStr, currentTask, currentYear, currentMonth, dayNum, handleTaskChange)
    
  }

  const getIcon = () => {
    switch (dateStatus) {
      case 'skipped':
        return (
          <TaskIconSkipped backgroundColor={currentTask.color.color}>
            <TaskIconFont backgroundColor={currentTask.color.color}>
              {dayNum}
            </TaskIconFont>
          </TaskIconSkipped>
        )
      case 'missed':
        return (
          <TaskIconContainer backgroundColor="none">
            <TaskIconX backgroundColor="none">
              {<i class="fas fa-times"></i>}
            </TaskIconX>
          </TaskIconContainer>
        )
      case 'complete':
        return (
          <TaskIconContainer backgroundColor={currentTask.color.color}>
            <TaskIconFont backgroundColor={currentTask.color.color}>
              {dayNum}
            </TaskIconFont>
          </TaskIconContainer>
        )
      default:
        return null
    }
  }

  const currentDateInSec = new Date(currentYear, currentMonth, dayNum).getTime()
  const todayInSec = new Date().getTime()
  // A date can only be clicked if it is either the current day (today) or before the current day
  const clickableDate = todayInSec >= currentDateInSec

  return (
      <span>
        <TaskContainer onClick={clickableDate ? toggleIcon : null}>
          {getIcon()}
        </TaskContainer>
      </span>
  )
}


export default CalendarIcon;