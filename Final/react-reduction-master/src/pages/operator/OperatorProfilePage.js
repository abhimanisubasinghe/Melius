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

class OperatorProfilePage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             data: this.props.location.data,
             operator: {
                id:"0",
                name: "abc",
                username: "abc@abc.com",
                DOB: "2015-03-04T00:00:00.000Z",
                address: "abc abc abc",
                contactNumber: "0123456789",
                status: "0",
                password: "",
             }
            
        }
    }
    
    componentDidMount(){
        //console.log(this.state.data[0].name)
        if(this.props.location.data){
            const operator = this.props.location.data[0];
            this.setState({operator})
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
                    pathname:'/operator-update',
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
            <Page title="Operator Profile" breadcrumbs={[{ name: 'profile', active: true }]}>

            <Row>
                <Col md={8} md={8}>
                    <Card inverse className="text-center">
                        <CardImg width="100%" src={bgImage} alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle><h1>{this.state.operator.name}</h1></CardTitle>
                        <CardText><h3>{this.state.operator.username}</h3></CardText>
                        {
                            date = new Date(this.state.operator.DOB),
                            m = date.getUTCMonth()+1, // Hours   
                            y = (date.getUTCFullYear()),
                            d = (date.getUTCDate()),
                            n = ''
                        }
                            
                        <CardText style={fontStyle}>{d}/{m}/{y}</CardText>
                            
                            <br/>
                            
                            <CardText style={fontStyle}>{this.state.operator.address}</CardText>
                            
                            <br/>
                            
                            <CardText style={fontStyle}>{this.state.operator.contactNumber}</CardText>
                            
                            <br/>
                            
                            <CardText style={fontStyle}>{this.state.operator.status !==0 ? "Operator" : "Admin"}</CardText>
                            
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
                                    value={this.state.operator.username} 
                                    disabled/>
                                <Button color="success">Update</Button>
                            </form>
                            </CardText>
                            <form onSubmit={this.handleDelete}>
                                    <input 
                                    type="hidden" 
                                    id="searchId" 
                                    name="searchId" 
                                    value={this.state.operator.username} 
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

export default OperatorProfilePage;
