import PresetTask from '../PresetTask'
import { CreateTaskHeader } from './PresetTaskHelper'

const GeneralPresetTasks = ({ handleNewDisplay }) => {
  return (
    <div>
      <CreateTaskHeader>CREATE YOUR OWN:</CreateTaskHeader>

      <PresetTask name="Eat a Healthy Meal" icon={<i value="customTask" className="fas fa-carrot fa-2x" handleNewDisplay={handleNewDisplay}></i>}/>
      <PresetTask name="Do Your Homework" icon={<i value="customTask" className="fas fa-highlighter fa-2x"></i>} handleNewDisplay={handleNewDisplay}/>
      <PresetTask name="Walk the Dog" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} handleNewDisplay={handleNewDisplay}/>

      <PresetTask name="Drink a Smoothie" icon={<i value="customTask" className="fas fa-blender fa-2x"></i>} handleNewDisplay={handleNewDisplay}/>
      <PresetTask name="Take Vitamins" icon={<i value="customTask" className="fas fa-capsules fa-2x"></i>} handleNewDisplay={handleNewDisplay}/>
      <PresetTask name="Take a Photo" icon={<i value="customTask" className="fas fa-camera fa-2x"></i>} handleNewDisplay={handleNewDisplay}/>
    </div>
  )
}

export default GeneralPresetTasks;