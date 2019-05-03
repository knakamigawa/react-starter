// @flow
import React from 'react'

import styles from './ToDo.module.css'
import PropTypes from 'prop-types'
const { useState, useCallback } = React

type Props = {
  action: Function
}

export const InputToDo = (props: Props) => {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('')
  const inputTitle = useCallback(event => setTitle(event.target.value), [])
  const countUp = useCallback(() => setCount(prev => prev + 1), [])
  const countDown = useCallback(() => setCount(prev => prev - 1), [])
  const save = () => {
    props.action(title, count)
  }

  return (
    <div>
      title:{title} days:{count}
      <input type="text" value={title} onChange={inputTitle} />
      <button onClick={countUp}>加算ボタン</button>
      <button onClick={countDown}>減算ボタン</button>
      <button onClick={save}>保存</button>
    </div>
  )
}
