import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const taskContainerWidth = 60
const taskContainerHeight = 60

const TaskContainer = styled.span`

`
// ${props => props.colors.backgroundColor}
const TaskIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: gray;
  width: ${taskContainerWidth}px;
  height: ${taskContainerHeight}px;
  margin: 20px;

`

const TaskIcon = styled.div`
  font-size: ${taskContainerWidth / 2}px;
`

const HeaderTask = ({ taskObject, iconClassName, chosenColor, clickHandler }) => {

  const [colors, setColors] = useState({
    color: "gray",
    backgroundColor: "none",
    chosenColor
  })

  const toggleComplete = () => {
    
    if (colors.color === 'gray') {
      setColors({
        ...colors,
        color: chosenColor,
        backgroundColor: chosenColor,
        automaticColor: chosenColor
      })
    } else {
      setColors({
        ...colors,
        color: "gray",
        backgroundColor: "none"
      })
    }
  }

  return (
  
      <div>
        <TaskContainer onClick={clickHandler}>
            <TaskIconContainer colors={colors} onClick={toggleComplete}>
            <TaskIcon colors={colors}>
              <i className={iconClassName}></i>
            </TaskIcon>

          </TaskIconContainer>
          
        </TaskContainer>
      </div>
  )
}

export default HeaderTask;