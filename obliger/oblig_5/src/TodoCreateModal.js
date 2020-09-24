import React, { Component } from "react";
import { connect } from 'react-redux'

class TodoCreateModal extends Component {

  render() {
    return (
      <div className="new-todo-modal">
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
    )
  }
}

export default (TodoCreateModal)