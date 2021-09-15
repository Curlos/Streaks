import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const taskContainerWidth = 200
const taskContainerHeight = 200

const taskIconSettingsContainerWidth = 50
const taskIconSettingsContainerHeight = 50

const TaskContainer = styled.span`

`
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
  margin-bottom: 0px;
`

const TaskIcon = styled.div`
  font-size: ${taskContainerWidth / 2}px;
`

const TaskSettingsIconContainer = styled(TaskIconContainer)`
  border: none;
  background-color: ${props => props.colors.chosenColor};
  width: ${taskIconSettingsContainerWidth}px;
  height: ${taskIconSettingsContainerHeight}px;
  padding: 10px;
  margin-top: -70px;
  margin-left: 170px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 10px 4px rgba(0,0,0,.8);
`

const TaskSettingsIcon = styled.div`
  font-size: ${taskContainerWidth / 8}px;
`

const TaskNameContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.colors.chosenColor};
  font-size: 1.5em;
  text-align: center;
  text-transform: uppercase;
  max-width: ${taskContainerWidth + 50}px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const TaskName = styled.span`
  text-align: center;
`

const TaskStreakNum = styled.div`
  font-size: 1.7em;
`

const DisplayElem = styled.div`
  visibility: ${props => props.display};
`

const Task = ({ iconClassName, chosenColor, showSettings, taskObj, toggleCompleteTask, handleEditTask, toggleModal }) => {

  const [colors, setColors] = useState({
    color: "gray",
    backgroundColor: "none",
    chosenColor
  })

  useEffect(() => {

    const newColor = colors.color !== 'gray' ? chosenColor : 'gray'
    const newBackgroundColor = colors.backgroundColor !== 'none' ? chosenColor : 'none'
    
    setColors({
      color: newColor,
      backgroundColor: newBackgroundColor,
      chosenColor
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenColor])

  const toggleComplete = () => {
    
    if (taskObj.completed === false) {
      setColors({
        ...colors,
        color: chosenColor,
        backgroundColor: chosenColor,
        automaticColor: chosenColor
      })

      
      const completedTask = {...taskObj, completed: true, currentStreak: taskObj.currentStreak + 1}
      toggleCompleteTask(completedTask)
    } else {
      setColors({
        ...colors,
        color: "gray",
        backgroundColor: "none"
      })

      const incompleteTask = {...taskObj, completed: false, currentStreak: taskObj.currentStreak - 1}
      toggleCompleteTask(incompleteTask)
    }
  }

  const displayEditScreen = () => {
    toggleModal()
    handleEditTask(taskObj)
  }

  return (
  
      <div>
        <TaskContainer>
            <TaskIconContainer colors={colors} onClick={toggleComplete}>
            <TaskIcon colors={colors}>
              <i className={iconClassName}></i>
            </TaskIcon>

            <TaskStreakNum>{taskObj ? taskObj.currentStreak : 69}</TaskStreakNum>
          </TaskIconContainer>

          <DisplayElem display={showSettings ? 'visible' : 'hidden'}>
            <Link to={`/confirm/edit/${taskObj.id}`}>
                <TaskSettingsIconContainer colors={colors} onClick={displayEditScreen}>
                  <TaskSettingsIcon>
                    <i className="fas fa-ellipsis-h"></i>
                  </TaskSettingsIcon>
                </TaskSettingsIconContainer>
            </Link>
          </DisplayElem>
          
          <TaskNameContainer colors={colors}>
            <TaskName>{taskObj ? taskObj.title : 'pray to god'}</TaskName>
          </TaskNameContainer>
        </TaskContainer>
      </div>
  )
}


export default Task;