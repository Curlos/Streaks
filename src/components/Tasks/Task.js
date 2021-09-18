import React, { useState, useEffect } from 'react'
import { completeTask, missTask, skipTask } from '../AddTaskForm/Confirmation/ConfirmationScreens/Helpers/taskCompletion'
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

const DropdownContent = styled.div`
  display: ${props => props.dropdown ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  background-color: ${props => props.colors.chosenColor};
  min-width: 160px;
  z-index: 1;

  margin-top: -31px;
  margin-left: 180px;
  margin-bottom: 20px;
`

const DropdownLink = styled.a`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: ${props => props.colors.chosenColor};

  &:hover {
    filter: brightness(0.85);
  }
`

const DropdownLinkName = styled.span`
  margin-left: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const Task = ({ iconClassName, chosenColor, showSettings, taskObj, toggleCompleteTask, handleEditTask, toggleModal }) => {

  const [colors, setColors] = useState({
    color: "gray",
    backgroundColor: "none",
    chosenColor
  })

  const [icon, setIcon] = useState(iconClassName)

  const [dropdown, setDropdown] = useState(false)

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

  const handleCompleteTask = (currentDateStr, taskObj, currentYear, currentMonth, dayNum, handleTaskChange) => {
    setColors({
      ...colors,
      color: chosenColor,
      backgroundColor: chosenColor,
      automaticColor: chosenColor
    })
    
    const completedTask = {...taskObj, completed: true}
    setIcon(iconClassName)

    completeTask(currentDateStr, completedTask, currentYear, currentMonth, dayNum, handleTaskChange)


  }

  const handleMissTask = (currentDateStr, taskObj, currentYear, currentMonth, dayNum, handleTaskChange) => {
    const missedTaskColor = 'gray'
    const missedTaskIcon = 'fas fa-times'
    setColors({
      ...colors,
      color: missedTaskColor,
      backgroundColor: missedTaskColor,
      automaticColor: missedTaskColor
    })
    
    const missedTask = {...taskObj, completed: false}
    setIcon(missedTaskIcon)

    missTask(currentDateStr, missedTask, currentYear, currentMonth, dayNum, handleTaskChange)
  }

  const handleSkipTask = (currentDateStr, taskObj, currentYear, currentMonth, dayNum, handleTaskChange) => {
    setColors({
      ...colors,
      color: 'gray',
      backgroundColor: 'none',
      automaticColor: chosenColor
    })
    
    const skippedTask = {...taskObj, completed: false}
    setIcon(iconClassName)

    skipTask(currentDateStr, skippedTask, currentYear, currentMonth, dayNum, handleTaskChange)
  }

  const toggleComplete = () => {
    const currentDate = new Date().getDate()
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    const currentDay = new Date(currentYear, currentMonth, currentDate)
    let currentDateStr = currentDay.toISOString().split('T')[0]

    const completed = Object.keys(taskObj.completedDays).includes(currentDateStr)
    const missed = Object.keys(taskObj.missedDays).includes(currentDateStr)
    const notCompletedButNotMissed = completed === false && missed === false

    console.log(`${currentDateStr} completed? ${completed}`)
    console.log(`${currentDateStr} missed? ${missed}`)
    console.log(`${currentDateStr} skipped or day hasn't ended and not completed yet? ${notCompletedButNotMissed}`)
    
    if (notCompletedButNotMissed) {
      handleCompleteTask(currentDateStr, taskObj, currentYear, currentMonth, currentDate, handleEditTask)
    } else if (completed) {
      handleMissTask(currentDateStr, taskObj, currentYear, currentMonth, currentDate, handleEditTask)
    } else {
      handleSkipTask(currentDateStr, taskObj, currentYear, currentMonth, currentDate, handleEditTask)
    }
  }

  const toggleDropdown = () => {
    console.log(dropdown)
    setDropdown(!dropdown)
  }

  const displayEditScreen = () => {
    toggleModal()
    toggleDropdown()
    handleEditTask(taskObj)
  }

  const displayCalendarScreen = () => {
    toggleModal()
    toggleDropdown()
  }

  return (
  
      <div>
        <TaskContainer>

            <TaskIconContainer colors={colors} onClick={toggleComplete}>
            <TaskIcon colors={colors}>
              <i className={icon}></i>
            </TaskIcon>

            <TaskStreakNum>{taskObj ? taskObj.currentStreak.num : 69}</TaskStreakNum>
          </TaskIconContainer>

          <DisplayElem display={showSettings ? 'visible' : 'hidden'}>
            <TaskSettingsIconContainer colors={colors} onClick={toggleDropdown}>
              <TaskSettingsIcon>
                <i className="fas fa-ellipsis-h"></i>
              </TaskSettingsIcon>
            </TaskSettingsIconContainer>

            <DropdownContent colors={colors} dropdown={dropdown}>
              <Link to={`/confirm/edit/${taskObj.id}`}>
                <DropdownLink colors={colors} onClick={displayEditScreen}>
                  <i className="fas fa-ellipsis-h"></i> 
                  <DropdownLinkName>
                    Edit Task
                  </DropdownLinkName>
                </DropdownLink>
              </Link>

              <Link to={`/edit/calendar/${taskObj.id}`}>
                <DropdownLink colors={colors} onClick={displayCalendarScreen}>
                  <i className="fas fa-calendar"></i> 
                  <DropdownLinkName>
                    View Calendar
                  </DropdownLinkName>
                </DropdownLink>
              </Link>

              <Link to={`/confirm/edit/calendar/${taskObj.id}`}>
                <DropdownLink colors={colors} onClick={displayCalendarScreen}>
                  <i className="fas fa-chart-bar"></i>

                  <DropdownLinkName>
                    View Stats
                  </DropdownLinkName>
                </DropdownLink>
              </Link>
            </DropdownContent>

          </DisplayElem>
          
          <TaskNameContainer colors={colors}>
            <TaskName>{taskObj ? taskObj.title : 'pray to god'}</TaskName>
          </TaskNameContainer>
        </TaskContainer>
      </div>
  )
}


export default Task;