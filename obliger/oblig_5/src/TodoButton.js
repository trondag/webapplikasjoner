import React, {Component} from 'react'
import { connect } from 'react-redux'
import { showOrHideCreateTodoModal } from './todoActions'

class TodoButton extends Component {

  constructor(props){
    super(props);
    this.showOrHideCreateModal = this.showOrHideCreateModal.bind(this)
  }
  

  showOrHideCreateModal(){
    console.log(this)
    this.props.showOrHideCreateTodoModal()
  }

  render(){
    return(
      <button type="button" onClick={this.showOrHideCreateModal} class="create-todo-button">+ Todo</button>
    )
  }
}


export default connect(null, {showOrHideCreateTodoModal})(TodoButton)