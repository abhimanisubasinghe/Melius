import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table,UncontrolledAlert, } from 'reactstrap';
import axios from 'axios';
import { view } from './UserFunction';
import { search } from './UserFunction';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

class ViewTopCustomer extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            
                Id:"",
                name: "",
                NIC: "",
                email: "",
                topCount : '',   
        
        }
    }

    componentDidMount() {
        
          axios.get(`http://localhost:5001/customers/topCustomer`)
          .then(res => {
            //const services1 = res.data.result;
            //const services2 = res.data.result2;
            console.log("view",res.data);
            console.log(res.data.result[0].Id)
            // this.setState.serviceId = res.data.result2[0].serviceId;
            // this.setState.name = res.data.result2[0].name;
            // this.setState.category = res.data.result2[0].category;
            // this.setState.price = res.data.result2[0].price;
            // this.setState.topCount = res.data.result[0].coun;
            this.setState({
                Id: res.data.result2[0].Id,
                name: res.data.result2[0].name,
                NIC: res.data.result2[0].NIC,
                email: res.data.result2[0].email,
                topCount: res.data.result[0].coun
            })
          })
          
    }

    render(){   
    return (
        <Page
        title="Top Customer"
        breadcrumbs={[{ name: 'View', active: true }]}
        className="TablePage"
        >
        <Row>
            <Col>
            <Card className="mb-3">
            
                <CardHeader>TOP CUSTOMER</CardHeader>
                <CardBody>
                <Table responsive>
                    <tr className="table-active">
                        <th>#</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>NIC</th>
                        <th>Email</th>
                    </tr>


                                      <tr>
                                        <td>**</td>
                                        <td>{this.state.Id}</td>
                                        <td>{this.state.name}</td>
                                        <td>{this.state.NIC}</td>
                                        <td>{this.state.email}</td>
                                        </tr>
                </Table>
                <h3>Number of service don by {this.state.name}  = {this.state.topCount} </h3>
                </CardBody>
            </Card>
            </Col>
        </Row>
        </Page>
      );
    };
}

export default ViewTopCustomer;
