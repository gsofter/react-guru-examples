import React from 'react'

const IterationSampe = () => {
  const [names, setNames] = React.useState([
    { id: 1, text: 'aaa' },
    { id: 2, text: 'bbb' },
    { id: 3, text: 'ccc' },
    { id: 4, text: 'ddd' },
    { id: 5, text: 'eee' },
    { id: 6, text: 'fff' },
  ])

  const [inputText, setInputText] = React.useState('')
  const [nextId, setNextId] = React.useState(5)
  const handleRemoveItem = (id) => {
    const nextNames = names.filter((name) => name.id !== id)
    setNames(nextNames)
  }
  const namesList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => {
        handleRemoveItem(name.id)
      }}
    >
      {name.text}
    </li>
  ))
  const handleChange = (e) => setInputText(e.target.value)
  const handleAdd = (e) => {
    const nextNames = [
      ...names,
      {
        id: nextId,
        text: inputText,
      },
    ]
    setNextId(nextId + 1)
    setNames(nextNames)
    setInputText('')
  }
  return (
    <div>
      <ul>{namesList}</ul>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleAdd}> Add </button>
    </div>
  )
}

const Chapter6 = () => {
  return (
    <div>
      <h1> Chapter6 - Components Reputation </h1>
      <IterationSampe />
    </div>
  )
}

export default Chapter6
