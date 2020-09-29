import {createStore} from 'redux'
import {
  ADD_TODO,
  SHOW_OR_HIDE_MODAL_BUTTON_CLICKED,
  COMPLETE_TODO,
  DELETE_TODO,
  CLOSE_CREATE_TODO_MODAL
} from './types'

function getStartTodos(){
  return [
    {
      title: 'todo1',
      author: 'Mary Jane',
      description: 'Vaske bilen',
      completed: false
    },
    {
      title: 'todo2',
      author: 'Mary Jane',
      description: 'Vanne blomster',
      completed: false
    },
    {
      title: 'todo3',
      author: 'Mary Jane',
      description: 'Gi mat til hunden',
      completed: false
    },
    {
      title: 'todo4',
      author: 'Mary Jane',
      description: 'Vaske på kjøkkenet',
      completed: true,
      completedAt: new Date(2020, 7, 2)
    },
    {
      title: 'todo5',
      author: 'Mary Jane',
      description: 'Gjøre ferdig oblig',
      completed: true,
      completedAt: new Date(2020, 7, 3)
    },
  ]
}

function completeTodo(title, todos) {
  let todoToComplete = todos.find(todo => {
    return todo.title === title
  })
  todoToComplete.completed = true;
  let today = new Date()
  todoToComplete.completedAt = today
  return todos
}


export default (state = {
    todos: getStartTodos(), 
    layout: {
      showCreateTodoModal: false
    }
  }, action) => {
    switch (action.type){
      case SHOW_OR_HIDE_MODAL_BUTTON_CLICKED: 
      return {
        todos: state.todos,
        layout: {
          showCreateTodoModal: !state.layout.showCreateTodoModal
        }
      }
      case CLOSE_CREATE_TODO_MODAL: return {
        todos: [...state.todos],
        layout: {
          showCreateTodoModal: false
        }
      }
      case ADD_TODO: return {
        todos: [action.payload, ...state.todos],
        layout: {
          showCreateTodoModal: false
        }
      }
      case DELETE_TODO: return {
        todos: state.todos.filter(todo => { return action.payload.title !== todo.title}),
        layout: {
          showCreateTodoModal: false
        }
      }
      case COMPLETE_TODO: return {
        todos: [ ... completeTodo(action.payload.title, state.todos)],
        layout: {
          showCreateTodoModal: false
        }
      }


      default: return state
    }
}