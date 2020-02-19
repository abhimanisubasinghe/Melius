import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table,UncontrolledAlert, } from 'reactstrap';
import axios from 'axios';
import { search } from './UserFunction';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

class ViewAppointmetsPage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            searchId: "",
            appointments:[ {
                jobId:"0",
                date:"",
                customerId: "0",
                vehicleId: "0",
                descript: "abc",
             }
            ]
        }
    }

    componentDidMount() {
        console.log(this.props.location);
          axios.get(`http://localhost:5001/appointments/`)
          .then(res => {
            if(res){  
            console.log(res);
            const appointments = res.data;
            console.log("view",res.data);
            this.setState({ appointments });
            }
          })
          
    }

    handleInfo = e => {
        e.preventDefault();
        console.log("Hi!",e);
        console.log(e.target.searchId.value);
        const user = {
            searchId: e.target.searchId.value
        }    
        //console.log("search",searchId)

      search(user).then(res => {
            if(res) {
              console.log('qqqqqqqqqqqqq');
              console.log(res);
              if(res){
                this.props.history.push({
                    pathname:'/appointment-profile',
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
        title="Appointmets"
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
                        <th>Date</th>
                        <th>Customer ID</th>
                        <th>Vehicle ID</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    { this.state.appointments.map((appointment,i) =>

                                      <tr>
                                        <th>{i+1}</th>
                                        {
                                            date = new Date(appointment.date),
                                            m = date.getUTCMonth()+1, // Hours   
                                            y = (date.getUTCFullYear()),
                                            d = (date.getUTCDate()),
                                            n = ''
                                        }
                                        <td>{d}/{m}/{y}</td>
                                        <td>{appointment.customerId}</td>
                                        <td>{appointment.vehicleId}</td>
                                        <td>{appointment.descript}</td>
                                        <td>
                                            <form onSubmit={this.handleInfo}>
                                                <input 
                                                type="hidden" 
                                                id="searchId" 
                                                name="searchId" 
                                                value={appointment.jobId} 
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

export default ViewAppointmetsPage;
