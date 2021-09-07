import styled, { css } from 'styled-components'

export const CreateTaskHeader = styled.div`
  margin: 20px;
`

export const GroupedTasks = styled.div`
  margin-bottom: 25px;
`

export const TaskInput = styled.input.attrs({ 
  type: 'text',
  value: 'Submit'
})`
  background: #00aec9;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`