import React from 'react'
import ReactPlayer from 'react-player'
import { useState } from 'react'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'

const YoutubeView = () => {
  const [isBranding, setIsBranding] = useState(0)
  const [state, setState] = useState({
    controls: true,
    branding: true,
  })

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked })
    setIsBranding(1)
  }

  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U?controls=1"
        playing
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              modestbranding: 1,
            },
          },
        }}
      />
      <div className="control-row">
        <Typography> Contorls </Typography>
        <Switch
          checked={state.controls}
          onChange={handleChange}
          name="controls"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        {state.controls ? 'TRUE' : 'FALSE'}
      </div>
      <div className="control-row">
        <Typography> Branding </Typography>
        <Switch
          checked={state.branding}
          onChange={handleChange}
          name="branding"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        {state.branding ? 'TRUE' : 'FALSE'}
      </div>
    </div>
  )
}

export default YoutubeView
