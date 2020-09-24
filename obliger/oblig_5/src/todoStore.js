import {createStore} from 'redux'
import {
  ADD_TODO,
  SHOW_OR_HIDE_MODAL_BUTTON_CLICKED
} from './types'

function getStartTodos(){
  return [
    {
      title: 'todo1',
      author: 'Mary Jane',
      description: 'lodfsf sf sd s sdfs dfsd fsdfsdfs'
    },
    {
      title: 'todo2',
      author: 'Mary Jane',
      description: 'lodfsf sf sd s sdfs dfsd fsdfsdfs'
    },
    {
      title: 'todo3',
      author: 'Mary Jane',
      description: 'lodfsf sf sd s sdfs dfsd fsdfsdfs'
    }
  ]
}


export default (state = {
    todos: getStartTodos(), 
    layout: {
      showCreateTodoModal: false
    }
  }, action) => {
    switch (action.type){
      case SHOW_OR_HIDE_MODAL_BUTTON_CLICKED: 
      console.log('hei')
      return {
        todos: state.todos,
        layout: {
          showCreateTodoModal: !state.layout.showCreateTodoModal
        }
      }
      case ADD_TODO: return {
        todos: [action.payload, ...state.todos]
      }
      default: return state
    }
}