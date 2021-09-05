

const AddNewTaskButton = ({ toggleModal }) => {
  return (
    <div className="addNewTaskButton">
      <div className="taskCircle">
        <div className="taskIcon" onClick={toggleModal}><i class="fas fa-plus fa-6x"></i></div>
      </div>
      <div className="taskName">Add a task</div>
    </div>
  )
}

export default AddNewTaskButton;