import React from 'react'
import './style.css'
const styles = {
  success: {
    backgroundColor: 'lightgreen',
  },
  failure: {
    backgroundColor: 'lightcoral',
  },
}

class ValidationExample extends React.Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  }
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '000',
    })
    this.input.focus()
  }

  render() {
    return (
      <div>
        <h2> ValidationExample </h2>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}> Confirm</button>
      </div>
    )
  }
}

class ScrollBox extends React.Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box
    this.box.scrollTop = scrollHeight - clientHeight
  }
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    }

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    }
    return (
      <React.Fragment>
        <h2> ScrollBox </h2>
        <div
          style={style}
          ref={(ref) => {
            this.box = ref
          }}
        >
          <div style={innerStyle}></div>
        </div>
      </React.Fragment>
    )
  }
}
class Chapter5 extends React.Component {
  render() {
    return (
      <div>
        <h1> Chapter5 - DOM Naming </h1>
        <ValidationExample />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button
          onClick={() => {
            this.scrollBox.scrollToBottom()
          }}
        >
          To Bottom
        </button>
      </div>
    )
  }
}

export default Chapter5
