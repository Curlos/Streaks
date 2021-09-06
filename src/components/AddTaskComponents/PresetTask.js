import styled, { css } from 'styled-components'
import Task from '../Task'

const PresetTaskBody = styled.div`
  background-color: #202020;
  &:hover {
    background-color: rgb(20, 20, 20);;
  }

`

const PresetTask = ({ name, icon, presetIcon, handleNewDisplay }) => {

  const handleClick = () => {
    console.log('clicked preset')
    // handleNewDisplay()
  }

  return (
    <PresetTaskBody>
      <Task name={name} icon={icon} presetIcon={presetIcon} taskSize="addSmallTask" theme="smallForm" type="form" clickHandler={handleClick}/>
    </PresetTaskBody>
  )
}

export default PresetTask;