import styled, { css } from 'styled-components'
import Task from '../Task'

const PresetTaskBody = styled.div`
  background-color: #202020;
  &:hover {
    background-color: rgb(20, 20, 20);;
  }

`

const PresetTask = ({ name, icon, presetIcon, displayType, handleNewDisplay, buttonType }) => {

  const handleClick = () => {
    console.log('clicked preset')

    if (handleNewDisplay) {
      handleNewDisplay(name, icon, displayType)
    }
  }

  return (
    <PresetTaskBody>
      <Task name={name} icon={icon} presetIcon={presetIcon} taskSize="addSmallTask" theme="smallForm" type={buttonType || "form"} clickHandler={handleClick}/>
    </PresetTaskBody>
  )
}

export default PresetTask;