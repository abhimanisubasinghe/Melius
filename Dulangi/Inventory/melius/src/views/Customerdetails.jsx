import React,{Component} from "react";
//import {ReactTable}  from "react-table";
import axios from "axios";
import {
   Table
  } from "reactstrap";
console.log(React.version);


class Customerdetails extends Component {

    State = {
        persons: []
      }
    componentDidMount() {
      console.log("hii")

        axios.get(`http://localhost:5001/customers/customerView`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
  
    render() {
      return (<table width="100%">
                                                     <tr>
                                                              <th>Id</th>
                                                              <th>name</th>

                                                              <th>fax</th>
                                                              <th>NIC</th>
                                                              <th>email</th>
                                                              <th>website</th>
                                                                           
                                                              <th>DOB</th>

                                                              <th>note</th>
                                                        
                                                      </tr>
        {/* { this.state.persons.map(customer => 
                                      <tr>
                                        <td>{customer.Id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.fax}</td>
                                        <td>{customer.NIC}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.website}</td>

                                        <td>{customer.DOB}</td>
                                        <td>{customer.note}</td>

                                        </tr>)}  */}
          </table>
      
      )
   
  
  }
}
  
  export default Customerdetails;

