// @flow
import React from 'react'
import styles from './Hello.module.css'
import PropTypes from 'prop-types'

type Props = {
  action: Function
}

export const InputTodoTitle = (props: Props) => {
  return (
    <div>
      <input type="text" value={props.title} onChange={props.action} />
      <Input name={this.state.name} action={inputNameAction} />
      <button onClick={() => this.setState({ age: this.state.age + 1 })}>加算ボタン</button>
      <button onClick={() => this.setState({ age: this.state.age - 1 })}>減算ボタン</button>
    </div>
  )
}
