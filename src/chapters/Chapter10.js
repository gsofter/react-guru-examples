import React, { useState, useRef, useCallback, useReducer } from 'react'
import './styles/chapter10/TodoTemplate.scss'
import { MdAdd } from 'react-icons/md'
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md'

import { List } from 'react-virtualized'
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

const TodoListItem = React.memo(({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={`checkbox ${checked ? 'checked' : ''}`}
          onClick={(e) => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={(e) => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  )
})

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index]
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      )
    },
    [onRemove, onToggle, todos],
  )

  return (
    <div className="TodoList">
      <List
        className="TodoList"
        width={512} // total width
        height={513} // total height
        rowCount={todos.length} // total items length
        rowHeight={57} // item height
        rowRenderer={rowRenderer} // item renderer
        list={todos} // array
        style={{ outline: 'none' }} // outline style
      />
    </div>
  )
}

function createBulkTodos(init) {
  const array = []
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `Task ${i}`,
      checked: false,
    })
  }
  return array
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo)
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id)
    case 'TOGGLE':
      console.log('TOGGLE')
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      )
    default:
      return todos
  }
}
const Chapter10 = (props) => {
  const [todos, dispatchTodos] = useReducer(
    todoReducer,
    undefined,
    createBulkTodos,
  )
  // const [todos, setTodos] = useState(createBulkTodos)

  const nextId = useRef(2501)

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      chceked: false,
    }
    // setTodos(todos => todos.concat(todo))
    dispatchTodos({ type: 'INSERT', todo: todo })
    nextId.current += 1
  }, [])

  const onRemove = useCallback((id) => {
    // setTodos(todos => todos.filter((todo) => todo.id !== id))
    dispatchTodos({ type: 'REMOVE', id: id })
  }, [])

  const onToggle = useCallback((id) => {
    // setTodos(todos =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // )
    dispatchTodos({ type: 'TOGGLE', id: id })
  }, [])
  return (
    <div>
      <h1> Chapter10 </h1>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  )
}

export default Chapter10
