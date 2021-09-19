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

const FooterIcon = ({ currentTask, chosenId, handleClick }) => {

  const getBrightnessForNonChosen = () => {
    if (!currentTask) {
      return "100"
    } else {
      return "50"
    }
  }

  return (
      <span>
        <TaskContainer onClick={handleClick}>
            <TaskIconContainer backgroundColor="none">
            <TaskIconFont backgroundColor="none" brightness={currentTask && currentTask.id === chosenId ? "100" : getBrightnessForNonChosen()}>
              <i className={currentTask ? currentTask.icon: 'fas fa-times'}></i>
            </TaskIconFont>
          </TaskIconContainer>
        </TaskContainer>
      </span>
  )
}


export default FooterIcon;