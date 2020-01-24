import React from 'react';
import axios from 'axios';
//import './vb12.css'
import {Link} from 'react-router-dom';


export default class Viewcustomer extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
           
       
            customers:[]

           
        }
        
    }

   
    componentDidMount() {   /* lifecycle method*/

       
        axios.get(`http://localhost:5001/customers/view`)
          .then(res => {
            const customers = res.data;
            this.setState({customers});
            
           
          })

        
      }

      onChange = (e) => {
        this.setState(
        {[e.target.name]: e.target.value}
    )
    }


    render(){
        
        return(
            <div>
                            <br/><br/>

            
                    <div className='container' style={container}>


  
                                        <h1 style={h1}>Customer Details</h1>
                                        <div className='col-md-12' style={colmd12}>
                                            <br/><br/>

                                                <div className="tbl-header" style={tblheader}>
                                                    <table className="table" style ={table}  >
                                                    <thead className='thead'  >
                                                        <tr className='tr' >
                                                            
                                                                <th >Id</th>
                                                                <th>name</th>
                                                                <th>NIC</th>
                                                                <th>type</th>
                                                                <th>Delete</th>
                                                                <th>Update</th>

                                                        </tr>
                                                    </thead>

                                                    </table>

                                                </div>
                                                <div className="tbl-content" style={tblcontent}>
                                                    <table className="table" style ={table} >
                                                    <tbody>
                                                         { this.state.customers.map(person =>
                                                                    <tr className='td' style={td}>
                                                                    <td>{person.Id}</td>
                                                                    <td>{person.name}</td>
                                                                    <td>{person.NIC}</td>
                                                                    <td>{person.type}</td>
                                                                    <td><Link to="deletecus"><i class="fa fa-trash-o"  style={iconstyle}></i></Link></td>

                                                                    <td><Link to="deletecus"><i class="fa fa-file" style={iconstyle}></i></Link></td>





                                                                    </tr>)}   
                                                        </tbody>
                                                        </table>
                                                </div>
                                            </div>



                     </div>
            </div>

           
        
        )
        
     }


 }   
 
 
 const iconstyle = {
  fontSize: '20px',
  color: 'black',
  width:"40px",
  fontWeight:"bolt",

}

const     button1 ={
  borderRadius:"20px" ,
  border:"1px solid #ff4b",
  background:"rgba(84, 181, 246, 0.93)",
  color:"rgba(249, 249, 249, 0.93)",
  fontSize:"12px",
  fontWeight: "bold",
  padding:"12px 45px",
  letterSpacing:"1px" ,
  borderColor:"rgba(127, 119, 242, 0.93)",
}

 const container={
    justifyContent:"center",
    alignItems:"center",
    textAlign: "center",
    
    background:"#0BB7A9",
    border:'radius',
    fontFamily: 'Roboto,sans-serif',
    borderRadius: "10px",


 }
 const h1 ={
    fontWeight:"bold",
    margin:"20px",
    color:"rgba(35, 31, 54, 0.89)",
    alignItems:"center",
  
  }

 const tblheader={
    backgroundColor: '#114252 ',

    color:'red',
    fontSize:'25px'
   }

const colmd12={
  width:"100%",
  backgroundColor: "white",
  borderRadius: "10px",
  position:"relative",
  overflow:"hidden",
  margin:"20px 20px 20px 5px",

}

const table={
    width:'100%',
    tableLayout: 'fixed',
    borderRadius: "10px",
    margin:"20px 20px 20px 5px",
  } 
  
const td={
    padding:'15px' ,
    textAlign: 'left',
    verticalAlign:'middle',
    fontWeight:"300",
    fontSize: '12px',
    color: '#010607',
    borderBottom:'solid  rgba(255,255,255,0.1)' 
  }

  const tblcontent={
    height:'350px',
    overflow:'auto',
    marginTop:'0px' ,
    border:'1px solid #25c481' ,
  }

 
  



