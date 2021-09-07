import { GroupedTasks } from '../../../StyledComponents/StyledPresetTask'
import { ListTitle, ListHeader, ListBody, ListDesc } from '../../../StyledComponents/StyledConfirmation'
import PresetTask from '../../PresetTask'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'


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
          <PresetTask name="Specific Task" type="smallForm" />
        </GroupedTasks>

        <GroupedTasks>
          <PresetTask name="Weekly Task" />
        </GroupedTasks>

        <GroupedTasks>
          <PresetTask name="Monthly Task" />
        </GroupedTasks>
      </ListBody>
    </div>
  )
}

export default TaskDaysScreen;