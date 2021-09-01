

const AddNewTaskButton = ({ handleAddNewTask }) => {
  return (
    <div className="addNewTaskButton">
      <div className="taskCircle">
        <div className="taskIcon" onClick={handleAddNewTask}><i class="fas fa-plus fa-6x"></i></div>
      </div>
      <div className="taskName">Add new task</div>
    </div>
  )
}

export default AddNewTaskButton;