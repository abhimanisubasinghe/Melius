// import React, { Component } from 'react';
// import ReactToPrint from 'react-to-print';
// import { Button, Card, CardBody, CardHeader, Col, Row,Form, Table,UncontrolledAlert, } from 'reactstrap';


 
// export default class InvoiceDayPrint extends Component {

//     constructor(){
//         super()
//         this.state = {
//             invoiceId: '',
//             customerId: '',
//             vehicleId: '',
//             serviceId: '',
//             date: '',
//             total: '',
//             discount: '',
//             sub_total: '',
//             length: '',
//             lenght1: '',
//         }
        
//     }

//     componentDidMount(){
//         if(this.props.history.location.state){
//             console.log('componentDidMount');
//             console.log(this.props.history.location.state.detail.result)
//             console.log(this.props.history.location.state.detail.result1)
//             let result = this.props.history.location.state.detail.result;
//             let result1 = this.props.history.location.state.detail.result1;
//             length = result.length;
//             length1 = result1.length;
//             this.setState({
//                 invoiceId: result.invoiceId,
//                 customerId: result.customerId,
//                 serviceId: result.serviceId,
//                 vehicleId: result.vehicleId,
//                 date: result.date,
//                 total: result.total,
//                 discount: result.discount,
//                 sub_total: data.detail.sub_total,
//                 lenght: result.length,
//                 length1 : result1.length,

//             });
//             console.log(data.detail.invoiceId);
//             console.log(data.detail.serviceId)
//         }
//     }

//     myFun = () => {
//       window.print();
//     }




//   render() {
//     return (
//       <body>
//           var l = {this.state.length1}
//         <div id = 'printer'>
//         <Row>
//         <Col>
//           <Card className="mb-3">
//           <CardHeader>Invoice</CardHeader>
//       <CardBody>
//           <Table responsive>
//         <thead>
//           <th>Feilds</th>
//           <th>Values</th>
          
//         </thead>
//         <tbody>
//           <tr>
//             <td>InvoiceId</td>
//             <td>{this.state.invoiceId}</td>
//           </tr>
//           <tr>
//             <td>ServiceId</td>
//             <td>{this.state.serviceId}</td>
//           </tr>
//           <tr>
//             <td>CustomerId</td>
//             <td>{this.state.customerId}</td>
//           </tr>
//           <tr>
//             <td>Price</td>
//             <td>{this.state.total}</td>
//           </tr>
//           <tr>
//             <td>Discount</td>
//             <td>{this.state.discount}</td>
//           </tr>
//           <tr>
//             <td>price</td>
//             <td>{this.state.sub_total}</td>
//           </tr>
//         </tbody>
//         </Table>
//       </CardBody>
//           </Card>
//         </Col>
//       </Row>
        
//       </div>
//       <Form onSubmit={this.myFun}>
//       <Button>Print Button</Button>
//       </Form>
//       </body>

      
     
//     );
//   }
// }
 
// class Example extends React.Component {
//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => <a href="#">Print this out!</a>}
//           content={() => this.componentRef}
//         />
//         <InvoiceDayPrint ref={el => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }





// // for(var i = 0; i<result1.length; i++){
// //     console.log(result1[i].sub_total);
// //     var x = parseFloat(result1[i].sub_total);
// //     total = total + x;
// // }
// // console.log(total);
// // doc1 = new PDFDocument;
// // doc1.pipe(fs.createWriteStream(date+'_daily.pdf'));
// // console.log("tttttttttttttttt");
// //     // Set a title and pass the X and Y coordinates
// // doc1.fontSize(15).text('Summary of Services in the day !\n\n\n', 50, 50);
// //     // Set the paragraph width and align direction
// // for(var m = 0; m<result.length; m++){
// //     doc1.text("invoice Id : "+result[m].invoiceId+"\n customer id : "+result[m].customerId+"\n vehicle Id : "+result[m].vehicleId+"\n date : "+result[m].date+"\n total : "+result[m].total+"\n subtotal :"+result[m].sub_total,{
// //         width: 410,
// //         align: 'left'
// //     });
// //     doc1.text("\n\n",{
// //         width: 410,
// //         align: 'left'
// //     });
// // }    
// // doc1.text("\n"+"total of all services of the day = "+total, {
// //     width: 410,
// //     align: 'left'
// // });
// //    // res.json('done');
// // doc1.end();