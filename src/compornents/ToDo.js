// @flow
import React from 'react'
import styles from './ToDo.module.css'
import PropTypes from 'prop-types'

type Props = {
  title: string,
  days: Number,
  key: Number
}

export const ToDo = (props: Props) => {
  return (
    <div key={props.key} className={styles.HelloStyle}>
      Todo, {props.title} days {props.days}
    </div>
  )
}

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired
}
