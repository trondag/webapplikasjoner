import React, {useState} from "react";
import { useDispatch } from 'react-redux'

const TodoCard = (props) => {

  const dispatch = useDispatch()

  const [amountOfCharactersInDescription, setAmountOfCharactersInDescription] = useState(0)

  const updateAmountOfCharacters = (event) => {
    console.log(event)
  }

    return <div class="todo-card">
      <h1 class="todo-title">{props.title}</h1>
      <p class="todo-author">{props.author}</p>
      <p onKeyDown={ updateAmountOfCharacters } class="todo-description">{props.description}</p>
      <button onClick={() => dispatch({
        type: 'DELETE_TODO', payload: {
          title: props.title
        }
      })} class="todo-delete">Delete</button>
      <button onClick={() => dispatch({
        type: 'COMPLETE_TODO', payload: {
          title: props.title
        }
      })} class="todo-complete">Complete</button>
  </div>
  }

export default TodoCard