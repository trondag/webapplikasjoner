import React, { useState} from "react";
import './main'
import {hot} from "react-hot-loader";
import "./style.scss";
import TodoCardList from './TodoCardList'
import NavBar from './NavBar'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './todoStore'
import TodoCreateModal from "./TodoCreateModal";
import CompletedList from "./CompletedList";

let store = createStore(allReducers);
let showCreateTodoModal = false;
console.log(store.getState())

function App() {

  const [showCreateTodoModal, setShowCreateTodoModal] = useState(false);

  store.subscribe(() => {
    console.log(store.getState().layout)
    setShowCreateTodoModal(store.getState().layout.showCreateTodoModal)
    console.log(showCreateTodoModal)
  })


  return(
    <Provider store={store}>
    <div className="App">
      <NavBar/>
      <main>
        <div class="active-todos-container">
          <TodoCardList/>
        </div>
        <CompletedList />
        <p>{showCreateTodoModal? <TodoCreateModal></TodoCreateModal> : null}</p>
      </main>
    </div>
    </Provider>
  );
}


export default hot(module) (App);