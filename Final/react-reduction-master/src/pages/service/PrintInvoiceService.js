import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';

 
export default class InvoiceServicePrint extends Component {

    constructor(){
        super()
        this.state = {
            invoiceId: '',
            customerId: '',
            vehicleId: '',
            date: '',
            total: '',
            discount: '',
            sub_total: ''
        }
    }

    componentDidMount(){
        if(this.props.history.location.state){
            console.log('componentDidMount');
            let data = this.props.history.location.state;
            this.setState({
                invoiceId: data.detail.invoiceId,
                customerId: data.detail.customerId,
                vehicleId: data.detail.vehicleId,
                date: data.detail.date,
                total: data.detail.total,
                discount: data.detail.discount,
                sub_total: data.detail.sub_total
            });
            console.log(data.detail.sub_total);
        }
    }




  render() {
    return (
      <table>
        <thead>
          <th>Feilds</th>
          <th>Values</th>
          
        </thead>
        <tbody>
          <tr>
            <td>InvoiceId</td>
            <td>{this.state.InvoiceId}</td>
          </tr>
          <tr>
            <td>ServiceId</td>
            <td>{this.state.serviceId}</td>
          </tr>
          <tr>
            <td>CustomerId</td>
            <td>{this.state.customerId}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{this.state.total}</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>{this.state.discount}</td>
          </tr>
          <tr>
            <td>Paid</td>
            <td>{this.state.sub_total}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
 
class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <InvoiceServicePrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}