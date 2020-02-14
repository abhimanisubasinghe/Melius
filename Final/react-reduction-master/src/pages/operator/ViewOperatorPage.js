import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

class ViewOperatorPage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            operators:[ {
                name: "abc",
                username: "abc@abc.com",
                DOB: "1/4/2020",
                address: "abc abc abc",
                contactNumber: "0123456789",
                status: "0",
                password: "",
             }
            ]
        }
    }

    componentDidMount() {
        
          axios.get(`http://localhost:5001/Users/viewUser`)
          .then(res => {
            const operators = res.data;
            this.setState({ operators });
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
                <CardHeader>Responsive</CardHeader>
                <CardBody>
                <Table responsive>
                    <tr className="table-active">
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                    { this.state.operators.map((operator,i) =>

                                      <tr>
                                        <th>{i+1}</th>
                                        <td>{operator.name}</td>
                                        <td>{operator.username}</td>
                                        <td>{operator.DOB}</td>
                                        <td>{operator.address}</td>
                                        <td>{operator.contactNumber}</td>
                                        <td>{operator.status!==0 ? "Operator" : "Admin" }</td>
                                        <td><Button color="info">View</Button></td>
                                        </tr>)}    
                </Table>
                </CardBody>
            </Card>
            </Col>
        </Row>
        </Page>
    );
    };
}

export default ViewOperatorPage;
