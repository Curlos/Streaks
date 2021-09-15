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
  background-color: ${props => props.colors.backgroundColor};
  width: ${taskContainerWidth}px;
  height: ${taskContainerHeight}px;
  margin: 20px;
  margin-bottom: 0px;
`

const TaskIconFont = styled.div`
  font-size: ${taskContainerWidth / 2}px;
`

const TaskIcon = ({ iconClassName, chosenColor, taskObj, toggleCompleteTask, toggleModal }) => {

  const [colors, setColors] = useState({
    color: "gray",
    backgroundColor: "none",
    chosenColor
  })

  const [iconSelected, setIconSelected] = useState(false)

  useEffect(() => {

    const newColor = colors.color !== 'gray' ? chosenColor : 'gray'
    const newBackgroundColor = 'gray'
    
    setColors({
      color: newColor,
      backgroundColor: newBackgroundColor,
      chosenColor
    })
  }, [chosenColor])

  const handleClick = () => {
    
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
        backgroundColor: "gray"
      })

      setIconSelected(true)

    }
  }

  return (
      <span>
        <TaskContainer>
            <TaskIconContainer colors={colors} onClick={handleClick}>
            <TaskIconFont colors={colors}>
              <i className={iconClassName}></i>
            </TaskIconFont>
          </TaskIconContainer>
        </TaskContainer>

        {iconSelected ? <Redirect push to="/confirm" /> : null}
      </span>
  )
}


export default TaskIcon;