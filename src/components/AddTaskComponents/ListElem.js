import styled from 'styled-components'
import Task from '../Task'
import CheckableTask from '../CheckableTask'

const PresetTaskBody = styled.div`
  background-color: #202020;
  &:hover {
    background-color: rgb(20, 20, 20);;
  }

`

const ListElem = ({ name, icon, presetIcon, clickHandler, buttonType, checked, checkable, currentTask, handleTaskChange, }) => {

  const handleClick = () => {

    if (handleTaskChange) {
      console.log('changing contents')
      handleTaskChange({...currentTask, title: name, icon: icon })
    }
  }

  return (
    <span>
      <PresetTaskBody>
        {checkable ? (
          <CheckableTask name={name} icon={icon} presetIcon={presetIcon} taskSize="addSmallTask" theme="smallForm" type={buttonType || "form"} clickHandler={clickHandler} checked={checked} checkable={checkable} />
        ) : (
          <Task name={name} icon={icon} presetIcon={presetIcon} taskSize="addSmallTask" theme="smallForm" type={buttonType || "form"} clickHandler={handleClick}/>
        )}
      </PresetTaskBody>
    </span>
  )
}

export default ListElem 