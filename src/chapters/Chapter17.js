import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from './redux/counter'
import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
  const number = useSelector((state) => state.number)
  const dispatch = useDispatch()
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch])
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])
  return (
    <div>
      <h1> {number}</h1>
      <button onClick={onIncrease}> +1 </button>
      <button onClick={onDecrease}> -1 </button>
    </div>
  )
}

const Chapter17 = () => {
  return (
    <div>
      <h1> Chapter17 - Using Redux</h1>
      <Counter>asdf</Counter>
    </div>
  )
}

export default Chapter17
