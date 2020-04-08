import React from 'react'

class ClassComponent extends React.Component {
  

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    //this.handleChange = this.handleChange.bind(this)
    this.state = { message: '' }
  }

  handleChange(e) {
    console.log(e.target) 
    this.setState({ [e.target.name] : e.target.value })
  }

  handleClick() {
    alert(this.state.message)
    this.setState({ message: '', username: '' })
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.handleClick()
    }
  }
  handleComposition = (e) =>{
    alert('Composition')
  }
  render() {
    const { message, username } = this.state
    return (
      <React.Fragment>
        <h2> Class Component </h2>
        <div>
          <input
            type="text"
            name="message"
            placeholder="Input anything"
            value={message}
            onChange={(e) => this.handleChange(e)}
            onKeyPress={this.handleKey}
            onCompositionStart = {this.handleComposition}
          />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <button onClick={() => this.handleClick()}>Confirm</button>
          <h3> {message} </h3>

          <h3> {username} </h3>
        </div>
      </React.Fragment>
    )
  }
}

const FComponent = () => {
//  const [username, setUsername] = React.useState('')
//  const [message, setMessage] = React.useState('')
  const [form, setForm] = React.useState({
    message: '',
    username: ''
  })
  const {username, message} = form;
  // const onChangeUsername = (e) => setUsername(e.target.value)
  // const onChangeMessage = (e) => setMessage(e.target.value)
  const onChange = (e) => {
      console.log(e)
      const nextForm = {
          ...form,
          [e.target.name] : e.target.value
      }
      console.log(nextForm)
      setForm(nextForm)
  }
  const onClick = () => {
    alert(username + ' : ' + message)
    // setForm({
    //     username: '',
    //     message: ''
    // })
  }
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick()
    }
  }
  return (
    <div>
      <h2> Functional Component </h2>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <input
        type="text"
        name="message"
        placeholder="Input any message"
        value={message}
        onChange={onChange}
      />
      <button onClick={onClick}> Confirm</button>
      <h3> {username}</h3>
      <h3> {message}</h3>
    </div>
  )
}
const Chapter4 = () => {
  return (
    <div>
      <h1> Chapter4 - Event Handling</h1>
      <ClassComponent />
      <br />
      <FComponent />
    </div>
  )
}

export default Chapter4
