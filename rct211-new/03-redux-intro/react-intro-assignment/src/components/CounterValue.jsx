import React from 'react'
import { store } from '../Redux/store'

const CounterValue = () => {
    let {count} = store.getState()
  return (
    <div>{count}</div>
  )
}

export default CounterValue