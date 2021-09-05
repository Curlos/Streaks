const Task = ({ name, icon, taskSize }) => {
  
  return (
    <span className="task">
      <span className={`taskCircle ${taskSize}`}>
        <span className="taskIcon">{icon}</span>
      </span>
      <span className="taskName">{name}</span>
    </span>
  )
}

export default Task;