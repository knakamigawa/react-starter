import React from 'react'
import { Hello } from '../src/compornents/ToDo'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import { storiesOf } from '@storybook/react'

const stories = storiesOf('Sample', module)
stories.addDecorator(withKnobs)

stories.add('show hello', name => {
  const inputName = text('Name', 'りねっと')

  return <Hello name={inputName} />
})
