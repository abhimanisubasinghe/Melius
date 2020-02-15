import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
const tableTypes = [ 'hover'];

class ViewCustomer extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            customers:[]
            
        }
    }

    componentDidMount() {
        
          axios.get(`http://localhost:5001/customers/customerView`)
          .then(res => {
            const customers = res.data.result;
            console.log(res.data.result);
            this.setState({ customers });
          })
          
    }

    setStatus = () => {

    }

    render(){    
    return (
        <Page
        title="Operator"
        breadcrumbs={[{ name: 'View', active: true }]}
        className="TablePage"
        >
        <Row>
            <Col>
            <Card className="mb-3">
                <CardHeader></CardHeader>
                <CardBody>
                {<Table responsive>
                    <tr className="table-active">
                        <th>Id</th>
                        <th>Name </th>
                        <th>fax</th>
                        <th>NIC</th>
                        <th>type </th>
                        <th>E-mail</th>
                        <th>website</th>  
                        <th>address</th>
                        <th>phone No</th>
                        <th>DOB</th>
                        <th>note</th>
                        <th></th>
                    </tr>
                    {
                        this.state.customers.map((customer) =>
                            <tr>
                            <td>{customer.Id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.fax}</td>
                            <td>{customer.NIC}</td>
                            <td>{customer.type}</td>
                            <td>{customer.email}</td>
                            <td>{customer.website}</td>
                            <td>{customer.address}</td>
                            <td>{customer.phoneNo}</td>
                            <td>{customer.DOB}</td>
                            <td>{customer.note}</td>
                            <td><Button color="info">View</Button></td>
                            </tr> 
                        )
                    }
                </Table>}
                </CardBody>
            </Card>
            </Col>
        </Row>
        </Page>
    );
    };
}

export default ViewCustomer;
