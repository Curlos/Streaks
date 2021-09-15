import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ConfirmationListElem from '../HelperComponents/ConfirmationListElem'
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

const ListDesc = styled.div`
  padding: 20px;
  padding-top: 40px;
  color: #9e9e9e;
`

const GroupedTasks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
`


const ColorScreen = ({ currentTask, handleTaskChange, automaticColor, taskObj, edit }) => {

  const { id } = useParams()

  const getLinkURL = () => {
    if (edit) {
      return `/confirm/edit/${id}`
    }

    return '/confirm'
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
        <GroupedTasks>
          <TaskIcon iconClassName="fas fa-snowboarding" chosenColor={currentTask.color.color} taskObj={taskObj} />
          <TaskIcon iconClassName="fas fa-skiing-nordic" chosenColor={currentTask.color.color} taskObj={taskObj} />
          <TaskIcon iconClassName="fas fa-skiing" chosenColor={currentTask.color.color} taskObj={taskObj} />
          <TaskIcon iconClassName="fas fa-snowboarding" chosenColor={currentTask.color.color} taskObj={taskObj} />
          <TaskIcon iconClassName="fas fa-skiing-nordic" chosenColor={currentTask.color.color} taskObj={taskObj} />
          <TaskIcon iconClassName="fas fa-skiing" chosenColor={currentTask.color.color} taskObj={taskObj} />
        </GroupedTasks>

        <GroupedTasks>
          <TaskIcon iconClassName="fas fa-burn" chosenColor={currentTask.color.color} taskObj={taskObj} />
          <TaskIcon iconClassName="fas fa-heartbeat" chosenColor={currentTask.color.color} taskObj={taskObj} />
          <TaskIcon iconClassName="fas fa-spa" chosenColor={currentTask.color.color} taskObj={taskObj} />
        </GroupedTasks>

      </ListBody>
    </div>
  )
}

export default ColorScreen;