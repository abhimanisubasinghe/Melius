import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';
import user1Image from 'assets/img/users/100_1.jpg';
import bgImage from 'assets/img/bg/background_1920-7.png';
import { UserCard } from 'components/Card';
import Page from 'components/Page';
import { confirmAlert } from 'react-confirm-alert'; 
import '../../components/Alert/react-confirm-alert.css';
import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { search , deleteUser} from './UserFunction';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

class AppointmentsProfilePage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             data: this.props.location.data,
             appointment: {
                jobId: "0",
                vehicleId: "0",
                customerId: "0",
                date: "2015-03-04T00:00:00.000Z",
                discript: "abc abc abc",
             }
            
        }
    }
    
    componentDidMount(){
        //console.log(this.state.data[0].name)
        if(this.props.location.data){
            const appointment = this.props.location.data[0];
            this.setState({appointment})
        }
    }

    handleUpdate = e => {
        e.preventDefault();
        console.log("Hi!",e);
        console.log(e.target.searchId.value);
        const user = {
            searchId: e.target.searchId.value
        }   
        search(user).then(res => {
            if(res) {
              console.log(res);
              if(res){
                this.props.history.push({
                    pathname:'/appointment-update',
                    data: res})
                
              }
              else{
                console.log("ERROR");  
                this.props.history.push('/appointment-view');
              }
            }
          })
    }

    handleDelete = () => { 
        
        const user = {
          jobId: this.state.appointment.jobId
          
        }
        console.log("delete user",user);
        deleteUser(user).then(res => {
          if(res) {
            console.log('qqqqqqqqqqqq');
            this.props.history.push({
              pathname:'/appointment-view',
              data: res});
          } else{
                this.props.history.push({
                    pathname:'/appointment-view',
                    data: res})
            }
          }
        )
        
    }

    submit = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  <h1>Are you sure?</h1>
                  <p>You want to delete this file?</p>
                  <Row>
                  <Col>    
                  <Button color="info" onClick={onClose}>No</Button>
                  </Col>
                  <Col>
                  <Button
                    color="danger"
                    onClick={() => {
                      this.handleDelete();
                      onClose();
                    }}
                  >
                    Yes
                  </Button>
                  </Col>
                  </Row>
                </div>
              );
            }
          });
        }

    render(){
        var date;
        var m;
        var d;
        var y;
        var n;
        return (
            <Page title="appointment Profile" breadcrumbs={[{ name: 'profile', active: true }]}>

            <Row>
                <Col md={8} md={8}>
                    <Card inverse className="text-center">
                        <CardImg width="100%" src={bgImage} alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle><h1>Job ID: {this.state.appointment.jobId}</h1></CardTitle>
                        <CardText><h3>Customer ID: {this.state.appointment.customerId}</h3></CardText>
                        <CardText><h3>Vehicle ID: {this.state.appointment.vehicleId}</h3></CardText>
                        
                        {
                            date = new Date(this.state.appointment.date),
                            m = date.getUTCMonth()+1, // Hours   
                            y = (date.getUTCFullYear()),
                            d = (date.getUTCDate()),
                            n = ''
                        }
                            
                        <CardText style={fontStyle}>{d}/{m}/{y}</CardText>
                            
                            <br/>
                            
                            <CardText style={fontStyle}>{this.state.appointment.address}</CardText>
                            
                            <br/>
                        </CardImgOverlay>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="text-center">
                            <CardText>
                                <br/>
                            </CardText>
                            <CardText>
                            <form onSubmit={this.handleUpdate}>
                                <input 
                                    type="hidden" 
                                    id="searchId" 
                                    name="searchId" 
                                    value={this.state.appointment.jobId} 
                                    disabled/>
                                <Button color="success">Update</Button>
                            </form>
                            </CardText>
                            <form onSubmit={this.submit}>
                                    <input 
                                    type="hidden" 
                                    id="searchId" 
                                    name="searchId" 
                                    value={this.state.appointment.jobId} 
                                    disabled
                                    />
                                    <CardText>
                                    </CardText>        
                                    
                            <CardText>        
                            <div className='container'>
                                <Button color="danger" onClick={this.submit}>Delete</Button>
                            </div>
                            <br/>
                            </CardText>
                            </form>
                            <CardText>
                                <br/>
                            </CardText>
                    </Card>
                    </Col>
            </Row>

            </Page>
        );
    }
};

const fontStyle = {
    'color' : '#242424'
}

export default AppointmentsProfilePage;
