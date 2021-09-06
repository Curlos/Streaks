import PresetTask from '../PresetTask'
import { CreateTaskHeader, GroupedTasks } from './PresetTaskHelper'


const GeneralPresetTasks = () => {
  return (
    <div>

      <PresetTask name="Eat a Healthy Meal" icon={<i value="customTask" className="fas fa-carrot fa-2x"></i>}/>
      <PresetTask name="Do Your Homework" icon={<i value="customTask" className="fas fa-highlighter fa-2x"></i>}/>
      <PresetTask name="Walk the Dog" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>}/>

      <PresetTask name="Drink a Smoothie" icon={<i value="customTask" className="fas fa-blender fa-2x"></i>}/>
      <PresetTask name="Take Vitamins" icon={<i value="customTask" className="fas fa-capsules fa-2x"></i>}/>
      <PresetTask name="Take a Photo" icon={<i value="customTask" className="fas fa-camera fa-2x"></i>}/>
    </div>
  )
}

export default GeneralPresetTasks;