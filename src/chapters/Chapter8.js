import React from 'react'

const infoReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  }
}


const Info = () => {
  React.useEffect(() => {
    console.log('Rendering Completed')
  })

  const [state, dispatch] = React.useReducer(infoReducer, {
    name: '',
    nickname: '',
  })
  return (
    <div>
        <h2> Using useReducer </h2>
      <div>
        <input
          value={state.name}
          name="name"
          onChange={(e) => dispatch(e.target)}
        />
        <input
          value={state.nickname}
          name="nickname"
          onChange={(e) => dispatch(e.target)}
        />
      </div>
      <div>
        <p>
          <b> Name </b> {state.name}
        </p>
        <p>
          <b> Nickname </b> {state.nickname}
        </p>
      </div>
    </div>
  )
}

function reducer(state, action) {
  switch (action.type) {
    case 'INC':
      return { value: state.value + 1 }
    case 'DEC':
      return { value: state.value - 1 }
    default:
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = React.useReducer(reducer, { value: 0 })
  return (
    <div>
      <p>
        Current Value is <b> {state.value} </b>
      </p>
      <button onClick={() => dispatch({ type: 'INC' })}> INC </button>
      <button onClick={() => dispatch({ type: 'DEC' })}> DEC </button>
    </div>
  )
}

const Average = () => {
  const [list, setList] = React.useState([])
  const [number, setNumber] = React.useState('')

  const onChange = React.useCallback((e) => {
    setNumber(parseInt(e.target.value))
  }, [])
  
  const onInsert = React.useCallback((e) => {
    const nextList = [...list, number]
    setList(nextList)
  }, [number, list])

  const getAverage = (list) => {
      console.log("Average called")
      if(list.length === 0) return 0
      const sum = list.reduce((total, item) => (total + item))
      return sum/list.length
  }

  const avg = React.useMemo(() => getAverage(list), [list])
  return (
    <div>
        <h2> Using Memo </h2>
      {list.map((value, index) => (
        <li key={index}> {value} </li>
      ))}
      <p> Average : {avg}</p>
      <input onChange={onChange} />
      <button onClick={onInsert}> onInsert</button>
    </div>
  )
}

const Chapter8 = () => {
  return (
    <div>
      <h1> React - HOOK </h1>
      <Info />
      <Counter />
      <Average />
    </div>
  )
}

export default Chapter8
