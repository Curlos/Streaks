import Task from './Task'

const Tasks = () => {
  return (
    <div className="tasksContainer">
      <div className="tasks">
        <Task name="Focus for 6 hours" icon={<i class="far fa-clock fa-6x"></i>}/>
    
      </div>
    </div>
  )
}

export default Tasks;