import {
  ADD_TODO,
  SHOW_OR_HIDE_MODAL_BUTTON_CLICKED
} from './types'


export const addTodo = (todo) => {
	return {
		type: ADD_TODO,
		payload: todo
	}
}

export const showOrHideCreateTodoModal = () => {
  return {
		type: SHOW_OR_HIDE_MODAL_BUTTON_CLICKED
	}
}