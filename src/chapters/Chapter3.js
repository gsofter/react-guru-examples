import React from 'react'
import PropTypes from 'prop-types'
function BlackDog() {
  this.name = 'White'
  return {
    name: 'Black',
    bark: function () {
      console.log(this.name + ': kerng, kerng')
    },
  }
}

function WhiteDog() {
  this.name = 'White'
  return {
    name: 'Black',
    bark: () => {
      console.log(this.name + ': kerng, kerng!')
    },
  }
}

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      {' '}
      Hello! My Name is {name}
      <br />
      Children Value {children}
      <br />
      My favoriteNumber {favoriteNumber}
    </div>
  )
}
MyComponent.defaultProps = {
  name: 'asdfd',
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
}

class Counter extends React.Component {
  state = {
    number: 0,
    fixedNumber: 0,
  }
  render() {
    const { number, fixedNumber } = this.state
    return (
      <div>
        <h1> {number} </h1>
        <h2> fixedNumber: {fixedNumber} </h2>
        <button
          onClick={() => {
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log('setState has been called!')
                console.log(this.state)
              }
            )
          }}
        >
          +1
        </button>
      </div>
    )
  }
}

const Say = () => {
  const [message, setMessage] = React.useState('')
  const [color, setColor] = React.useState('black')
  const onClickEnter = () => setMessage('Hello, Welcome!')
  const onClickLeave = () => setMessage('Hello, Good Bye!')

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1 style={{ color }}> {message} </h1>
      <button
        style={{ backgroundColor: 'red' }}
        onClick={() => setColor('red')}
      >
        Red
      </button>
      <button
        style={{ backgroundColor: 'green' }}
        onClick={() => setColor('green')}
      >
        Green
      </button>
      <button
        style={{ backgroundColor: 'blue' }}
        onClick={() => setColor('blue')}
      >
        Blue
      </button>
      <button
        style={{ backgroundColor: 'yellow' }}
        onClick={() => setColor('yellow')}
      >
        Yellow
      </button>
      
    </div>
  )
}

export default function Chapter3(props) {
  const blackDog = new BlackDog()
  blackDog.bark()

  const whiteDog = new WhiteDog()
  whiteDog.bark()

  const triple = (value) => value * 3
  return (
    <React.Fragment>
      <h1> Chapter 3 - Components </h1>
      <p> This is Chapter3 </p>
      <p> 3 * 3 = {triple(3)} </p>
      <MyComponent name="React Component" favoriteNumber={12}>
        React
      </MyComponent>

      <Counter />

      <Say />
    </React.Fragment>
  )
}
