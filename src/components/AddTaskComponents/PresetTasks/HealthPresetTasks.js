import styled, { css } from 'styled-components'
import PresetTask from '../PresetTask'
import { CreateTaskHeader, GroupedTasks } from './PresetTaskHelper'


const HealthPresetTasks = () => {
  return (
    <div>
      <CreateTaskHeader>CREATE A HEALTH TASK:</CreateTaskHeader>

      <PresetTask name="Walk or Run" icon={<i value="customTask" className="fas fa-walking fa-2x"></i>}/>
      <PresetTask name="Stand Minutes" icon={<i value="customTask" className="fas fa-shoe-prints fa-2x"></i>}/>
      <PresetTask name="Cycle" icon={<i value="customTask" className="fas fa-biking fa-2x"></i>}/>

      <PresetTask name="Swim" icon={<i value="customTask" className="fas fa-swimmer fa-2x"></i>}/>
      <PresetTask name="Mindful Minutes" icon={<i value="customTask" className="fas fa-wind fa-2x"></i>}/>
      <PresetTask name="Climb Flights" icon={<i value="customTask" className="fas fa-running fa-2x"></i>}/>
    </div>
  )
}

export default HealthPresetTasks;