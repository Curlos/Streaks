import styled, { css } from 'styled-components'
import PresetTask from '../PresetTask'
import { CreateTaskHeader, GroupedTasks } from '../../StyledComponents/StyledPresetTask'

const HealthIcon = <i value="customTask" className="fas fa-heart fa-xs"></i>

const HealthPresetTasks = ({ handleNewDisplay }) => {
  return (
    <div>
      <CreateTaskHeader>CREATE A HEALTH TASK:</CreateTaskHeader>

      <PresetTask name="Walk or Run" icon={<i value="customTask" className="fas fa-walking fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>
      <PresetTask name="Stand Minutes" icon={<i value="customTask" className="fas fa-shoe-prints fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>
      <PresetTask name="Cycle" icon={<i value="customTask" className="fas fa-biking fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>

      <PresetTask name="Swim" icon={<i value="customTask" className="fas fa-swimmer fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>
      <PresetTask name="Mindful Minutes" icon={<i value="customTask" className="fas fa-wind fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>
      <PresetTask name="Climb Flights" icon={<i value="customTask" className="fas fa-running fa-2x"></i>} presetIcon={HealthIcon} handleNewDisplay={handleNewDisplay}/>
    </div>
  )
}

export default HealthPresetTasks;