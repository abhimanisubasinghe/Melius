import Page from 'components/Page';
import React from 'react';
import {addService} from 'components/UserFunction';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';
import axios from 'axios';

class Addservice extends React.Component{

  constructor() {
    super()

    this.state = {
      category: "",
      name: "",
      price: "",
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (e) => {
      this.setState(
      {[e.target.name]: e.target.value}
  )
  }

  onSubmit(e){
    e.preventDefault();
    
    const service = {
      category: this.state.category,
      name: this.state.name,
      price: this.state.price
    }

    addService(service).then(res => {
      if(res){
        if(res.state === true){
          console.log('done reg');
        }
        else{
          console.log('not add')
        }
      }
    })
  }

    render(){
    return (
      <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className='h3 mb-3 font-weight-m=normal'>Add Service</h1>
                            <div className='form-group'>
                                <label htmlFor='name'>Name</label>
                                <input type="text"
                                className='form-control'
                                name ='name'
                                placeholder="Service Name"
                                value={this.state.name}
                                onChange={this.onChange}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='category'>Category</label>
                                <input type="text"
                                className='form-control'
                                name ='category'
                                placeholder="Category"
                                value={this.state.category}
                                onChange={this.onChange}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='price'>Price</label>
                                <input type="text"
                                className='form-control'
                                name ='price'
                                placeholder="Price"
                                value={this.state.price}
                                onChange={this.onChange}/>
                            </div>
                            <button type='submit'
                            className='btn btn-lg btn-primary btn-block'>
                                Add Service
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    )
  }
}



export default Addservice;
