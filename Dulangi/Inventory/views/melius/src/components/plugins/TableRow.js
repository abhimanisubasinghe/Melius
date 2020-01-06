import React, { Component } from 'react'

class TableRow extends Component {
    
   
     
    render() {
        const {id,title,completed} = this.props.todo;
        console.log("completed" + completed)
        return (
            <div style={this.getStyle()}>
               <p> 
                   <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                   {' '}
                   { title }
                   <button onClick={this.props.delToDo.bind(this,id)} style={btnStyle}>x</button>
                </p> 
            </div>
        )
    }
}

ToDoItem.propItem = {
    todo: PropTypes.object.isRequired
}


export default TableRow
