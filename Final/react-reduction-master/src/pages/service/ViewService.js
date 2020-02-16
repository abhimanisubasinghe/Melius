import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table,UncontrolledAlert, } from 'reactstrap';
import axios from 'axios';
import { view } from './UserFunction';
import { search } from './UserFunction';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

class ViewServicePage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            searchId: "",
            services:[ {
                serviceId:"",
                name: "",
                category: "",
                price: ""
             }
            ]
        }
    }

    componentDidMount() {
        
          axios.get(`http://localhost:5001/services/viewService`)
          .then(res => {
            const services = res.data.result;
            console.log("view",res.data);
            this.setState({ services });
          })
          
    }

    handleInfo = e => {
        e.preventDefault();
        console.log("Hi service!",e);
        console.log(e.target.searchId.value);
        const service = {
            searchId: e.target.searchId.value
        }    
        
        search(service).then(res => {
            if(res) {
              console.log('qqqqqqqqqqqqq');
              console.log(res);

              if(res){
                  //var res = res1[0];
                this.props.history.push({
                    pathname:'/service-profile',
                    data: res})
                
              }
              else{
                console.log("ERROR");  
                this.props.history.push('/service-view');
              }
            }
          })
    }

    render(){   
    return (
        <Page
        title="Service"
        breadcrumbs={[{ name: 'View', active: true }]}
        className="TablePage"
        >
        <Row>
            <Col>
            <Card className="mb-3">
            {(this.props.location.data)?
                (this.props.location.data === "TRUE" || this.props.location.data.state === true)?
                    <UncontrolledAlert color="success">
                    SUCCESSFUL!
                    </UncontrolledAlert>
                    :
                    <UncontrolledAlert color="danger">
                    ERROR!
                    </UncontrolledAlert>
                :
                ""
            }
                <CardHeader>Responsive</CardHeader>
                <CardBody>
                <Table responsive>
                    <tr className="table-active">
                        <th>#</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                    { this.state.services.map((service,i) =>

                                      <tr>
                                        <th>{i+1}</th>
                                        <td>{service.serviceId}</td>
                                        <td>{service.name}</td>
                                        <td>{service.category}</td>
                                        <td>{service.price}</td>
                                        
                                        <td>
                                            <form onSubmit={this.handleInfo}>
                                                <input 
                                                type="hidden" 
                                                id="searchId" 
                                                name="searchId" 
                                                value={service.serviceId} 
                                                disabled/>
                                                <Button color="info">View</Button>
                                            </form>
                                        </td>
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

export default ViewServicePage;
