import styled from 'styled-components'
import ListElem from '../ListElem' 
import { CreateTaskHeader, GroupedTasks } from '../../StyledComponents/StyledPresetTask'

const HealthIcon = <i value="customTask" className="fas fa-heart fa-xs"></i>

const HealthPresetTasks = ({ handleNewDisplay }) => {
  return (
    <div>
      <CreateTaskHeader>CREATE A HEALTH TASK:</CreateTaskHeader>

      <ListElem name="Walk or Run" icon={<i value="customTask" className="fas fa-walking fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>ListElem ListElem 
      <ListElem name="Stand Minutes" icon={<i value="customTask" className="fas fa-shoe-prints fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>
      <ListElem name="Cycle" icon={<i value="customTask" className="fas fa-biking fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>

      <ListElem name="Swim" icon={<i value="customTask" className="fas fa-swimmer fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>ListElem ListElem 
      <ListElem name="Mindful Minutes" icon={<i value="customTask" className="fas fa-wind fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>
      <ListElem name="Climb Flights" icon={<i value="customTask" className="fas fa-running fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>
    </div>
  )
}

export default HealthPresetTasks;