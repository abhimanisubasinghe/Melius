import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ToDoItem extends Component {
    
    getStyle = () => {
        return {
            //textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            //backgroundColor: this.props.todo.completed ? '#baffc0' : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }
     
    render() {
        const {id,quantity,item} = this.props.item2add;
        //console.log(item);
        //console.log("completed" + completed)
        return (
            <div style={this.getStyle()}>
               <p> 
                   {/*<input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>*/}
                   {' '}
                   { item.name }
                   { quantity }
                   <button onClick={this.props.delToDo.bind(this,id)} style={btnStyle}>x</button>
                </p> 
            </div>
        )
    }
}

ToDoItem.propItem = {
    item2add: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff2626',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default ToDoItem
