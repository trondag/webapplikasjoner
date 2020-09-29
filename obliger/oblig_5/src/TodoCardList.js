import React, { Component } from "react";
import { connect } from 'react-redux'
import TodoCard from './TodoCard'

class TodoCardList extends Component {

  createTodoCards(item) {
    let key = (Math.floor(Math.random() * 10000)).toString()
    return <TodoCard key={key} title={item.title} description={item.description} author={item.author}/>
  }

  render() {
    let todoCards
    const rawTodos = this.props.todos.filter(todo => { return !todo.completed})
    console.log(rawTodos)
    if (rawTodos.length === 0){
      return <h1>Jippi! Ingen todos i dag!</h1>
    } else {
    todoCards = rawTodos.map(this.createTodoCards)
    return <div className="card-container">
      {todoCards}
  </div>
    }
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps, null)(TodoCardList)