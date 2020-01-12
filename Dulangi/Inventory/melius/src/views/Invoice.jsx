import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
//import './App.css';
import axios from 'axios';
import ToDos from './invoice/ToDos';
import AddToDo from './invoice/AddToDo';
import uuid from 'uuid';


class App extends Component {
  
  state = {
    todos: [
    ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  markComplete = (id) => {
    this.setState(
      {
        todos: this.state.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo;
        } )
      }
    );
  }

  delToDo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)] });
  }

  addToDo = (title) => {
    const newToDo = {
      id: uuid.v4(),
      title: title,
      completed:false
    }

    this.setState({
      todos:[...this.state.todos,newToDo]
    })
  }
  
  render(){
    return (
        <div className="Invoice">
          <div className="container">
            <React.Fragment>
                <AddToDo addToDo= {this.addToDo}/>
                <ToDos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo}/>
            </React.Fragment>  
            
          </div>
        </div>
    );
  }
}

export default App;
