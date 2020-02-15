
import bgImage from 'assets/img/bg/background_1920-7.png';

import Page from 'components/Page';
import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
import React from 'react';
import { customersearch } from '../../components/UserFunction';
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
        customersearch(user).then(res => {
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
     
        return (
            <Page title="Operator Profile" breadcrumbs={[{ name: 'profile', active: true }]}>

<Row>
            <Col  md={6} sm={6} xs={12}>
              <Card inverse className="text-center">
                <CardImg width="100%" src={bgImage} alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle>Customer</CardTitle>
                  <CardText>inversed card</CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col md="6" sm="12" xs="12">
            <Card className="mb-3">
              <CardHeader>Buttons</CardHeader>
              <CardBody>
                
                       <CardText>
                            <form onSubmit={this.handleUpdate}>
                                <input 
                                    type="hidden" 
                                    id="searchId" 
                                    name="searchId" 
                                    value={this.state.operator.username} 
                                    disabled/>
                                <Button  color="success">Update</Button>
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
                            <Button  color="danger">Delete</Button>
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

export default OperatorProfilePage;
