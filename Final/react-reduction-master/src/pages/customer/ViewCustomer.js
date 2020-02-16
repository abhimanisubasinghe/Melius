import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody,UncontrolledAlert,CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
import { customersearch } from 'components/UserFunction';
import { IconWidget, NumberWidget } from 'components/Widget';

const tableTypes = [ 'hover'];

class ViewCustomer extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            searchId:"",
            customers:[],
            total:[],
            
        }
    }

    componentDidMount() {
        
          axios.get(`http://localhost:5001/customers/customerView`)
          .then(res => {
            const customers = res.data.result;
            console.log(res.data.result);
            console.log(res.data.result1);
            console.log("$$$");
            this.setState({ customers });
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

        customersearch(user).then(res => {
            if(res) {
              console.log('qqqqqqqqqqqqq');
              console.log(res);
              if(res){
                this.props.history.push({
                    pathname:'/singleview',
                    data: res})
                
              }
              else{
                console.log("ERROR");  
                this.props.history.push('/singleview');
              }
            }
          })
    }

    render(){    
    return (
        <Page
        title="Customer"
        breadcrumbs={[{ name: 'View', active: true }]}
        className="TablePage"
        >
        <Row>
        <Col lg={3} md={6} sm={6} xs={12}>
            {/* <NumberWidget
              title="Total Profit"
              subtitle="This month"
              number= {this.state.total.map((total)=>total.count)}
              color="secondary"
              progress={{
                value: 75,
                label: 'Last month',
              }}
            /> */}
          </Col>
            <Col>
            <Card className="mb-3">
            
                <CardHeader></CardHeader>
                <CardBody>
                {<Table responsive>
                    <tr className="table-active">
                        <th>Id</th>
                        <th>Name </th>
                        <th>fax</th>
                        <th>NIC</th>
                        <th>type </th>
                        <th>E-mail</th>
                        <th>website</th>  
                        <th>address</th>
                        <th>phone No</th>
                        <th>DOB</th>
                        <th>note</th>
                        <th></th>
                    </tr>
                    {
                        this.state.customers.map((customer) =>
                            <tr>
                            <td>{customer.Id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.fax}</td>
                            <td>{customer.NIC}</td>
                            <td>{customer.type}</td>
                            <td>{customer.email}</td>
                            <td>{customer.website}</td>
                            <td>{customer.address}</td>
                            <td>{customer.phoneNo}</td>
                            <td>{customer.DOB}</td>
                            <td>{customer.note}</td>
                            <td>
                                <form onSubmit={this.handleInfo}>
                                                <input 
                                                type="hidden" 
                                                id="searchId" 
                                                name="searchId" 
                                                value={customer.Id} 
                                                disabled/>
                                                <Button color="info">View</Button>
                                            </form>

                            </td>
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

export default ViewCustomer;



// import Page from 'components/Page';
// import React from 'react';
// import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

// const tableTypes = ['hover'];

// const TablePage = () => {
//   return (
//     <Page
//       title="Tables"
//       breadcrumbs={[{ name: 'tables', active: true }]}
//       className="TablePage"
//     >
//       {tableTypes.map((tableType, index) => (
//         <Row key={index}>
//           <Col>
//             <Card className="mb-3">
//               <CardHeader>{tableType || 'default'}</CardHeader>
//               <CardBody>
//                 <Row>
//                   <Col>
//                     <Card body>
//                       <Table {...{ [tableType || 'default']: true }}>
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th scope="row">1</th>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">2</th>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">3</th>
//                             <td>Larry</td>
//                             <td>the Bird</td>
//                             <td>@twitter</td>
//                           </tr>
//                         </tbody>
//                       </Table>
//                     </Card>
//                   </Col>

                 
//                 </Row>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       ))}
      
//     </Page>
//   );
// };

// export default TablePage;
