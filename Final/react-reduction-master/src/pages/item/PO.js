import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table , Button , ButtonGroup ,CardText,CardSubtitle } from 'reactstrap';
import axios from 'axios';


const tableTypes = [''];


class POTablePage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            searchId: "",
            po:[ {
                OrderID:"",
                supplierId:"",
                PRId:"",
                address:"",
                IssuedDate:"",
                EstimatedDelivery:"",
                Total:"",
                DeliveryTerms:"",
                PaymentTerms:""
             }
            ]
        }
    }

    handleClick = e =>{
        e.preventDefault();
        this.props.history.push('/new-po');
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
          axios.get(`http://localhost:5000/reorder/PO`)
          .then(res => {
            const len = res.data.data.length;
            const po = res.data.data;
            this.setState({po})
            
          })
    }

render(){

  return (
    <Page
      title="Purchase Orders"
      breadcrumbs={[{ name: 'purchase orders', active: true }]}
      className="TablePage"
    >
          
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
              <CardHeader>
              
              {<ButtonGroup className="mr-3 mb-3">
                <Button color="success" onClick={this.handleClick}>+ Add New Purchase Order</Button>
                
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
                            <th>Order Id</th>
                            <th>Supplier</th>
                            <th>Purchase Requisition Id</th>
                            <th>Deliver To</th>
                            <th>Issued Date</th>
                            <th>Est. Delivery Date</th>
                            <th>Total</th>
                            <th>Delivery Terms</th>
                            <th>Payment Terms</th>
                          </tr>
                        </thead>
                        <tbody>

            { this.state.po.map((orders,i) =>
                          <tr>
                            <th scope="row">{i+1}</th>
                            <td>{orders.OrderID}</td>
                            <td>{orders.supplierId}</td>
                            <td>{orders.PRId}</td>
                            <td>{orders.address}</td>
                            <td>{orders.IssuedDate}</td>
                            <td>{orders.EstimatedDelivery}</td>
                            <td>{orders.Total}</td>
                            <td>{orders.DeliveryTerms}</td>
                            <td>{orders.PaymentTerms}</td>
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
export default POTablePage;
