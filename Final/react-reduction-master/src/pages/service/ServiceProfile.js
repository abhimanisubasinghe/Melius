import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';
import user1Image from 'assets/img/users/100_1.jpg';
import bgImage from 'assets/img/bg/background_1920-7.png';
import { UserCard } from 'components/Card';
import Page from 'components/Page';
import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { search } from './UserFunction';
import axios from 'react';
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

class ServiceProfilePage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             data: this.props.location.data,
             service: 
              {
                serviceId : '0',
                name: 'abc',
                category : 'as',
                price: '0'
             }
            
        }
    }
    
    componentDidMount(){
        //console.log(this.state.data[0].name)
        
        if(this.props.location.data){
            let service = this.props.location.data[0];
            console.log('comeeeeeee')
            this.setState({service
                // serviceId: service.data.serviceId,
                // name: service.data.name,
                // category: service.data.category,
                // price: service.data.price
            });
            //console.log(service.data[0].serviceId);
        }
        
    }

    handleUpdate = e => {
        e.preventDefault();
        console.log("Hi!",e);
        console.log(e.target.searchId.value);
        const service1 = {
            searchId: e.target.searchId.value
        }   
        search(service1).then(res => {
            if(res) {
              console.log(res);
              if(res){
                this.props.history.push({
                    pathname:'/service-update',
                    data: res})
                
              }
              else{
                console.log("ERROR");  
                this.props.history.push('/service-view');
              }
            }
          })
    }

    handleDelete = e => {
        e.preventDefault();
        console.log("Hi!",e);
        console.log(e.target.searchId.value);
        const service1 = {
            searchId: e.target.searchId.value
        }   
        search(service1).then(res => {
            if(res) {
              console.log(res);
              if(res){
                this.props.history.push({
                    pathname:'/service-delete',
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
            <Page title="Service Profile" breadcrumbs={[{ name: 'profile', active: true }]}>

            <Row>
                <Col md={8} md={8}>
                    <Card inverse className="text-center">
                        <CardImg width="100%" src={bgImage} alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle><h1>{this.state.service.serviceId}</h1></CardTitle>
                        <CardText><h3>{this.state.service.name}</h3></CardText>
                            
                            <br/>
                            
                            <CardText style={fontStyle}>{this.state.service.category}</CardText>
                            
                            <br/>
                            
                            <CardText style={fontStyle} >{this.state.service.price}</CardText>
                            
                            <br/>
                            
                            
                        </CardImgOverlay>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="text-center">
                            <CardText>
                            <form onSubmit={this.handleUpdate}>
                                <input 
                                    type="hidden" 
                                    id="searchId" 
                                    name="searchId" 
                                    value={this.state.service.serviceId} 
                                    disabled/>
                                <Button color="success">Update</Button>
                            </form>
                            </CardText>
                            <form onSubmit={this.handleDelete}>
                                    <input 
                                    type="hidden" 
                                    id="searchId" 
                                    name="searchId" 
                                    value={this.state.service.serviceId} 
                                    disabled
                                    />
                                    <CardText>
                                    </CardText>        
                                    
                            <CardText>        
                            <Button color="danger">Delete</Button>
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

export default ServiceProfilePage;
