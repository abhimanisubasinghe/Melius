import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
//import './App.css';
import axios from 'axios';
import ToDos from './invoice/ToDos';
import AddToDo from './invoice/AddToDo';
import uuid from 'uuid';


class App extends Component {
  
  state = {
    items2add: [
    ]
  }

  componentDidMount(){
    
  }

  /*markComplete = (id) => {
    this.setState(
      {
        items2add: this.state.items2add.map(item2add => {
          if(item2add.id === id){
            item2add.completed = !item2add.completed
          }
          return item2add;
        } )
      }
    );
  }*/

  delToDo = (id) => {
    this.setState({ items2add: [...this.state.items2add.filter(item2add => item2add.id!==id)] });
  }

  addToDo = (item,quantity) => {
    console.log("adding: ",item)
    console.log("code",item.itemCode,quantity)
    //var point = {};
    //var x;
    //var i = 0;
    //console.log("itemsToadd",this.state.items2add)



    /*for (x in this.state.items2add){
      console.log("x",x[i].item)
      /*if(x.id == item.itemCode){
        point = x;
        console.log("Found",x.name);
        break;
      }*/
      //i = i++;
    //}
    /*if(point){
      this.setState({
        items2add : this.state.items2add.filter(item2add =>
            item2add.id != point.id 
        )
      })
      console.log("items2add",this.state.items2add)
      var newToDo = {
        id: item.itemCode,
        quantity: quantity+point.quantity,
        item: item    
      }
      
    }
    else{*/

      var newToDo = {
        id: item.itemCode,
        quantity: quantity,
        item: item    
      }

  //}
  this.setState({
    items2add:[...this.state.items2add,newToDo]
  })
    
  }
  
  render(){
    return (
        <div className="Invoice">
          <div className="container">
            <React.Fragment>
                <AddToDo addToDo= {this.addToDo}/>
                <ToDos items2add={this.state.items2add} /*markComplete={this.markComplete}*/ delToDo={this.delToDo}/>
            </React.Fragment>  
            
          </div>
        </div>
    );
  }
}

export default App;
