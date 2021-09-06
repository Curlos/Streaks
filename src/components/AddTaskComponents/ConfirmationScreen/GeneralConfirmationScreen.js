import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PresetTask from '../PresetTask'
import { CreateTaskHeader, GroupedTasks } from '../PresetTasks/PresetTaskHelper'
import Task from '../../Task'

const ConfirmTaskTitle = styled.div`
  text-align: center;
  font-size: 25px;
`

const ConfirmTaskHeader = styled.div`
  background-color: #202020;
  padding: 15px;
`

const ConfirmTaskContainer = styled.div`
  
`

const ConfirmTaskBody = styled.div`
  background-color: black;
`

const ConfirmationScreen = ({ title, icon, handleNewDisplay}) => {

  return (
    <div>
      <ConfirmTaskHeader>
        <span className="close">&times;</span>
        <ConfirmTaskTitle>Confirm Task</ConfirmTaskTitle>
        <ConfirmTaskContainer>
          <Task name={title} icon={icon} theme="mediumForm"/>
        </ConfirmTaskContainer>
      </ConfirmTaskHeader>

      <ConfirmTaskBody>
        <div>Title:</div>
        <GroupedTasks>
          <PresetTask name="Daily Task" icon={<i value="customTask" className="fas fa-calendar-day fa-2x"></i>} displayType="Daily Task" />
          <PresetTask name="Task Days" icon={<i value="customTask" className="fas fa-calendar fa-2x"></i>} displayType="Task Days" />
          <PresetTask name="1 time/day" icon={<i value="customTask" className="far fa-circle fa-2x"></i>} buttonType="plusMinusForm" displayType="Frequency"/>
        </GroupedTasks>

        <GroupedTasks>
          <PresetTask name="Color" icon={<i value="customTask" className="fas fa-palette fa-2x"></i>} />
        </GroupedTasks>
      </ConfirmTaskBody>
    </div>
  )
}

export default ConfirmationScreen;