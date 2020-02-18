import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table,UncontrolledAlert, } from 'reactstrap';
import axios from 'axios';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

class ViewItemPage extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            searchId: "",
            items:[ {
                name: "#",
                inStock: "##",
                unitPrice: "123",
                descript: "fsfe",
                costPrice: "afsae",
                reorderLevel: "eaf",
                itemgroup: "1",
                brand: "1",
                type: "1",
                category: "1",
                storageId: "1",
                supplierId: "1",
                barcode: "1",
                leadTime:"1"
             }
            ]
        }
    }

    componentDidMount() {
        console.log(this.props.location.data);
          axios.get(`http://localhost:5000/item/`)
          .then(res => {
            if(res){
            const items = res.data;
            console.log("view",res.data);
            this.setState({ items });
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
        <Page
        title="Item"
        breadcrumbs={[{ name: 'View', active: true }]}
        className="TablePage"
        >
        <Row>
            <Col>
            <Card className="mb-3">
                
            {(this.props.location.data)?
                (this.props.location.data === "TRUE" || this.props.location.data === true)?
                    <UncontrolledAlert color="success">
                    SUCCESSFUL!
                    </UncontrolledAlert>
                    :
                    <UncontrolledAlert color="danger">
                    ERROR!
                    </UncontrolledAlert>
                :
                ""
            }
            
                <CardHeader>Operator data</CardHeader>
                <CardBody>
                <Table responsive>
                    <tr className="table-active">
                        <th>#</th>
                        <th>Item Name</th>
                        <th>In Stock</th>
                        <th>Unit Price</th>
                        <th>Cost Price</th>
                        <th>Description</th>
                        <th>Reorder Level</th>
                        <th>Item Group</th>
                        <th>Brand</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Storage Id</th>
                        <th>SuplierID</th>
                        <th>Lead time</th>
                        
                    </tr>
                    { this.state.items.map((item,i) =>

                                      <tr>
                                        <th>{i+1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.inStock}</td>
                                        <td>{item.unitPrice}</td>
                                        <td>{item.costPrice}</td>
                                        <td>{item.descript}</td>
                                        <td>{item.reorderLevel}</td>
                                        <td>{item.itemgroup}</td>
                                        <td>{item.brand}</td>
                                        <td>{item.type}</td>
                                        <td>{item.category}</td>
                                        <td>{item.storageId}</td>
                                        <td>{item.supplierId}</td>
                                        <td>{item.leadTime}</td>
                                        </tr>)}    
                </Table>
                </CardBody>
            </Card>
            </Col>
        </Row>
        </Page>
    );
    };
}

export default ViewItemPage;
