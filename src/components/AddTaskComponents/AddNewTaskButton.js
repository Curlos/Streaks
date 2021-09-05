

const AddNewTaskButton = ({ toggleModal }) => {
  return (
    <div className="addNewTaskButton">
      <div className="taskCircle">
        <div className="taskIcon" onClick={toggleModal}><i className="fas fa-plus fa-6x"></i></div>
      </div>
      <div className="taskName">Add a task</div>
    </div>
  )
}

export default AddNewTaskButton;