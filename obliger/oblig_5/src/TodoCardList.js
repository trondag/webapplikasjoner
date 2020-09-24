import React, { Component } from "react";
import { connect } from 'react-redux'
import TodoCard from './TodoCard'

class TodoCardList extends Component {

  createTodoCards(item) {
    let key = (Math.floor(Math.random() * 10000)).toString()
    return <TodoCard key={key} title={item.title} description={item.description} author={item.author}/>
  }

  render() {

    const todoCards = this.props.todos.map(this.createTodoCards)

    return <div className="card-container">
      {todoCards}
  </div>
  }
}

const mapStateToProps = state => ({
  todos: state.todos
} )

export default connect(mapStateToProps, null)(TodoCardList)