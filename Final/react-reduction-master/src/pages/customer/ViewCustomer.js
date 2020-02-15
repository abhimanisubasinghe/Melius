
// import Page from 'components/Page';
// import React,{ Component } from 'react';
// import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
// import axios from 'axios';
// //import './vb12.css'
// import {Link} from 'react-router-dom';

// const tableTypes = ['hover'];

// export default class Viewcustomer extends React.Component{

//     constructor(props) {
//         super(props)
    
//         this.state = {
           
//             Id: "",
//             name: "",
//             NIC: "",
//             type: "",
//             customers:[]

           
//         }
        
//     }

   
//     componentDidMount() {   /* lifecycle method*/

       
//         axios.get(`http://localhost:5001/customers/customerView`)
//           .then(res => {
//             const customers = res.data;
//             this.setState({customers});
            
           
//           })

        
//       }

//       onChange = (e) => {
//         this.setState(
//         {[e.target.name]: e.target.value}
//     )
//     }

 


//     render(){
        
//         return(
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
                                                             
//                                 <th >Id</th>
//                                 <th>name</th>
//                                 <th>NIC</th>
//                                 <th>type</th>
//                                 <th>Delete</th>
//                                 <th>Update</th>

//                           </tr>
//                         </thead>
//                         <tbody>
//                             { this.state.customers.map(person =>
//                                     <tr className='td' >
//                                                 <td>{person.Id}</td>
//                                                 <td>{person.name}</td>
//                                                 <td>{person.NIC}</td>
//                                                 <td>{person.type}</td>
//                                                 <td><Link to="update"><i class="fa fa-trash-o"  ></i></Link></td>
//                                                 <td><Link to="update"><i class="fa fa-file"   onClick={()=>this.edit(person.Id)}></i></Link></td>


//                                                                     {/* <td><Link to="update"><i class="fa fa-file" style={iconstyle}  onClick={()=>this.props.edit(person.Id)}></i></Link></td> */}




//                                     </tr>)}   
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

// }

// import React, { Component } from 'react';


// export default class Viewcustomer extends React.Component{
    
//     constructor(){
//         super()
//         this.state = {
           
//             customers:[]

//         }
//     }
//     componentDidMount() {
//         if(this.props.history.location.state){
//             let params = this.props.history.location.state;
//             this.setState({
//                 customers = params
//             })
//         }
//     };

// }