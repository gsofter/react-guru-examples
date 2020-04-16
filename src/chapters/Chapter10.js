import React from 'react'
import './styles/chapter10/TodoTemplate.scss'
import { MdAdd } from 'react-icons/md'
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Task schedule</div>
      <div className="content">{children}</div>
    </div>
  )
}

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="Input things to do" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  )
}
const Chapter10 = (props) => {
  return (
    <div>
      <h1> Chapter10 </h1>
      <TodoTemplate>
        <TodoInsert />
      </TodoTemplate>
    </div>
  )
}

export default Chapter10
