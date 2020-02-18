import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import React from 'react';
import back from './wall2.jpg';
import inventory from './inventory.jpg';
import info from './info.jpg';
import garage from './garage.jpg';
import {Link} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Card,
        CardBody,
        CardImg,
        CardImgOverlay,
        CardLink,
        CardText,
        CardTitle, Col, Row, Button } from 'reactstrap';
import { login } from './UserFunction';
//import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import './main.css';

class MainPage extends React.Component {
  

  constructor() {
    super()
    this.state = {
      username: '',
      authorization: "",
      expires: '',
      
    }
  }

  componentDidMount(){

    var d = new Date();
    d.setTime(d.getTime());
    const now = d;
    console.log(now);
    if(this.props.location.state){
      console.log(this.props.location.state.expires);
      this.setState({
        authorization: this.props.location.state.status,
        username: this.props.location.state.username,
        expires: this.props.location.state.expires

      });


      if(now>this.props.location.state.expires){
        this.props.history.push('/login');
      }
    }
    else{
      this.props.history.push('/login');
    }

  }

  handleInventory = () => {
    {this.props.history.push('/inventory',{
      status:this.state.authorization,
      expires:this.state.expires,
      username:this.state.username})}
  }

  handleServicecenter = () => {
    {this.props.history.push('/servicecenter',{
      status:this.state.authorization,
      expires:this.state.expires,
      username:this.state.username})}
  }

  handleInformationHub = () => {
    {this.props.history.push('/infohub',{
      status:this.state.authorization,
      expires:this.state.expires,
      username:this.state.username})}
  }



  handleLogoClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
      <Card className="flex-row">
            <CardImg
              className="card-img-left"
              src={back}
              style={{ width: 'auto', height:760 }}
            />
            <CardBody>
              <center>
              </center>
            <Card className="flex-row">
            <CardBody>
              <CardTitle><h1>Welcome to Melius</h1></CardTitle>
              <CardText>You are logged in as {this.state.username}</CardText>
            </CardBody>
            <CardImg
              
              style={{ width: 'auto', height: 130 }}
            />
          </Card>
          <Card className="flex-row">
            <CardBody>
              <CardTitle><h1>Inventory</h1></CardTitle>
              {this.state.username ?
              <CardText><Button onClick={this.handleInventory}>View</Button></CardText>
              :
              ""
              }  
            </CardBody>
            <CardImg
              className="card-img-right"
              src={inventory}
              style={{ width: 'auto', height: 150 }}
            />
          </Card>
          <Card className="flex-row">
            <CardBody>
              <CardTitle><h1>Service Center</h1></CardTitle>
              {this.state.username ?
              <CardText><Button onClick={this.handleServicecenter}>View</Button></CardText>
                : 
                ""
              }
            </CardBody>
            <CardImg
              className="card-img-right"
              src={garage}
              style={{ width: 'auto', height: 150 }}
            />
          </Card>
          <Card className="flex-row">
            <CardBody>
              <CardTitle><h1>Inforamtion Hub</h1></CardTitle>
              {this.state.username ?
              <CardText><Button onClick={this.handleInformationHub}>View</Button></CardText>
                :
                ""
              }  
            </CardBody>
            <CardImg
              className="card-img-right"
              src={info}
              style={{ width: 'auto', height: 150 }}
            />
          </Card>
          <Card className="flex-row">
            <CardBody>
            <center>
              <CardTitle><Link to="/login"><Button className="btn-lg">Log In</Button></Link></CardTitle>
              </center>
            </CardBody>
            <CardImg
              className="card-img-right"
              style={{ width: 'auto', height: 130 }}
            />
          </Card>
            </CardBody>
          </Card>
      </div>     
    );
  }
}

export default MainPage;
