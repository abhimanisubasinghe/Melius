import React, { Component } from 'react'

import axios from 'axios';

export class Test extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             items: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/items`)
          .then(res => {
              
            console.log("data "+res)  
            //const items = res;
            //this.setState({ items });
          })
    }

    getItems = () => {
        try {
          return axios.get('http://localhost:5000/items')
        } catch (error) {
          console.error(error)
        }
      }
      
    /*countBreeds = async () => {
        const breeds = getBreeds()
          .then(response => {
            if (response.data.message) {
              console.log(
                `Got ${Object.entries(response.data.message).length} breeds`
              )
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
      
      countBreeds()
    
    */

    render() {
        return (
            <div>
                {this.getItems}
            <ul>
              {/* this.state.items.map(person => <li>{person.name}</li>)*/}
            </ul>
            </div>
          )
    }
}

export default Test
