
import bgImage from 'assets/img/bg/background_1920-7.png';

import Page from 'components/Page';
import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
import React from 'react';
import { customersearch } from '../../components/UserFunction';
import { deletecustomer } from '../../components/UserFunction';

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
             customer: {
                Id:"",
                name: "",
                fax: "",
                NIC: "",
                type: "",
                email: "",
                website: "",
                address:"",
                phoneNo:"",
                DOB: "",
                note: "",


                
             }
            
        }
    }
    
    componentDidMount(){
        //console.log(this.state.data[0].name)
        if(this.props.location.data){
            const customer = this.props.location.data[0];
            this.setState({customer})
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
                    pathname:'/updatecustomer',
                    data: res})
                
              }
              else{
                console.log("ERROR");  
                this.props.history.push('/view-customer');
              }
            }
          })
    }


    handleDelete = () => { 
      console.log("kiii");
      const user = {
        Id : this.state.customer.Id,
        
      }
      console.log("delete user",user);
      deletecustomer(user).then(res => {
        if(res) {
          console.log('wwww');
          this.props.history.push({
            pathname:'/view-customer',
            data: res});
        } else{
              this.props.history.push({
                  pathname:'/singleview',
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
     
        return (
            <Page title="Customer Profile" breadcrumbs={[{ name: 'profile', active: true }]}>

<Row>
            <Col  md={6} sm={6} xs={12}>
              <Card inverse className="text-center">
                <CardImg width="100%" src={bgImage} alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle>Customer Id : -{this.state.customer.Id}</CardTitle>
                  <CardText>{this.state.customer.fax}</CardText>
                  <CardText>{this.state.customer.NIC}</CardText>
                  <CardText>{this.state.customer.type}</CardText>
                  <CardText>{this.state.customer.email}</CardText>
                  <CardText>{this.state.customer.website}</CardText>
                  <CardText>{this.state.customer.address}</CardText>
                  <CardText>{this.state.customer.phoneNo}</CardText>

                  <CardText>{this.state.customer.DOB}</CardText>
                  <CardText>{this.state.customer.note}</CardText>

                  
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
                                    value={this.state.customer.Id} 
                                    disabled/>
                                <Button  color="success">Update</Button>
                            </form>
                            </CardText>
                            <form onSubmit={this.submit}>
                                    <input 
                                    type="hidden" 
                                    id="searchId" 
                                    name="searchId" 
                                    value={this.state.customer.Id} 
                                    disabled
                                    />
                                    <CardText>
                                    </CardText>        
                                    
                            <CardText>        
                            <Button  color="danger" onClick={this.submit}>Delete</Button>
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
