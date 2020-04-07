import React, { Component } from 'react'

class AddTodo extends Component {

  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.content !== '') {
      this.props.addTodo(this.state);
      this.setState({
        content: ''
      })
    } else {
      alert('Preencha o campo todo!')
    }

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo: </label>
          <input type="text" onChange={this.handleChange} value={this.state.content} placeholder="Digite o todo e pressione enter"/>
        </form>
      </div>
    )
  }
}

export default AddTodo;