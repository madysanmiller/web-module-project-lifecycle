import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    this.props.todos.reduce((acc, td) => {
      if (this.props.displayCompleteds || !td.completed) return acc.concat(
       <Todo
       key={td.id}
       toggleCompleted={this.props.toggleCompleted}
       todo={td}
       />
      )
      return acc
    }, [])
  }

}
