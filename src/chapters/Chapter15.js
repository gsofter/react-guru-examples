import React, { createContext, useState } from 'react'
const ColorContext = createContext({
  state: { color: 'red' },
  action: { setColor: '' },
})

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('red')

  const value = {
    state: { color },
    action: { setColor },
  }

  return (
    <ColorContext.Provider value={value}> {children} </ColorContext.Provider>
  )
}

// const { Consumer: ColorConsumer } = ColorContext
// const { Provider: ColorProvider } = ColorContext
const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {({ state }) => (
        <div
          style={{
            backgroundColor: state.color,
            width: '200px',
            height: '200px',
          }}
        >
          Box
        </div>
      )}
    </ColorContext.Consumer>
  )
}

const ColorSelection = () => {
  const colors = ['red', 'green', 'blue', 'white']

  return (
    <ColorContext.Consumer>
      {({ state, action }) => {
        return colors.map((color) => (
          <div
            style={{ backgroundColor: color, width: '50px', height: '50px' }}
            onClick={() => action.setColor(color)}
          ></div>
        ))
      }}
    </ColorContext.Consumer>
  )
}
const Chapter15 = () => {
  return (
    <div>
      <h1> Chapter 15 - Context API</h1>

      <ColorProvider>
        {/* <ColorContext.Provider value={{ state: { color: 'blue' } }}> */}
        <ColorSelection />
        <ColorBox />
        {/* </ColorContext.Provider> */}
      </ColorProvider>
    </div>
  )
}

export default Chapter15
