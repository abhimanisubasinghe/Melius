import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table,UncontrolledAlert, } from 'reactstrap';
import axios from 'axios';
import { search } from './UserFunction';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

class ViewOperatorPage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            searchId: "",
            operators:[ {
                id:"",
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
        console.log(this.props.location.data);
          axios.get(`http://localhost:5001/Users/viewUser`)
          .then(res => {
            const operators = res.data;
            console.log("view",res.data);
            this.setState({ operators });
          })
          
    }

    handleInfo = e => {
        e.preventDefault();
        console.log("Hi!",e);
        console.log(e.target.searchId.value);
        const user = {
            searchId: e.target.searchId.value
        }    
        //console.log("e",e);
        //searchId.preventDefault();
        /*const user = {
            searchId: searchId
        }*/
        /*console.log("search",searchId)*/

        search(user).then(res => {
            if(res) {
              console.log('qqqqqqqqqqqqq');
              console.log(res);
              if(res){
                this.props.history.push({
                    pathname:'/operator-profile',
                    data: res})
                
              }
              else{
                console.log("ERROR");  
                this.props.history.push('/operator-view');
              }
            }
          })
    }

    render(){    
        var date;
        var m;
        var d;
        var y;
        var n;
    return (
        <Page
        title="Operator"
        breadcrumbs={[{ name: 'View', active: true }]}
        className="TablePage"
        >
        <Row>
            <Col>
            <Card className="mb-3">
                
            {(this.props.location.data)?
                (this.props.location.data === "TRUE" || this.props.location.data === true)?
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
            
                <CardHeader>Operator data</CardHeader>
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
                                        {
                                            date = new Date(operator.DOB),
                                            m = date.getUTCMonth()+1, // Hours   
                                            y = (date.getUTCFullYear()),
                                            d = (date.getUTCDate()),
                                            n = ''
                                        }
                                        <td>{d}/{m}/{y}</td>
                                        <td>{operator.address}</td>
                                        <td>{operator.contactNumber}</td>
                                        <td>{operator.status!==0 ? "Operator" : "Admin" }</td>
                                        <td>
                                            <form onSubmit={this.handleInfo}>
                                                <input 
                                                type="hidden" 
                                                id="searchId" 
                                                name="searchId" 
                                                value={operator.username} 
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

export default ViewOperatorPage;
