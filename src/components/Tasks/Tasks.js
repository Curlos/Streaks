import React, { useState } from 'react'
import styled from 'styled-components'
import Task from './Task'
import AddTaskButton from './AddTaskButton'

const TasksContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin: 40px;
`

const Tasks = ({ chosenColor, showSettings, toggleModal, taskObjs, toggleCompleteTask, handleEditTask }) => {
  
  const [defaultDropdown, setDefaultDropdown] = useState(false)

  const sampleTask = {
    title: 'ADD A TASK'
  }

  const handleDropdownToggle = () => {

    setDefaultDropdown(true)
  }

  return (
    <TasksContainer>
      {Object.keys(taskObjs).map((id) => {
        const task = taskObjs[id]

        return (
          <Task key={id} iconClassName={task.icon} chosenColor={task.color.color} showSettings={showSettings} taskObj={task} toggleCompleteTask={toggleCompleteTask} handleEditTask={handleEditTask} toggleModal={toggleModal} defaultDropdown={defaultDropdown} handleDropdownToggle={handleDropdownToggle} />
        )
      })}

      {showSettings ? (
        <AddTaskButton taskObject={sampleTask} iconClassName="fas fa-plus" chosenColor={chosenColor} toggleModal={toggleModal}/>
      ): null}

    </TasksContainer>
  )
}

export default Tasks;