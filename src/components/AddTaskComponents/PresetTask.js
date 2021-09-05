import styled, { css } from 'styled-components'
import Task from '../Task'

const PresetTaskBody = styled.div`
  background-color: #202020;
  

`

const PresetTask = ({ name, icon }) => {

  return (
    <PresetTaskBody>
      <Task name={name} icon={icon} taskSize="addSmallTask" theme="smallForm" type="form"/>
    </PresetTaskBody>
  )
}

export default PresetTask;