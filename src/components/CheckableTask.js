import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { TaskContainer, TaskCircle, SelectedTaskCircle, TaskNameLarge, TaskNameForm, TaskContainerRight, PresetIcon, smallTaskTheme, smallTaskFormTheme, mediumTaskFormTheme, largeTaskTheme, TaskIconSmall, TaskIconMedium, TaskIconLarge} from './StyledComponents/StyledTask'

const HiddenElem = styled.span`
  visibility: hidden;
`

const getTheme = (theme) => {

  switch(theme) {
    case 'small':
      return smallTaskTheme
    case 'smallForm':
      return smallTaskFormTheme
    case 'mediumForm':
      return mediumTaskFormTheme
    case 'large':
      return largeTaskTheme
    default:
      return largeTaskTheme
  }
}

const getTaskType = (type, checked, checkable) => {
  if (checkable) {
    if (checked) {
      return (
        <TaskContainerRight>
          <i className="fas fa-check fa-2x"></i>
        </TaskContainerRight>
      )
    } else {
      return (
        <HiddenElem>
          <TaskContainerRight>
            <i className="fas fa-greater-than fa-2x"></i>
          </TaskContainerRight>
        </HiddenElem>
      )
    }
  }

  switch(type) {
    case 'form':
      return (
        <TaskContainerRight>
          <i className="fas fa-greater-than fa-2x"></i>
        </TaskContainerRight>
      )
    case 'plusMinusForm':
      return (
        <TaskContainerRight>
          <TaskCircle>
            <i className="fas fa-minus fa-2x"></i>
          </TaskCircle>
          <TaskCircle>
            <i className="fas fa-plus fa-2x"></i>
          </TaskCircle>
        </TaskContainerRight>
      )
    default:
      return null
  }
}

const getIconSize = (theme) => {

  switch(theme) {
    case 'small':
      return TaskIconSmall
    case 'smallForm':
      return TaskIconSmall
    case 'mediumForm':
      return TaskIconMedium
    case 'large':
      return TaskIconLarge
    default:
      return TaskIconSmall
  }
}

const CheckableTask = ({ name, icon, clickHandler, theme, type, presetIcon, selectedTaskType, checked, checkable }) => {

  const TaskIcon = getIconSize(theme)
  const TaskRightIcon = getTaskType(type, checked, checkable)

  console.log('ICON: ')
  console.log(icon)
  
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <TaskContainer onClick={clickHandler}>
        {icon === undefined ? null
        : selectedTaskType === name ? 
        <SelectedTaskCircle>
          <TaskIcon>{icon}</TaskIcon>
        </SelectedTaskCircle> : 
        <TaskCircle>
          <TaskIcon>{icon}</TaskIcon>
        </TaskCircle>
        }

    {type === 'form' || type === 'plusMinusForm' ? 
    <TaskNameForm><PresetIcon>{presetIcon}</PresetIcon>{name}</TaskNameForm> : <TaskNameLarge>{name}</TaskNameLarge>}
        

        {TaskRightIcon !== null ? TaskRightIcon : null}

      </TaskContainer>
    </ThemeProvider>
  )
}

export default CheckableTask;