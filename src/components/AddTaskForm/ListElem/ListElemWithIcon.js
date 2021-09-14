import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const taskContainerWidth = 60
const taskContainerHeight = 60

const TaskContainer = styled.span`
  display: flex;
`

const TaskIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.color};
  width: ${taskContainerWidth}px;
  height: ${taskContainerHeight}px;
  margin: ${props => props.iconType === 'plusMinus' ? 0 : 20}px;
  margin-right: ${props => props.iconType === 'plusMinus' ? 10 : 20}px;

`

const TaskIcon = styled.div`
  font-size: ${taskContainerWidth / 2}px;
`

const TaskNameContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const ListElemBody = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #202020;
  &:hover {
    background-color: rgb(20, 20, 20);
  }
`

const ListRight = styled.span`

`

const ListDesc = styled.span`
  display: flex;
  align-items: center;
`

const ColorCircle = styled.div`
  background-color: ${props => props.color};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 5px solid white;
  margin-right: 10px;
`

const ListElemWithIcon = ({ title, clickHandler, iconClassName, currentTask, handleTaskChange, chosenColor, description }) => {

  const handleClick = () => {

    if (handleTaskChange) {
      handleTaskChange({...currentTask, title: title, icon: iconClassName })
    }
  }
  
  const getDescriptionValue = (currentTask, value) => {
    switch (value) {
      case 'color':
        return (
          <ListDesc>
            <ColorCircle color={currentTask.color.color}>
            </ColorCircle>
            <TaskIcon>
              <i className="fas fa-greater-than"></i>
            </TaskIcon>
          </ListDesc>
        )
      case 'text':
        return (
          {value}
        )
      case 'delete':
        return null
      default:
        return (
          <TaskIcon>
            <i className="fas fa-greater-than"></i>
          </TaskIcon>
        )
    }
  }

  return (
      <ListElemBody onClick={description === 'delete' ? clickHandler : handleClick}>
        <TaskContainer onClick={clickHandler}>
              <TaskIconContainer color={chosenColor}>
                <TaskIcon>
                  <i className={iconClassName}></i>
                </TaskIcon>
              </TaskIconContainer>
              <TaskNameContainer>{title}</TaskNameContainer>
        </TaskContainer>

        <ListRight>
          <TaskIconContainer color="none">
            {getDescriptionValue(currentTask, description)}
            
          </TaskIconContainer>
        </ListRight>
      </ListElemBody>
  )
}

export default ListElemWithIcon;