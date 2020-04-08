import React from 'react'
import { Button } from '@material-ui/core'
function Square(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      className={`square ${
        props.value !== null ? 'square-' + props.value : ' '
      }`}
      onClick={() => props.handleClick()}
    >
      {props.value}
    </Button>
  )
}

export default Square
