import React, { useState } from 'react'
import axios from 'axios'
const Chapter14 = () => {
  const [data, setData] = useState(null)
  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      setData(res.data)
    })
  }

  return (
    <div>
      <h1> Chapter 14 - External API Sync</h1>
      <button onClick={onClick}> Load JSON </button>
      <div>
        {data && <textarea value={JSON.stringify(data, null, 2)} readOnly/> }
      </div>
    </div>
  )
}

export default Chapter14
