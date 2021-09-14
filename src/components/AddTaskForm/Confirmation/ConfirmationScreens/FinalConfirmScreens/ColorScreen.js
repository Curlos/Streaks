import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ConfirmationListElem from '../HelperComponents/ConfirmationListElem'
import styled from 'styled-components'

const ListTitle = styled.span`
  font-size: 25px;
`

const ListHeader = styled.div`
  border-radius: 20px 20px 0 0;
  background-color: #202020;
  padding: 15px;
`

const ListBody = styled.div`
  background-color: black;
`

const ListDesc = styled.div`
  padding: 20px;
  padding-top: 40px;
  color: #9e9e9e;
`

const GroupedTasks = styled.div`
  margin-bottom: 25px;
`

const ColorScreen = ({ currentTask, handleTaskChange, automaticColor }) => {

  const taskColorTypes = {...currentTask.color.taskColorTypes}

  const handleCheck = (colorType, customColor=null) => {
    console.log('click')
    if (colorType === 'automatic') {
      const newColor = {
        type: 'automatic',
        color: automaticColor,
        taskColorTypes: {
          automatic: {
            checked: true,
            color: automaticColor
          },
          customColor: {
            checked: false,
            color: taskColorTypes.customColor.color
          }
        }}
      handleTaskChange({...currentTask, color: newColor})

    } else {
      const newColor = {
        type: 'custom', 
        color: customColor, 
        taskColorTypes: {
          automatic: {
            checked: false,
            color: automaticColor
          },
          customColor: {
            checked: true,
            color: typeof customColor === 'string' ? customColor : automaticColor
          }
        }}
      handleTaskChange({...currentTask, color: newColor})
    }
  }

  const handlePickAutomatic = () => {
    handleCheck('automatic')
  }

  const handlePickCustom = (customColor) => {
    console.log('bitches get stitches')
    handleCheck('customColor', customColor)
  }

  return (
    <div>
      <ListHeader>
        <Link to="/confirm">
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ListTitle>Color</ListTitle>
      </ListHeader>

      <ListBody>
        <ListDesc>Determines the period of time a single completion is measured over.</ListDesc>
        <GroupedTasks>
          <ConfirmationListElem title="Automatic" clickHandler={handlePickAutomatic} checked={taskColorTypes.automatic.checked} automaticColor={automaticColor}/>
        </GroupedTasks>

        <GroupedTasks>
          <ConfirmationListElem title="Custom" clickHandler={handlePickCustom} automaticColor={automaticColor} chosenColor={currentTask.color.color} checked={taskColorTypes.customColor.checked} listElemType="color" />
        </GroupedTasks>

      </ListBody>
    </div>
  )
}

export default ColorScreen;