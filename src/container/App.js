// @flow
import React from 'react'
import './App.css'
import { ToDo } from '../compornents/ToDo'
import { InputToDo } from '../compornents/InputToDo'

type Props = {
  name: string
}

class App extends React.Component {
  constructor(props: Props) {
    super(props)
    this.state = {
      todoList: []
    }
  }

  render() {
    const save = (title, days) => {
      const newTodoList = this.state.todoList
      newTodoList.push({ title: title, days: days })
      this.setState({ todoList: newTodoList })
    }

    const todoViews = this.state.todoList.map((todo, idx) => {
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
