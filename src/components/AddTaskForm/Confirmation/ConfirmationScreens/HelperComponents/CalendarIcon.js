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
`

const TaskIcon = ({ currentTask }) => {

  return (
      <span>
        <TaskContainer>
            <TaskIconContainer backgroundColor={currentTask.color.color}>
            <TaskIconFont backgroundColor={currentTask.color.color}>
              <i className={currentTask.icon}></i>
            </TaskIconFont>
          </TaskIconContainer>
        </TaskContainer>
      </span>
  )
}


export default TaskIcon;