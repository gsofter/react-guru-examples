import React, { useState, useRef, useCallback } from 'react'
import './styles/chapter10/TodoTemplate.scss'
import { MdAdd } from 'react-icons/md'
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md'

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Task schedule</div>
      <div className="content">{children}</div>
    </div>
  )
}

const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState('')
  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = useCallback(
    (e) => {
    console.log('asdf')
      onInsert(text)
      setText('')
      e.preventDefault()
    },
    [text, onInsert],
  )
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="Input things to do"
        value={text}
        onChange={(e) => onChange(e)}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  )
}

const TodoListItem = ({ todo, onRemove }) => {
  const { text, checked } = todo
  const onClickRemove = useCallback(
      e => {
          onRemove()
      }
  )
  return (
    <div className="TodoListItem">
      <div className={`checkbox ${checked ? 'checked' : ''}`}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={onClickRemove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

const TodoList = ({ todos, onRemove}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return <TodoListItem todo={todo} key={todo.id} onRemove={() => onRemove(todo.id)} />
      })}
    </div>
  )
}

const Chapter10 = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Understanding basic concept of React',
      checked: true,
    },
    {
      id: 2,
      text: 'Component  Styling',
      checked: true,
    },
    {
      id: 3,
      text: 'Todoapp make',
      checked: false,
    },
  ])

  const nextId = useRef(4)

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        chceked: false,
      }
      setTodos(todos.concat(todo))
      nextId.current += 1
    },
    [todos],
  )

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    },
    [todos],
  )

  return (
    <div>
      <h1> Chapter10 </h1>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove}/>
      </TodoTemplate>
    </div>
  )
}

export default Chapter10
