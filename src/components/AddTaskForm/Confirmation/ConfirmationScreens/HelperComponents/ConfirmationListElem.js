import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const taskContainerWidth = 60
const taskContainerHeight = 60

const TaskContainer = styled.span`
  display: flex;
`

const TaskIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.color};
  width: ${taskContainerWidth}px;
  height: ${taskContainerHeight}px;
  margin: 20px;

`

const TaskIcon = styled.div`
  font-size: ${taskContainerWidth / 2}px;
  margin-left: 10px;
`

const TaskNameContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  margin: ${props => props.margin ? props.margin : 0}px;
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

const TaskInfo = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TaskDesc = styled.span`
  color: #9e9e9e;
`

const ColorCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 5px solid white;
`

const ConfirmationListElem = ({ title, clickHandler, iconClassName, currentTask, handleTaskChange, checked, chosenColor, description, listElemType }) => {

  const handleColorChange = (e) => {
    const newColor = e.target.value
    clickHandler(newColor)
  }

  return (
      <ListElemBody onClick={listElemType !== 'color' ? clickHandler : null}>
        <TaskContainer onClick={listElemType !== 'color' ? clickHandler : null}>
              {iconClassName ? (
                <TaskIconContainer color={chosenColor}>
                  <TaskIcon>
                    <i className={iconClassName}></i>
                  </TaskIcon>
                </TaskIconContainer>
              ) : null}
              <TaskInfo>
                {iconClassName ? <TaskNameContainer>{title}</TaskNameContainer> : <TaskNameContainer margin="20">{title}</TaskNameContainer>}
                <TaskDesc>{description}</TaskDesc>
              </TaskInfo>
        </TaskContainer>

        <TaskIconContainer color="none">
              {listElemType === 'color' ? (
                <span>
                  <input type="color"
                    value={chosenColor} onChange={handleColorChange}/>
                </span>
              ): null}
            <TaskIcon>
              {checked === true ? <i className="fas fa-check"></i> :
              null}
              {listElemType === 'color' ? <i className="fas fa-greater-than"></i> : null}
            </TaskIcon>
          </TaskIconContainer>
      </ListElemBody>
  )
}

export default ConfirmationListElem;