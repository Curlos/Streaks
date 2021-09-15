import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Redirect, Link, useParams } from 'react-router-dom'

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

const TaskIcon = ({ iconClassName, chosenColor, iconObj, handleIconSelection, toggleCompleteTask, toggleModal }) => {

  const [iconSelected, setIconSelected] = useState(false)

  const handleClick = () => {
    
    if (!iconObj.selected) {
      handleIconSelection(iconObj)
      
    } else {

      setIconSelected(true)

    }
  }

  return (
      <span>
        <TaskContainer>
            <TaskIconContainer backgroundColor={iconObj.backgroundColor} onClick={handleClick}>
            <TaskIconFont backgroundColor={iconObj.backgroundColor}>
              <i className={iconClassName}></i>
            </TaskIconFont>
          </TaskIconContainer>
        </TaskContainer>

        {iconSelected ? <Redirect push to="/confirm" /> : null}
      </span>
  )
}


export default TaskIcon;