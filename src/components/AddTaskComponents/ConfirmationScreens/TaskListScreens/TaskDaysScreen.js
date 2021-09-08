import React, { useState } from 'react'
import { GroupedTasks } from '../../../StyledComponents/StyledPresetTask'
import { ListTitle, ListHeader, ListBody, ListDesc } from '../../../StyledComponents/StyledConfirmation'
import ListElem from '../../ListElem' 
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const TaskDaysScreen = () => {

  return (
    <div>
      <ListHeader>
        <Link to="/">
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ListTitle>Task Days</ListTitle>
      </ListHeader>

      <ListBody>
        <ListDesc>
          Determines the period of time a single completion is measured over.
        </ListDesc>
        <GroupedTasks>
          <ListElem name="Specific days of the week" type="smallForm"/>
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Number of days per week" />
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Number of days per fortnight" />
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Number of days per month" />
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Every 2 Days" />
        </GroupedTasks>
      </ListBody>
    </div>
  )
}

export default TaskDaysScreen;