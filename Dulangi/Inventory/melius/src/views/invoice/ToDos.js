import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import PropTypes from 'prop-types'

class ToDos extends Component {
    render() {
        return this.props.items2add.map((item2add) => (
            <ToDoItem  key={item2add.id} item2add={item2add} /*markComplete ={this.props.markComplete}*/ delToDo={this.props.delToDo}/>
        ));
    }
}

ToDos.propTypes = {
    items2add: PropTypes.array.isRequired
} 

export default ToDos
