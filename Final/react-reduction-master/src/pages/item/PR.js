import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table , Button , ButtonGroup ,CardText,CardSubtitle } from 'reactstrap';
import axios from 'axios';


const tableTypes = [''];


class PRTablePage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            searchId: "",
            pr:[ {
                Id:"",
                itemCode:"",
                itemName:"",
                quantity:"",
                description:"",
                issuedDate:"",
                deliveryDate:"",
                storageId:"",
                supplierId:"",
                supplierName:"",
                terms:"",
                status:""
             }
            ]
        }
    }

    handleClick = e =>{
        e.preventDefault();
        this.props.history.push('/new-pr');
    }

    handlePO = e =>{
      e.preventDefault();
      
    }
  /*  handleData = e =>{
        fetch("http://localhost:5000/reorder/PO")
        .then(res =>{
            res.text();
        })
        .then(res =>{
            this.setState({searchId : res})
            console.log(this.state.searchId)
        })
        .catch(err =>{
            console.log(err);
        });

    }*/

    componentDidMount(){
        //console.log(this.props.location.data);
          axios.get(`http://localhost:5000/reorder/PRs`)
          .then(res => {
            const len = res.data.data.length;
            const pr = res.data.data;
            this.setState({pr})
            
          /* for(let i=0;i<len;i++){
                const pos = res.data.data[i];
                this.setState((prevState)=>({
                    po:[...prevState.po,pos]}
                    ));         
                

                }*/
          })
    }

render(){

  return (
    <Page
      title="Purchase Requisitions"
      breadcrumbs={[{ name: 'purchase orders', active: true }]}
      className="TablePage"
    >
          
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
              <CardHeader>
              
              {<ButtonGroup className="mr-3 mb-3">
                <Button color="success" onClick={this.handleClick}>+ Add New Purchase Requisition</Button>
                
              </ButtonGroup>}
              </CardHeader>
              <CardBody>
              
                <Row>
                  <Col>
                    <Card body>
                    
                      <Table {...{ [tableType || 'default']: true }}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Purchase Requisition Id</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Issued Date</th>
                            <th>Est. Delivery Date</th>
                            <th>location</th>
                            <th>Supplier</th>
                            <th>Terms</th>
                            <th>Status</th>
                            <th>Modify</th>
                          </tr>
                        </thead>
                        <tbody>

            { this.state.pr.map((orders,i) =>
                          <tr>
                            <th scope="row">{i+1}</th>
                            <td>{orders.Id}</td>
                            <td>{orders.itemName}</td>
                            <td>{orders.quantity}</td>
                            <td>{orders.description}</td>
                            <td>{orders.issuedDate}</td>
                            <td>{orders.deliveryDate}</td>
                            <td>{orders.storageId}</td>
                            <td>{orders.supplierName}</td>
                            <td>{orders.terms}</td>
                            <td>{orders.status}</td>
                            <td>
                                {<ButtonGroup className="mr-3 mb-3">
                                    <Button color="primary" onClick={this.handlePO}>Add PO</Button>
                                    <Button color="success" onClick={this.handleClick}>Update</Button>
                                    <Button color="danger" onClick={this.handleClick}>Remove</Button>
                                   
                
                                </ButtonGroup>}</td>
                          </tr>
            )}
                        </tbody>
                      </Table>
                    </Card>
                  </Col>

                
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}

     
     
    </Page>
  );
      }
}
export default PRTablePage;
