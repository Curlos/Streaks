import React, { useState } from 'react'
import styled from 'styled-components'

const taskContainerWidth = 250
const taskContainerHeight = 250

const TaskIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 10px solid ${props => props.colors.color};
  border-radius: 50%;
  background-color: ${props => props.colors.backgroundColor};
  width: ${taskContainerWidth}px;
  height: ${taskContainerHeight}px;
  margin: 20px;

`

const TaskIcon = styled.div`
  font-size: ${taskContainerWidth / 2}px;
`

const TaskName = styled.div`
  color: ${props => props.colors.automaticColor};
  font-size: 1.5em;
  text-align: center;
  text-transform: uppercase;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const TaskStreakNum = styled.div`
  font-size: 1.7em;
`

const Task = ({ iconClassName, automaticColor }) => {

  const [colors, setColors] = useState({
    color: "gray",
    backgroundColor: "none",
    automaticColor,
  })

  const toggleComplete = () => {
    console.log('Prayed to god today!')
    
    if (colors.color === 'gray') {
      setColors({
        ...colors,
        color: automaticColor,
        backgroundColor: automaticColor
      })
    } else {
      setColors({
        ...colors,
        color: "gray",
        backgroundColor: "none"
      })
    }
  }

  console.log(iconClassName)
  return (
    <div onClick={toggleComplete}>
      <TaskIconContainer colors={colors}>
        <TaskIcon colors={colors}>
          <i className={iconClassName}></i>
        </TaskIcon>

        <TaskStreakNum>4</TaskStreakNum>
      </TaskIconContainer>
      
      <TaskName colors={colors}>pray to god</TaskName>
    </div>
  )
}

export default Task;