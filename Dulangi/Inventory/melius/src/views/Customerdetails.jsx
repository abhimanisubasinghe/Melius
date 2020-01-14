import React,{Component} from "react";
import {ReactTable}  from "react-table";
import axios from "axios";
import {
   Table
  } from "reactstrap";
console.log(React.version);


class Customerdetails extends Component {

    state = {
        persons: []
      }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
  
    render() {
      return (<table width="100%">
          <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
        { this.state.persons.map(person => <tr><td>{person.name}</td><td>{person.username}</td><td>{person.email}</td></tr>)}
      </table>)
    }
  
  }
  
  export default Customerdetails;

