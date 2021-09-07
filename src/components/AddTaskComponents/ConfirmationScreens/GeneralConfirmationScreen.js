import React, { useState } from 'react'
import PresetTask from '../PresetTask'
import { GroupedTasks } from '../../StyledComponents/StyledPresetTask'
import { ConfirmTaskTitle, ConfirmTaskHeader, ConfirmTaskBody } from '../../StyledComponents/StyledConfirmTask'
import Task from '../../Task'
import { Link } from 'react-router-dom'

const ConfirmationScreen = ({ title, icon, handleNewDisplay}) => {

  return (
    <div>
      <ConfirmTaskHeader>
        <span className="close">&times;</span>
        <ConfirmTaskTitle>Confirm Task</ConfirmTaskTitle>
        <Task name={title} icon={icon} theme="mediumForm"/>
      </ConfirmTaskHeader>

      <ConfirmTaskBody>
        <div>Title:</div>
        <GroupedTasks>
          <Link to="/measurement-duration">
            <PresetTask name="Daily Task" icon={<i value="customTask" className="fas fa-calendar-day fa-2x"></i>} displayType="Daily Task" />
          </Link>

          <Link to="/task-days">
            <PresetTask name="Task Days" icon={<i value="customTask" className="fas fa-calendar fa-2x"></i>} displayType="Task Days" />
          </Link>

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