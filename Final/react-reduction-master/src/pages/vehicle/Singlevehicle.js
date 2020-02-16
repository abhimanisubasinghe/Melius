
import bgImage from 'assets/img/bg/background_1920-7.png';

import Page from 'components/Page';
import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
import React from 'react';
import { vehiclesearch } from '../../components/UserFunction';
import { deletevehicle } from '../../components/UserFunction';
import { confirmAlert } from 'react-confirm-alert'; 

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardHeader,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

class SingleView extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             data: this.props.location.data,
             vehicle: {
                Id:"",
                vehicleNo: "",
                category: "",
                type: "",
                mileage: "",
                custId: "",

                
             }
            
        }
    }
    
    componentDidMount(){
        //console.log(this.state.data[0].name)
        if(this.props.location.data){
            const vehicle = this.props.location.data[0];
            this.setState({vehicle})
        }
    }

    handleUpdate = e => {
        e.preventDefault();
        console.log("Hi!",e);
        console.log(e.target.searchId.value);
       
        const vehicle1 = {
          searchId: e.target.searchId.value
          } 
          
        vehiclesearch(vehicle1).then(res => {
            if(res) {
              console.log(res);
              if(res){
                this.props.history.push({
                    pathname:'/updatevehicle',
                    data: res})
                
              }
              else{
                console.log("ERROR");  
                this.props.history.push('/view-vehicle');
              }
            }
          })
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

      handleDelete = (e) => { 
        const vehicle = {
          Id : this.state.vehicle.Id,
          
        }
        console.log("delete veh",vehicle);
        
        deletevehicle(vehicle).then(res => {
          if(res) {
            console.log('qqqqqqqqqqqq');
            this.props.history.push({
              pathname:'/view-vehicle',
              data: res});
          } else{
                this.props.history.push({
                    pathname:'/singlevehicle',
                    data: res})
            }
          }
        )
        
    }

    render(){
     
        return (
            <Page title="Customer Profile" breadcrumbs={[{ name: 'profile', active: true }]}>

<Row>
            <Col  md={6} sm={6} xs={12}>
              <Card inverse className="text-center">
                <CardImg width="100%" src={bgImage} alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle>vehicle Id : -{this.state.vehicle.Id}</CardTitle>
                  <CardText>{this.state.vehicle.vehicleNo}</CardText>
                  <CardText>{this.state.vehicle.category}</CardText>
                  <CardText>{this.state.vehicle.type}</CardText>
                  <CardText>{this.state.vehicle.mileage}</CardText>
                  <CardText>{this.state.vehicle.custId}</CardText>
                 

                  
                </CardImgOverlay>
              </Card>
            </Col>
            <Col md="6" sm="12" xs="12">
            <Card className="mb-3">
              <CardHeader>Action</CardHeader>
              <CardBody>
                
                       <CardText>
                            <form onSubmit={this.handleUpdate}>
                                <input 
                                    type="hidden" 
                                    id="searchId" 
                                    name="searchId" 
                                    value={this.state.vehicle.Id} 
                                    disabled/>
                                <Button  color="success">Update</Button>
                            </form>
                            </CardText>
                            <form onSubmit={this.handleDelete}>
                                    <input 
                                    type="hidden" 
                                    id="searchId" 
                                    name="searchId" 
                                    value={this.state.vehicle.Id} 
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
                            </CardBody>
           
                  
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

export default SingleView;
