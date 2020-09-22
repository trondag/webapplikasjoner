import React, {Component} from 'react'
import TodoButton from './TodoButton'

class NavBar extends Component {
  render(){
    return (
      <header>
      <h1>
        Create and manage todos
      </h1>
      <div>
        <TodoButton></TodoButton>
      </div>
    </header>
    )
    
  }
}

export default NavBar