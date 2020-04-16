import React from 'react'

// custom compoent
const Info = () => {
  const [name, setName] = React.useState('')
  const [nickname, setNickname] = React.useState('')

  // useEffect
  // mount + state change
  React.useEffect(() => {
    console.log('Render')

    // cleanup function
    return () => {
      console.log(
        '%c Cleanup function',
        'background-color: black; color : white;',
      )
    }
  })

  // only when componet mount, consider second parameter
  React.useEffect(() => {
    console.log('%c Only Mount Hook', 'color: green')

    // cleanup function when only dismounted
    return () => {
      console.log(
        '%c Only Dismount Cleanup function',
        'background-color: black; color : white;',
      )
    }
  }, [])

  //  when only name state change
  React.useEffect(() => {
    console.log('%c Name State Changed', 'color: blue')
  }, [name])

  // when only nickname state change
  React.useEffect(() => {
    console.log('%c NickName State Changed', 'color: brown')
  }, [nickname])

  return (
    <div>
      <h2> React custom component</h2>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <div>
        <span style={{ color: 'blue' }}>name : {name} </span>
        <br />
        <span style={{ color: 'brown' }}>nickname : {nickname} </span>
      </div>
    </div>
  )
}

// useReducer
const Counter = () => {
  const reducer = (state, action) => {
    switch (action.name) {
      case 'INC':
        return { value: state.value + 1 }
      case 'DEC':
        return { value: state.value - 1 }
      default:
        return state
    }
  }

  const [state, dispatch] = React.useReducer(reducer, { value: 0 })
  return (
    <div>
      <h3> {state.value}</h3>
      <button name="INC" onClick={(e) => dispatch(e.target)}>
        +1
      </button>
      <button name="DEC" onClick={(e) => dispatch(e.target)}>
        -1
      </button>
    </div>
  )
}

const Average = () => {
  const [list, setList] = React.useState([])
  const [number, setNumber] = React.useState('')

  const onChange = (e) => {
    setNumber(parseInt(e.target.value))
  }

  const onInsert = () => {
    setList([...list, number])
    setNumber('')
  }

  const getAverage = () => {
    console.log('Average func called!')
    const sum = list.reduce((total, value) => {
      total += value
      return total
    }, 0)
    return list.length !== 0 ? sum / list.length : ''
  }

  const avg = React.useMemo(() => getAverage(), [list])
  const numberlist = list.map((item, index) => {
    return <li key={index}> {item}</li>
  })

  return (
    <div>
      <h2> React useMemo</h2>
      <input
        name="number"
        value={number}
        onChange={(e) => {
          onChange(e)
        }}
      />
      <button onClick={() => onInsert()}>Add</button>
      <strong> {avg}</strong>
      {numberlist}
    </div>
  )
}

const colors = {
  red: '#9c0312',
  yellow: '#8c8f03',
  blue: '#03619c',
}
export const ColorContext = React.createContext(colors)
const ContextExample = ({ props, children }) => {
  return (
    <ColorContext.Provider value={colors}> {children}</ColorContext.Provider>
  )
}

const ContextA = () => {
  const colors = React.useContext(ColorContext)
  return (
    <div>
      {console.log(colors)}
      <h3 style={{ backgroundColor: colors.red }}> This is Context A </h3>
    </div>
  )
}

const Chapter8 = () => {
  // let's define visible
  const [visible, setVisible] = React.useState(true)
  return (
    <div>
      <h1> React Hook Example - useEffect </h1>
      <button
        onClick={() => {
          setVisible(!visible)
        }}
      >
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && <Info />}
      <Counter />
      <Average />
      <ContextExample>
        <h2> React useContext Example</h2>
        <ContextA />
      </ContextExample>
    </div>
  )
}

export default Chapter8
