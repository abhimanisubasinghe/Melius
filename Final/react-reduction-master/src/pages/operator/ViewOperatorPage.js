import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

class ViewOperatorPage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            operators:[ {
                name: "",
                username: "",
                DOB: "",
                address: "",
                contactNumber: "",
                status: "",
                password: "",
             }
            ]
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5001/Users/selectAll`)
          .then(res => {
              
            //console.log("data "+res.data)
              
            const operators = res.data;
            this.setState({ operators });
          })
          
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
                    <thead>
                    <tr className="table-active">
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        { this.state.operators.map((obj,i) => 
                         <td>{obj}</td>)
                        }
                    </tr>
                    </tbody>
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
