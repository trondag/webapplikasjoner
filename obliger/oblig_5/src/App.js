import React, { Component} from "react";
import './main'
import {hot} from "react-hot-loader";
import "./style.scss";
import TodoCardList from './TodoCardList'
import NavBar from './NavBar'

class App extends Component{
  render(){
    return(
      <div className="App">
        <NavBar></NavBar>
        <main>
          <div class="active-todos-container">
            <TodoCardList></TodoCardList>
          </div>
          <div class="finished-todos-container">
            <h2>Completed Todos</h2>
            <button>Filter by date</button>
            <table class="finished-todos-table">
              <thead >
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
          <div>
            <div class="new-todo-header">
              <h4>New todo</h4>
              <h4 id="exit-create-todo-modal">🏃🏼</h4>
            </div>
            <div class="new-todo-body">
              <form>
                <div class="new-todo-input">
                  <label>Title</label>
                  <input id="new-todo-title" type="text" />
                </div>
                <div class="new-todo-input">
                  <label>Description</label>
                  <input id="new-todo-description" type="text" />
                </div>
                <div class="new-todo-input">
                  <label>Author</label>
                  <input id="new-todo-author" type="text" />
                </div>
                <div class="new-todo-input">
                  <button id="create-todo-button" type="button">Create</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default hot(module)(App);