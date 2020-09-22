import React, { Component} from "react";
import TodoCard from './TodoCard'

class TodoCardList extends Component {
  render() {
    return <div class="card-container">
      <TodoCard
        title="Todo 1"
        author="Mary Jane"
        description="text text tex tasfj ksagdnsk adgsg faf aa fsaf asf afs a f">
      </TodoCard>
      <TodoCard
        title="Todo 2"
        author="Mary Jane"
        description="text text tex tasfj ksagdnsk adgsg faf aa fsaf asf afs a f">
      </TodoCard>
      <TodoCard
        title="Todo 3"
        author="Mary Jane"
        description="text text tex tasfj ksagdnsk adgsg faf aa fsaf asf afs a f">
      </TodoCard>
  </div>
  }
}

export default TodoCardList