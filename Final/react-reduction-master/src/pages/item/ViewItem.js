import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table , Button , ButtonGroup ,CardText,CardSubtitle } from 'reactstrap';
import axios from 'axios';
import UpdateItemPage from './UpdateItemPage';


const tableTypes = ['HOVER'];


class ItemTablePage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            searchId: "",
            item:[ {
                itemCode:"",
                name:"",
                inStock:"",
                unitPrice:"",
                costPrice:"",
                reorderLevel:"",
                leadTime:"",
                descript:"",
                Itemgroup:"",
                brand:"",
                type:"",
                category:"",
                unit:"",
                number:"",
                supplierName:"",
                barcode:""
                
            
            }]
        }
    }

    handleEdit = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        this.props.history.push('/item-update/'+e.target.value);
        

    }
    handleDelete = e =>{

    }

    handleClick = e =>{
        e.preventDefault();
        this.props.history.push('/item-register');
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
          axios.get(`http://localhost:5000/items/`)
          .then(res => {
            //console.log(res.data);  
            const len = res.data.data.length;
            const item = res.data.data;
            this.setState({item})
            
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
      title="Items"
      breadcrumbs={[{ name: 'Item List', active: true }]}
      className="TablePage"
    >
          
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
              <CardHeader>
              
              {<ButtonGroup className="mr-3 mb-3">
                <Button color="success" onClick={this.handleClick}>+ Add New Item</Button>
                
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
                            <th>Item Id</th>
                            <th>Name</th>
                            <th>Value in Hand</th>
                            <th>Unit Price</th>
                            <th>Sales Price</th>
                            <th>Reorder Level</th>
                            <th>Lead Time</th>
                            <th>Description</th>
                            <th>Item Group</th>
                            <th>Brand</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Storage Unit</th>
                            <th>Supplier Name</th>
                            <th>Barcode</th>
                            <th>Actions</th>

                          </tr>
                        </thead>
                        <tbody>

            { this.state.item.map((orders,i) =>
                          <tr>
                            <th scope="row">{i+1}</th>
                            <td>{orders.itemCode}</td>
                            <td>{orders.name}</td>
                            <td>{orders.inStock}</td>
                            <td>{orders.unitPrice}</td>
                            <td>{orders.costPrice}</td>
                            <td>{orders.reorderLevel}</td>
                            <td>{orders.leadTime}</td>
                            <td>{orders.descript}</td>
                            <td>{orders.Itemgroup}</td>
                            <td>{orders.brand}</td>
                            <td>{orders.type}</td>
                            <td>{orders.category}</td>
                            <td>{orders.unit}{orders.number}</td>
                            <td>{orders.supplierName}</td>
                            <td>{orders.barcode}</td>
                            <td><ButtonGroup className="mr-3 mb-3">
                                    <Button color="warning" onClick={this.handleEdit} value={orders.itemCode}>Update</Button>
                                    <Button color="danger" onClick={this.handleDelete}>Delete</Button>
                            </ButtonGroup></td>
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
export default ItemTablePage;
