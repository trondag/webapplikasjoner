import React, { Component} from "react";

class TodoCard extends Component {
  render() {
    return <div class="todo-card">
      <h1 class="todo-title">{this.props.title}</h1>
      <p class="todo-author">{this.props.author}</p>
      <p class="todo-description">{this.props.description}</p>
      <button class="todo-delete">Delete</button>
      <button class="todo-complete">Complete</button>
  </div>
  }
}

export default TodoCard