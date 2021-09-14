import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const taskContainerWidth = 60
const taskContainerHeight = 60

const TaskContainer = styled.span`
  display: flex;
`

const TaskIcons = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-right: 40px;
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

const PlusMinusListElem = ({ title, iconClassName, currentTask, handleTaskChange, chosenColor }) => {

  const handleIncrement = () => {

    const newFreq = {...currentTask[currentTask.measurementDuration.type], frequency: currentTask[currentTask.measurementDuration.type].frequency + 1}

    handleTaskChange({...currentTask, [currentTask.measurementDuration.type]: newFreq})
  }
  
  const handleDecrement = () => {
    if (currentTask[currentTask.measurementDuration.type].frequency > 1) {
      const newFreq = {...currentTask[currentTask.measurementDuration.type], frequency: currentTask[currentTask.measurementDuration.type].frequency - 1}

      handleTaskChange({...currentTask, [currentTask.measurementDuration.type]: newFreq})
    }
  }

  return (
      <ListElemBody>
        <TaskContainer>
              <TaskIconContainer color={chosenColor}>
                <TaskIcon>
                  <i className={iconClassName}></i>
                </TaskIcon>
              </TaskIconContainer>
              <TaskNameContainer>{title}</TaskNameContainer>
        </TaskContainer>

        <ListRight>
          <TaskIconContainer color="none">
          <TaskIcons>
  
            <TaskIconContainer color="gray" iconType="plusMinus" onClick={handleDecrement}>
              <TaskIcon onClick={handleDecrement}>
                <i className="fas fa-minus"></i>
              </TaskIcon>
            </TaskIconContainer>

            <TaskIconContainer color="gray" iconType="plusMinus" onClick={handleIncrement}>
              
              <TaskIcon onClick={handleIncrement}>
                <i className="fas fa-plus"></i>
              </TaskIcon>
            </TaskIconContainer>

          </TaskIcons>
            
          </TaskIconContainer>
        </ListRight>
      </ListElemBody>
  )
}

export default PlusMinusListElem;