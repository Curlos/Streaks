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
`

const TaskIconFont = styled.div`
  font-size: ${taskContainerWidth / 2}px;
  filter: brightness(${props => props.brightness}%);
`

const FooterIcon = ({ currentTask, chosenId, handleClick, footerType }) => {

  const getBrightnessForNonChosen = () => {
    if (footerType === 'close') {
      return "100"
    } else if (footerType === 'allTasks' && !currentTask) {
      return "100"
    } else {
      return "50"
    }
  }

  const getIconClassName = () => {
    if (footerType === 'close') {
      return 'fas fa-times'
    } else if (footerType === 'allTasks') {
      return 'fas fa-star'
    } else {
      return currentTask.icon
    }
  }

  return (
      <span>
        <TaskContainer onClick={handleClick}>
            <TaskIconContainer backgroundColor="none">
            <TaskIconFont backgroundColor="none" brightness={currentTask && currentTask.id === chosenId ? "100" : getBrightnessForNonChosen()}>
              <i className={getIconClassName()}></i>
            </TaskIconFont>
          </TaskIconContainer>
        </TaskContainer>
      </span>
  )
}


export default FooterIcon;