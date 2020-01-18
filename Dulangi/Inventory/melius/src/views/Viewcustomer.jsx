import React from 'react';
import axios from 'axios';



export default class Viewcustomer extends React.Component{

    constructor(props) {
        super(props)
    
        this.State = {
            Id:"",
            name:"",
            fax:"",    
            NIC: "",
            type: "",
            email: "",
            website: "",
            address: "",
            phoneNo: "",
            DOB: "",
            note: "",
            customer:[]

           
        }
        
    }

    onChange = (e) => {
        this.setState(
        {[e.target.name]: e.target.value}
    )
    }
    componentDidMount() {
        axios.get(`http://localhost:5001/customer/view`)
          .then(res => {
            const customers = res.data;
            this.setState({ customers });
          })
      }


    render(){
        return(
            <table width="100%">
                                <tr>
                                        <th>Id</th>
                                        <th>name</th>
                                        <th>fax</th>
                                        <th>NIC</th>
                                        <th>type</th>
                                        <th>email</th>
                                        <th>address</th>
                                        <th>phoneNo</th>
                                        <th>DOB</th>
                                        <th>note</th>

                                </tr>
                                { this.State.customers.map(customer =>
                                     <tr>
                                    <td>{customer.Id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.fax}</td>
                                    <td>{customer.NIC}</td>
                                    <td>{customer.type}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.phoneNo}</td>
                                    <td>{customer.DOB}</td>

                                    <td>{customer.note}</td>

                                    </tr>)}
            </table>


        )
    }
}

