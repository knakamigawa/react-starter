// @flow
import React from 'react'
import './App.css'
import { ToDo } from './compornents/ToDo'
import { InputToDo } from './compornents/InputToDo'

type Props = {
  name: string
}

class App extends React.Component {
  constructor(props: Props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  render() {
    const save = (title, days) => {
      const newTodos = this.state.todos
      newTodos.push({ title: title, days: days })
      this.setState({ todos: newTodos })
    }

    const todoViews = this.state.todos.map((todo, idx) => {
      return <ToDo title={todo.title} days={todo.days} key={idx} />
    })

    return (
      <div className="App">
        <InputToDo action={save} />
        {todoViews}
      </div>
    )
  }
}

export default App
