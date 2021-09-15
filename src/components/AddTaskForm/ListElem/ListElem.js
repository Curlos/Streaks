import styled from 'styled-components'
import ListElemWithIcon from './ListElemWithIcon'

const ListElemBody = styled.div`
  background-color: #202020;
  &:hover {
    background-color: rgb(20, 20, 20);
  }
`

const ListElem = ({ title, iconClassName, currentTask, handleTaskChange, automaticColor}) => {

  return (
    <span>
      <ListElemBody>
        <ListElemWithIcon title={title} iconClassName={iconClassName} automaticColor={automaticColor}/>
      </ListElemBody>
    </span>
  )
}

export default ListElem 