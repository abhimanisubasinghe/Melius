import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
class ViewCustomer extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            customers:[ {
                Id:"1",
                name: "abc",
                fax: "abc",
                NIC: "abc",
                type: "abc",

                email: "abc@abc.com",  
                website: "abc",
                address: "abc abc abc",
                phoneNo: "0123456789",
                DOB: "1/4/2020",
                note:"dsd",
             }
            ]
        }
    }

    componentDidMount() {
        
          axios.get(`http://localhost:5001/customers/customerView`)
          .then(res => {
            const customers = res.data;
            console.log(res.data);
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
                <CardHeader>Responsive</CardHeader>
                <CardBody>
                {<Table responsive>
                    <tr className="table-active">
                        <th>#</th>
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
                        this.state.customers.map((customer,i) =>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
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
