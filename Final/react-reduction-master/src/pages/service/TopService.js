import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table,UncontrolledAlert, } from 'reactstrap';
import axios from 'axios';
import { view } from './UserFunction';
import { search } from './UserFunction';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

class ViewTopService extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            
                serviceId:"",
                name: "",
                category: "",
                price: "",
                topCount : '',   
        
        }
    }

    componentDidMount() {
        
          axios.get(`http://localhost:5001/services/topService`)
          .then(res => {
            //const services1 = res.data.result;
            //const services2 = res.data.result2;
            console.log("view",res.data);
            console.log(res.data.result[0].serviceId)
            // this.setState.serviceId = res.data.result2[0].serviceId;
            // this.setState.name = res.data.result2[0].name;
            // this.setState.category = res.data.result2[0].category;
            // this.setState.price = res.data.result2[0].price;
            // this.setState.topCount = res.data.result[0].coun;
            this.setState({
                serviceId: res.data.result2[0].serviceId,
                name: res.data.result2[0].name,
                category: res.data.result2[0].category,
                price: res.data.result2[0].price,
                topCount: res.data.result[0].coun
            })
          })
          
    }

    render(){   
    return (
        <Page
        title="Top Service"
        breadcrumbs={[{ name: 'View', active: true }]}
        className="TablePage"
        >
        <Row>
            <Col>
            <Card className="mb-3">
            
                <CardHeader>TOP SERVICE</CardHeader>
                <CardBody>
                <Table responsive>
                    <tr className="table-active">
                        <th>#</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>


                                      <tr>
                                        <td>**</td>
                                        <td>{this.state.serviceId}</td>
                                        <td>{this.state.name}</td>
                                        <td>{this.state.category}</td>
                                        <td>{this.state.price}</td>
                                        </tr>
                </Table>
                <h3>Number of service {this.state.topCount} </h3>
                </CardBody>
            </Card>
            </Col>
        </Row>
        </Page>
      );
    };
}

export default ViewTopService;
