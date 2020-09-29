import React, { useState } from "react";
import { useDispatch } from 'react-redux'



const TodoCreateModal = () => {

  const dispatch = useDispatch()

  const [amountOfCharactersInDescription, setAmountOfCharactersInDescription] = useState(0)

  const updateAmountOfCharacters = (event) => {
    setAmountOfCharactersInDescription(event.target.value.length)
    if (event.target.value.length >= 50){
      document.querySelector('#new-todo-description').value = event.target.value.slice(0, -1)
    }
  }


    return (
      <div className="new-todo-modal">
        <div class="new-todo-header">
          <h4>New todo</h4>
          <h4 onClick={() => dispatch({ type: 'CLOSE_CREATE_TODO_MODAL'})} id="exit-create-todo-modal">🏃🏼</h4>
        </div>
        <div class="new-todo-body">
          <form>
            <div class="new-todo-input">
              <label>Title</label>
              <input id="new-todo-title" type="text" />
            </div>
            <div class="new-todo-input">
            <label>Description {amountOfCharactersInDescription}/50</label>
              <input onKeyDown={ updateAmountOfCharacters } id="new-todo-description" type="text" />
            </div>
            <div class="new-todo-input">
              <label>Author</label>
              <input id="new-todo-author" type="text" />
            </div>
            <div class="new-todo-input">
              <button 
                id="create-todo-button"  
                type="button"
                onClick={() => dispatch({ type: 'ADD_TODO', payload: {
                  title: document.querySelector('#new-todo-title').value,
                  description: document.querySelector('#new-todo-description').value,
                  author: document.querySelector('#new-todo-author').value,
                  completed: false
                } })}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }


export default (TodoCreateModal)