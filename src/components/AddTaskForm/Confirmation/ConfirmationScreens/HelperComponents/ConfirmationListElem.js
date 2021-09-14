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
  margin-right: ${props => props.colorType === 'colorPicker' ? 45 : 20}px;
  margin-top: ${props => props.colorType === 'colorPicker' ? 5 : 0}px;
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

const ColorPicker = styled.span`
  visibility: ${props => props.visibility}
`

const ConfirmationListElem = ({ title, clickHandler, iconClassName, currentTask, handleTaskChange, checked, chosenColor, description, listElemType, value }) => {

  const handleColorChange = (e) => {
    const newColor = e.target.value
    clickHandler(newColor)
  }


  return (
      <ListElemBody onClick={clickHandler} value={value}>
        <TaskContainer onClick={clickHandler} value={value}>
              {iconClassName ? (
                <TaskIconContainer color={chosenColor} value={value}>
                  <TaskIcon value={value}>
                    <i className={iconClassName}></i>
                  </TaskIcon>
                </TaskIconContainer>
              ) : null}
              <TaskInfo value={value}>
                {iconClassName ? <TaskNameContainer value={value}>{title}</TaskNameContainer> : <TaskNameContainer margin="20" value={value}>{title}</TaskNameContainer>}
                <TaskDesc value={value}>{description}</TaskDesc>
              </TaskInfo>
        </TaskContainer>

        <TaskIconContainer color="none" value={value} colorType={listElemType === 'color' ? 'colorPicker' : null}>
              {listElemType === 'color' ? (
                <ColorPicker visibility={checked ? 'inline-block' : 'hidden'}>
                  <input type="color"
                    value={chosenColor || currentTask.color.color} onChange={handleColorChange}/>
                </ColorPicker>
              ): null}
            <TaskIcon value={value}>
              {listElemType === 'color' ? <i className="fas fa-greater-than"></i> : null}
              {listElemType !== 'color' && checked ? <i className="fas fa-check"></i> : null}
            </TaskIcon>
          </TaskIconContainer>
      </ListElemBody>
  )
}

export default ConfirmationListElem;