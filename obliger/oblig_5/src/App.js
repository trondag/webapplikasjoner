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
        <div class="finished-todos-container">
          <h2>Completed Todos</h2>
          <button>Filter by date</button>
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
              <tr>
                <td>Todo 4</td>
                <td>Mary Jane</td>
                <td>Clean the house</td>
                <td>22/7/2020</td>
              </tr>
              <tr>
                <td>Todo 5</td>
                <td>Mary Jane</td>
                <td>Clean the house</td>
                <td>23/7/2020</td>
              </tr>
              <tr>
                <td>Todo 6</td>
                <td>Mary Jane</td>
                <td>Clean the house</td>
                <td>24/7/2020</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>{showCreateTodoModal? <TodoCreateModal></TodoCreateModal> : null}</p>
      </main>
    </div>
    </Provider>
  );
}


export default hot(module) (App);