import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import CompletedListItems from './CompletedListItem'

const CompletedList = () => {

const todos = useSelector(state => state.todos)

const completedTodos = todos.filter(todo => {
  return todo.completed
})
const [searchString, setSearchString] = useState('')

const completedFilteredTodos = completedTodos.filter(todo => {
  let searchRegex = new RegExp(searchString, 'i');
  let res = todo.title.search(searchRegex)
  if (res > -1){
    return true
  }
})


const completedTodosHtml = completedFilteredTodos.map(item => 
  <CompletedListItems 
    title={item.title}
    author={item.author}
    description={item.description}
    completedAt={item.completedAt}
  />)

const search = (event) => {
  setSearchString(event.target.value)

}

  return (
    <div class="finished-todos-container">
    <h2>Completed Todos</h2>
    <input onKeyUp={search} id="search" placeholder="søk"/>
    <table class="finished-todos-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Description</th>
          <th>Completed date</th>
        </tr>
      </thead>
      <tbody class="finished-todos-tbody">
        {completedTodosHtml}
      </tbody>
    </table>
  </div>
  )
}

export default CompletedList