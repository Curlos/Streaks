
import { GroupedTasks } from '../../../StyledComponents/StyledPresetTask'
import { ListTitle, ListHeader, ListBody, ListDesc } from '../../../StyledComponents/StyledConfirmation'
import ListElem from '../../ListElem' 
import { Link } from 'react-router-dom'
import Task from '../../../Task'
import styled from 'styled-components'

const GroupedTasksLarge = styled(GroupedTasks)`
  margin-bottom: 45px;
`

const MeasurementDurationScreen = () => {
  return (
    <div>
      <ListHeader>
        <Link to="/">
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ListTitle>Measurement Duration</ListTitle>
      </ListHeader>

      <ListBody>
        <ListDesc>Determines the period of time a single completion is measured over.</ListDesc>
        <GroupedTasksLarge>
          <ListElem name="Daily Task" icon={<i value="customTask" className="fas fa-calendar-day fa-2x"></i>} />
        </GroupedTasksLarge>

        <GroupedTasksLarge>
          <ListElem name="Weekly Task" icon={<i value="customTask" className="fas fa-calendar-week fa-2x"></i>} />
        </GroupedTasksLarge>

        <GroupedTasksLarge>
          <ListElem name="Monthly Task" icon={<i value="customTask" className="fas fa-calendar fa-2x"></i>} />
        </GroupedTasksLarge>
      </ListBody>
    </div>
  )
}

export default MeasurementDurationScreen;