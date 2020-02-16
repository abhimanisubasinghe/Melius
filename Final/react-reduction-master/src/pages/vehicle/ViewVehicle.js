import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
import { vehiclesearch } from '../../components/UserFunction';

const tableTypes = [ 'hover'];

class ViewVehicle extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            vehicles:[],
            serchId:"",
            
        }
    }

    componentDidMount() {
        
          axios.get(`http://localhost:5001/vehicles/view`)
          .then(res => {
            const vehicles = res.data;
            console.log(res.data);
            this.setState({ vehicles });
          })
          
    }

    
    handleInfo = e => {
        e.preventDefault();
        console.log("Hi!",e);
        console.log(e.target.searchId.value);
        console.log("hi2")
        const user = {
            searchId: e.target.searchId.value
        }    
        //console.log("e",e);
        //searchId.preventDefault();
        /*const user = {
            searchId: searchId
        }*/
        /*console.log("search",searchId)*/

        vehiclesearch(user).then(res => {
            if(res) {
              console.log('qqqqqqqqqqqqq');
              console.log(res);
              if(res){
                this.props.history.push({
                    pathname:'/singlevehicle',
                    data: res})
                
              }
              else{
                console.log("ERROR");  
                this.props.history.push('/view-vehicle');
              }
            }
          })
    }


    render(){    
    return (
        <Page
        title="vehicles"
        breadcrumbs={[{ name: 'View', active: true }]}
        className="TablePage"
        >
        <Row>
            <Col>
            <Card className="mb-3">
                <CardHeader></CardHeader>
                <CardBody>
                {<Table responsive>
                    <tr className="table-active">
                        <th>Id</th>
                        <th>vehicle No </th>
                        <th>category</th>
                        <th>type</th>
                        <th>mileage </th>
                        <th>owner NIC</th>
                       
                        <th></th>
                    </tr>
                    {
                        this.state.vehicles.map((vehicle) =>
                            <tr>
                            <td>{vehicle.Id}</td>
                            <td>{vehicle.vehicleNo}</td>
                            <td>{vehicle.category}</td>
                            <td>{vehicle.type}</td>
                            <td>{vehicle.mileage}</td>
                            <td>{vehicle.custId}</td>
                            
                            <td> 
                                <form onSubmit={this.handleInfo}>
                                                <input 
                                                type="hidden" 
                                                id="searchId" 
                                                name="searchId" 
                                                value={vehicle.Id} 
                                                disabled/>
                                                <Button color="info">View</Button>
                                            </form></td>
                            </tr> 
                        )
                    }
                </Table>}
                </CardBody>
            </Card>
            </Col>
        </Row>
        </Page>
    );
    };
}

export default ViewVehicle;
