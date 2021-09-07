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
          <ListElem name="Specific Task" type="smallForm" />
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Weekly Task" />
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Monthly Task" />
        </GroupedTasks>
      </ListBody>
    </div>
  )
}

export default TaskDaysScreen;