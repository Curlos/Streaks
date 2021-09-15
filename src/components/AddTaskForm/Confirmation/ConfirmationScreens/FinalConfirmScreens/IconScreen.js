import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import getIcons from '../Helpers/getIcons'
import TaskIcon from '../HelperComponents/TaskIcon'
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

const GroupedTasks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
`


const IconScreen = ({ currentTask, handleTaskChange, automaticColor, taskObj, edit }) => {

  const { id } = useParams()
  const [icons, setIcons] = useState(getIcons())
  const [lastSelectedIcon, setLastSelectedIcon] = useState(null)

  const getLinkURL = () => {
    if (edit) {
      return `/confirm/edit/${id}`
    }

    return '/confirm'
  }

  const unselectIcon = (iconObj) => {
    if (!iconObj) {
      return
    }

    const newIconObj = {...iconObj, backgroundColor: 'gray', selected: false}
    const newTypeIcons = {...icons[iconObj.type], [iconObj.iconClassName]: newIconObj }
    
    return newTypeIcons
  }

  const handleIconSelection = (iconObj) => {
    const lastSelectedTypeIcons = unselectIcon(lastSelectedIcon)
    const newIconObj = {...iconObj, backgroundColor: currentTask.color.color, selected: true}
    const newTypeIcons = {...icons[iconObj.type], [iconObj.iconClassName]: newIconObj }

    if (lastSelectedIcon) {
      console.log(currentTask)
      
      if (lastSelectedIcon.type === iconObj.type) {
        setIcons({...icons, [iconObj.type]: {...lastSelectedTypeIcons, [newIconObj.iconClassName]: newIconObj}})
      } else {
        setIcons({...icons, [lastSelectedIcon.type]: lastSelectedTypeIcons, [iconObj.type]: newTypeIcons})
      }
    } else {
      setIcons({...icons, [iconObj.type]: newTypeIcons})
    }
    setLastSelectedIcon(newIconObj)

  }

  const handleIconChange = (iconObj) => {
    handleTaskChange({...currentTask, icon: iconObj.iconClassName})
  }

  return (
    <div>
      <ListHeader>
        <Link to={getLinkURL()}>
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ListTitle>Select Icon</ListTitle>
      </ListHeader>

      <ListBody>
          {Object.keys(icons).map((category) => {
            return (
              <GroupedTasks key={category}>
                {Object.values(icons[category]).map(iconObj => {

                  return (
                    <TaskIcon key={iconObj.iconClassName} iconClassName={iconObj.iconClassName} chosenColor={currentTask.color.color} iconObj={iconObj} handleIconSelection={handleIconSelection} handleIconChange={handleIconChange}/>
                  )
                })}
              </GroupedTasks>
            )
          })}
      </ListBody>
    </div>
  )
}

export default IconScreen;