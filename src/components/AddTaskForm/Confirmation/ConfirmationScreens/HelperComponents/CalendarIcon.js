import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

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

const CalendarIcon = ({ currentTask, handleTaskChange, num }) => {
  const iconTypes = ['skipped', 'complete','missed']
  const [iconIndex, setIconIndex] = useState(0)


  const toggleIcon = () => {
    if (iconIndex === 2) {
      setIconIndex(0)
    } else {
      setIconIndex(iconIndex + 1)
    }
  }

  const getIcon = () => {
    switch (iconTypes[iconIndex]) {
      case 'skipped':
        return (
          <TaskIconSkipped backgroundColor={currentTask.color.color}>
            <TaskIconFont backgroundColor={currentTask.color.color}>
              {num}
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
              {num}
            </TaskIconFont>
          </TaskIconContainer>
        )
      default:
        return null
    }
  }

  return (
      <span>
        <TaskContainer onClick={toggleIcon}>
          {getIcon()}
        </TaskContainer>
      </span>
  )
}


export default CalendarIcon;