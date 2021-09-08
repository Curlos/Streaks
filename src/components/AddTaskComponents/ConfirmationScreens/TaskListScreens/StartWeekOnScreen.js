import { GroupedTasks } from '../../../StyledComponents/StyledPresetTask'
import { ListTitle, ListHeader, ListBody, ListDesc } from '../../../StyledComponents/StyledConfirmation'
import ListElem from '../../ListElem' 
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StartWeekOnScreen = () => {
  return (
    <div>
      <ListHeader>
        <Link to="/">
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ListTitle>Start Week On</ListTitle>
      </ListHeader>

      <ListBody>
        <GroupedTasks />
        <GroupedTasks>
          <ListElem name="Sunday" />
          <ListElem name="Monday" />
          <ListElem name="Tuesday" />
          <ListElem name="Wednesday" />
          <ListElem name="Thursday" />
          <ListElem name="Friday" />
          <ListElem name="Saturday" />
        </GroupedTasks>
      </ListBody>
    </div>
  )
}

export default StartWeekOnScreen;