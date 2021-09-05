import './addTaskForm.css'
import Task from '../Task'
import FormTasks from './FormTasks'

const NewTaskForm = ({ toggleModal }) => {
  
  return (
    <div className="newTaskForm">
      form
      <div id="myModal" className="modal">

        <div className="modal-content">
          <div className="addTaskHeader">
            <span className="close" onClick={toggleModal}>&times;</span>
            <p className="addTaskTitle">Add Task</p>
          </div>

          <FormTasks />
          
        </div>

      </div>
    </div>
  )
}

export default NewTaskForm;