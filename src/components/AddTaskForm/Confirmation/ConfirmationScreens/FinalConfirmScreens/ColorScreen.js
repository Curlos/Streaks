import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ListElem from '../../../ListElem/ListElem'
import ConfirmationListElem from '../HelperComponents/ConfirmationListElem'
import styled from 'styled-components'

const ListTitle = styled.span`
  font-size: 25px;
`

const ListHeader = styled.div`
  border-radius: 20px 20px 0 0;
  background-color: #202020;
  padding: 15px;
  border-radius: 0 20px 20px 20px;
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

  const [taskColorTypes, setTaskColorTypes] = useState({
    automatic: {
      checked: true,
      color: automaticColor
    },
    customColor: {
      checked: false,
      color: null
    }
  })

  const handleCheck = (colorType, customColor=null) => {
    if (colorType === 'automatic') {
      setTaskColorTypes({
        automatic: {
          checked: true,
          color: automaticColor
        },
        customColor: {
          checked: false,
          color: taskColorTypes.customColor.color
        }
      })

      handleTaskChange({...currentTask, color: {
        type: 'automatic',
        color: automaticColor
      }})
    } else {
      setTaskColorTypes({
        automatic: {
          checked: false,
          color: automaticColor
        },
        customColor: {
          checked: true,
          color: customColor
        }
      })

      handleTaskChange({...currentTask, color: {
        type: 'custom',
        color: customColor
      }})
    }

    console.log(taskColorTypes)
  }

  const handlePickAutomatic = () => {
    handleCheck('automatic')
  }

  const handlePickCustom = (customColor) => {
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
          <ConfirmationListElem title="Custom" clickHandler={handlePickCustom} automaticColor={automaticColor} listElemType="color"/>
        </GroupedTasks>

      </ListBody>
    </div>
  )
}

export default ColorScreen;