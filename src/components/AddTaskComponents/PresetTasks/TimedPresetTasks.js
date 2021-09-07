import PresetTask from '../PresetTask'
import { CreateTaskHeader, GroupedTasks, TaskInput } from '../../StyledComponents/StyledPresetTask'

const TimerIcon = <i value="customTask" className="fas fa-book fa-xs"></i>

const TimedPresetTasks = ({ handleNewDisplay }) => {
  return (
    <div>
      <CreateTaskHeader>CREATE YOUR OWN:</CreateTaskHeader>

      <TaskInput />

      <GroupedTasks>
        <PresetTask name="Read for 10 minutes" icon={<i value="customTask" className="fas fa-book fa-2x"></i>} presetIcon={TimerIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Learn a Language" icon={<i value="customTask" className="fas fa-language fa-2x"></i>} presetIcon={TimerIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Practice Instrument" icon={<i value="customTask" className="fas fa-guitar fa-2x"></i>} presetIcon={TimerIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Tidy Up" icon={<i value="customTask" className="fas fa-broom fa-2x"></i>} presetIcon={TimerIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Pomodoro" icon={<i value="customTask" className="fas fa-hourglass-start fa-2x"></i>} presetIcon={TimerIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks> 

      <GroupedTasks>
        <PresetTask name="Decrease Screen Time" icon={<i value="customTask" className="fas fa-mobile-alt fa-2x"></i>} presetIcon={TimerIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Mindful Minutes" icon={<i value="customTask" className="fas fa-wind fa-2x"></i>} presetIcon={TimerIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Brush Your Teeth" icon={<i value="customTask" className="fas fa-tooth fa-2x"></i>} presetIcon={TimerIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

    </div>
  )
}

export default TimedPresetTasks;